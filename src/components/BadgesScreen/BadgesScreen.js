import React from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    FlatList,
    Alert,
    TouchableOpacityBase,
} from 'react-native'
import Colors from "../../res/Colors"
import Http from "../../libs/http"
import BadgesItem from "./BadgesItem"

class BadgesScreen extends React.Component {

    state = {
        loading: false,
        badge: undefined,
    };

    componentDidMount() {
        this.fetchdata();
        this.setFetchInterval();
    }
    
    setFetchInterval = () => { //is this correct?
        this.interval = setInterval(this.fetchdata, 3000)
    };

    fetchdata = async () => {
        this.setState({ loading: true })
        let response = await Http.instance.get_all()
        response = response.reverse()
        this.setState({ loading: false, badges: response })
    };

    handlePress = item => {
        this.props.navigation.navigate('BadgesDetail', { item })
    };

    handleEdit = item => {
        this.props.navigation.navigate('Badges', { item })
    };

    handleDelete = item => {
        Alert.alert('Are you sure?',
            `Do you really want to delete ${item.name}'s badge?\n\nThis process can't be undone`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: async () => {
                        this.setState({ loading: true, badges: undefined })
                        await Http.instance.remove(item._id) //is this correct?
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

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        const { badges, loading } = this.state;

        if(loading===true && !badges){
            return(
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator
                    style={styles.loader}
                    color="#000000"
                    size="large"
                />
            </View>
            );
        }



        return (
            <View style={[styles.container, styles.horizontal]}>
                <FlatList
                    style={styles.list}
                    data={badges}
                    renderItem={({ item }) => (//smn missing here
                        <BadgesItem
                            key={item._id}
                            item={item}
                            onPress={() => this.handlePress(item)}
                            onEdit={() => this.handleEdit(item)}
                            onDelete={() => this.handleDelete(item)}
                        />)}
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