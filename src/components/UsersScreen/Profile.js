import React from "react"
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image
} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
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
        this.setState({user: user, token: token})
        console.log(this.state)
    }

    // USER VARIABLES NOT WORKING

    render() {
        const {user} = this.state
        return (
            <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                    <Text>{user.username}</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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