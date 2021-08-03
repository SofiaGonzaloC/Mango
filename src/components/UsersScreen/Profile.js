import React from "react"
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image
} from "react-native"
import Colors from "../../res/Colors"
import UserSession from "../../libs/sessions"

class Profile extends React.Component {

    state = {
        user: {},
        // user: undefined // This was changed for ^, left just in case
        token: undefined,
    }

    componentDidMount = () => {
        this.getUserData()
    }

    getUserData = async () => {
        let user = await UserSession.instance.getUser()
        let token = await UserSession.instance.getToken(user.username)
        this.setState({ user: user, token: token })
        console.log(this.state)
    }

    // USER VARIABLES NOT WORKING

    render() {
        const { user } = this.state
        return (
                <View style={styles.container}>
                    <View style={styles.badge}>
                        <Image
                            style={styles.header}
                            source={{ uri: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fsrc%2F480%2F4800346.jpg&f=1&nofb=1` }}
                        />
                        <Image
                            style={styles.profileImage}
                            source={{ uri: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixy.org%2Fsrc%2F480%2F4800346.jpg&f=1&nofb=1` }}
                        />
                    </View>

                    <View style={styles.userInfo}>
                        <Text style={styles.name}>{user.username}</Text>
                    </View>

                    <Text style={styles.city}>{user.first_name} {user.last_name}</Text>
                    <Text style={styles.city}>Chihuahua</Text>

                    <View style={styles.data}>
                        <View style={styles.dataColumns}>
                            <Text style={styles.dataInfo}>{user.followers}</Text>
                            <Text style={styles.smallText}>Followers</Text>
                        </View>
                        <View style={styles.dataColumns}>
                            <Text style={styles.dataInfo}>{user.likes}</Text>
                            <Text style={styles.smallText}>Likes</Text>
                        </View>
                        <View style={styles.dataColumns}>
                            <Text style={styles.dataInfo}>{user.posts}</Text>
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
        height: 90,
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
        marginTop: 160,
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

export default Profile