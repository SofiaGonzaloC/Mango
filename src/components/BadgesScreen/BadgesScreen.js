import React from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    FlatList,
    Alert,
    StatusBar,
} from 'react-native'
import Colors from '../../res/Colors'
import Http from '../../libs/http'
import BadgesItem from "./BadgesItem"
import { TapGestureHandler } from 'react-native-gesture-handler'
import BadgesSearch from './BadgesSearch'
import Loader from "../Generic/Loader"
import Storage from "../../libs/storage"

class BadgesScreen extends React.Component {

    state = {
        loading: false,
        badge: undefined,
        badgesCopy: undefined,
    };

    componentDidMount() {
        this.fetchdata();
        this.focusEvent();
        this.blurEvent();
    }

    focusEvent = () => {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.setFetchInterval();
        });
    }

    blurEvent = () => {
        this.blurListener = this.props.navigation.addListener('blur', () => {
            clearInterval(this.interval)
        });
    }

    setFetchInterval = () => {
        this.interval = setInterval(this.fetchdata, 3000)
    };

    // Gets information to display badges
    fetchdata = async () => {
        this.setState({ loading: true })
        let response = await Http.instance.get_all()
        response = response.reverse()
        this.setState({ loading: false, badges: response, badgesCopy: response })
    };

    // If pressed, directs to a screen with the information of the badge
    handlePress = item => {
        this.props.navigation.navigate('BadgesDetail', { item })
    };

    // If pressed, directs to a screen to edit the information of a badge
    handleEdit = item => {
        this.props.navigation.navigate('BadgesEdit', { item })
    };

    // Updates in case any information of the badge changes
    handleChange = query => {
        const { badgesCopy } = this.state;

        const badgesFiltered = badgesCopy.filter(badge => {
            return badge.name.toLowerCase().includes(query.toLowerCase())
        });

        this.setState({ badges: badgesFiltered })

        if (query) {
            clearInterval(this.interval)
        } else {
            this.setFetchInterval()
        }
    }

    // Displays an alert to the user to make sure if they really want to delete the selected badge
    handleDelete = item => {
        Alert.alert(
            'Are you sure?',
            `Do you really want to delete ${item.name}'s badge?\n\nThis process can't be undone`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: async () => {
                        this.setState({ loading: true, badges: undefined });
                        await Http.instance.remove(item._id);
                        let key = `favorite-${item._id}` // Erases badge from favorites
                        await Storage.instance.remove(key)
                        this.fetchdata()
                    },
                    style: 'destructive',
                },
            ],
            {
                cancelable: true,
            },
        );
    };

    componentWillUnmount() {
        this.focusListener();
        this.blurEvent()
    }

    render() {
        const { badges, loading } = this.state;

        // Shows a loading screen if badges are not ready to show
        if (loading === true && !badges) {
            return <Loader />
        }

        return (
            <View style={[styles.container, styles.horizontal]}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <BadgesSearch onChange={this.handleChange} />
                <FlatList
                    style={styles.list}
                    data={badges}
                    renderItem={({ item }) => (
                        <BadgesItem
                            key={item._id}
                            item={item}
                            onPress={() => this.handlePress(item)}
                            onEdit={() => this.handleEdit(item)}
                            onDelete={() => this.handleDelete(item)}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.black,
    },
    horizontal: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    loader: {
        height: '100%',
        paddingHorizontal: 10,
    },
    list: {
        width: '100%',
        paddingHorizontal: 10,
    }
})

export default BadgesScreen