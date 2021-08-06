import React from "react"
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import Colors from "../../res/Colors"
import UserSession from "../../libs/sessions"

class Profile extends React.Component {

    state = {
        user: {
            profile: {}
        },
        token: '',
        picture: ''
    }

    componentDidMount = () => {
        this.getUserData()
    }

    getUserData = async () => {
        let user = await UserSession.instance.getUser()
        let token = await UserSession.instance.getToken(user.username)
        this.setState({ user: user, token: token })
    }

    handleChooseProfileImage = () => {
        const options = {
            includeBase64: false,
            mediaType: 'photo'
        }
        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                let photo = response.assets[0].uri
                this.setState({ picture: photo })
                this.editProfilePicture()
            }
        })
        // Chooses an image from the library

        // Takes a new picture
        // launchCamera (options, response =>{
        //     console.log(response.assets[0].uri)
        // })
    }

    editProfilePicture = async () => {
        const { user, token, picture } = this.state

        let response = await UserSession.instance.editProfile(
            user.id,
            token,
            picture
        )
        console.log(response)
        // this.setState({ user: response })
    }

    render() {
        const { user, picture } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.badge}>
                    <Image
                        style={styles.header}
                        source={{ uri: `${user.profile.header_img}` }}
                    />
                    <Image
                        style={styles.profileImage}
                        source={{ uri: picture || `${user.profile.profile_picture}` }}
                    />
                </View>
                <TouchableOpacity
                    style={styles.imageEdit}
                    onPress={this.handleChooseProfileImage}
                >
                    <Image
                        source={require('../../assets/edit_icon.png')}
                    />
                </TouchableOpacity>

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
    top: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    information: {
        marginTop: 110,
        alignItems: 'center',
    },
    username: {
        color: Colors.white,
        fontSize: 28,
        fontWeight: 'bold'
    },
    age: {
        color: Colors.white,
        fontSize: 28,
        fontWeight: '100'
    },
    name: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    place: {
        color: Colors.white,
        fontSize: 18
    },
    imageEdit: {
        // position: 'absolute',
        // marginRight: 50
    }

})

export default Profile