import React from 'react'
import {
    View,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    StatusBar,
} from 'react-native'
import Loader from '../Generic/Loader'
import Storage from "../../libs/storage"
import BadgesItem from "../BadgesScreen/BadgesItem"
import exampleStyles from "../../styles/example"

class Favorites extends React.Component {

    state = {
        loading: false,
        badges: undefined,
    }

    componentDidMount() {
        this.getFavorites()
        this.focusEvent()
    }

    focusEvent = () => {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.getFavorites()
        })
    }

    getFavorites = async () => {
        this.setState({loading: true, badges: undefined})
        try {
            const allKeys = await Storage.instance.getAllKeys()
            const keys = allKeys.filter(key => key.includes('favorite-'))
            const favs = await Storage.instance.multiGet(keys)
            const favorites = favs.map(fav => JSON.parse(fav[1]))
            this.setState({ loading: false, badges: favorites })
        } catch (err) {
            console.log('get favorite err', err)
        }
    }

    handlePress = item => {
        this.props.navigation.navigate('FavoritesDetails', {item})
    }

    componentWillUnmount = () => {
        this.focusListener()
    }

    render() {

        const { badges, loading } = this.state

        if (loading == true && !badges) {
            <Loader />
        }
        return (
            <View style={[ exampleStyles.container, exampleStyles.horizontal]}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <FlatList
                    style={styles.list}
                    data={badges}
                    renderItem={({ item }) => (
                        <BadgesItem item={item} onPress={() => this.handlePress(item)} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    favoritesContainer: {
        paddingTop: 100,
    },
    list: {
        width: '100%',
        paddingHorizontal: 10,
    }
})

export default Favorites