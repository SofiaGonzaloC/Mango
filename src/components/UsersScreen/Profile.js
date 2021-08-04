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
        user: {
            profile: {}
        },
        // user: undefined // This was changed for ^, left just in case
        token: {},
    }

    componentDidMount = () => {
        this.getUserData()
    }

    getUserData = async () => {
        let user = await UserSession.instance.getUser()
        let token = await UserSession.instance.getToken(user.username)
        this.setState({ user: user, token: token })
        console.log(this.state.user.profile.age)
    }

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

                <View style={styles.information}>
                    <View style={styles.top}>
                        <Text style={styles.username}>{user.username}  </Text>
                        <Text style={styles.age}>{user.profile.age}</Text>
                    </View>

                    <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
                    <Text style={styles.place}>{user.profile.city}, {user.profile.country}</Text>
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
        // flex: 1,
        margin: 20,
        marginTop: 30,
        width: '90%',
        height: 120,
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
        top: '20%',
        left: '21%',
    },
    top:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    information: {
        marginTop: 110,
        alignItems: 'center',
    },
    username: {
        color: Colors.yellow,
        fontSize: 50
    },
    age:{
        color: Colors.white,
        fontSize: 45
    },
    name: {
        color: Colors.white,
        fontSize: 30,
        marginTop: 15
    },
    place: {
        color: Colors.white
    }

})

export default Profile