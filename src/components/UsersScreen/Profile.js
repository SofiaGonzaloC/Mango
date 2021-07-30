import React from "react"
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

class Profile extends React.Component {
    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <Text>Profile</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: Colors.yellow
    }
})

export default Profile