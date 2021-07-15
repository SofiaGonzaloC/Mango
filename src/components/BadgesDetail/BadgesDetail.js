import React from "react"
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native"
import Colors from '../../res/Colors'
import Storage from "../../libs/storage"

class BadgesDetail extends React.Component {

    state = {
        badge: {},
        isFavorite: false,
    }

    componentDidMount() {
        this.getBadge()
    }

    getBadge = () => {
        const { item } = this.props.route.params
        this.setState({ badge: item }), () => {
            this.getFavorite()
        }
        this.props.navigation.setOptions({ title: item.name })
    }

    // Function show badges which are selected as favorite
    getFavorite = async () => {
        try {
            const key = `favorite-${this.state.badge._id}`
            const favoriteStr = await Storage.instance.get(key)
            if (favoriteStr != null) {
                this.setState({ isFavorite: null })
            }
        } catch (err) {
            console.log('Get favorite err', err)
        }
    }

    // Toggle between if a badge is or not favorite
    toggleFavorite = () => {
        if (this.state.isFavorite) {
            this.removeFavorite()
        } else {
            this.addFavorite()
        }
    }

    // Function to select a badge as favorite
    addFavorite = async () => {
        const badge = JSON.stringify(this.state.badge)
        const key = `favorite-${this.state.badge._id}`

        const stored = await Storage.instance.store(key, badge)

        if (stored) {
            this.setState({ isFavorite: true })
        }
    }

    // Function to remove a badge from favorites
    removeFavorite = async () => {
        const key = `favorite-${this.state.badge._id}`
        await Storage.instance.remove(key)
        this.setState({ isFavorite: false })
    }

    render() {
        const { badge, isFavorite } = this.state

        return (
            <View style={styles.container}>
                <View style={styles.badge}>
                    <Image
                        style={styles.header}
                        source={{ uri: `${badge.header_img_url}` }}
                    />
                    <Image
                        style={styles.profileImage}
                        source={{ uri: `${badge.profile_picture_url}` }}
                    />

                </View>
                <TouchableOpacity
                    style={styles.favorite}
                    onPress={this.toggleFavorite}
                >
                    <Image source={
                        isFavorite
                            ? require('../../assets/isFavorite.png') //if true
                            : require('../../assets/notFavorite.png') //else
                    }
                    />

                </TouchableOpacity>

                <View style={styles.userInfo}>
                    <Text style={styles.name}>{badge.name}</Text>
                    <Text style={styles.age}>{badge.age}</Text>
                </View>
                <Text style={styles.city}>{badge.city}</Text>

                <View style={styles.data}>
                    <View style={styles.dataColumns}>
                        <Text style={styles.dataInfo}>{badge.followers}</Text>
                        <Text style={styles.smallText}>Followers</Text>
                    </View>
                    <View style={styles.dataColumns}>
                        <Text style={styles.dataInfo}>{badge.likes}</Text>
                        <Text style={styles.smallText}>Likes</Text>
                    </View>
                    <View style={styles.dataColumns}>
                        <Text style={styles.dataInfo}>{badge.post}</Text>
                        <Text style={styles.smallText}>Posts</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    badge: {
        flex: 1,
        margin: 20,
        marginTop: 30,
        width: '90%',
        height: '100%',
        backgroundColor: Colors.white,
        borderRadius: 25,
    },
    header: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    profileImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: Colors.red,
        position: 'absolute',
        top: '23%',
        left: '21%',
    },
    favorite: {
        position: 'absolute',
        top: 150,
        right: 20,
    },
    userInfo: {
        flexDirection: 'row',
        marginTop: 110,
        justifyContent: 'center',
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.white,
        marginTop: 20
    },
    age: {
        fontSize: 28,
        margin: 20,
        color: Colors.white,
    },
    city: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: Colors.white,
    },
    data: {
        padding: 20,
        marginTop: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: Colors.yellow,
    },
    dataColumns: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataInfo: {
        marginTop: 20,
        fontSize: 28,
        fontWeight: 'bold',
        marginHorizontal: 25,
        color: Colors.white
    },
    smallText: {
        color: Colors.yellow
    }
})


export default BadgesDetail