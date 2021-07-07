import React from 'react'
import Colors from '../../res/Colors'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar
} from 'react-native'

class BadgesInformation extends React.Component{
    render(){
        return(
            <View style={styles.information}>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim erat nec gravida commodo. Ut rutrum laoreet ipsum, vel fermentum sapien finibus a. Donec nulla purus, placerat sit amet erat a, pellentesque tristique massa. Quisque vulputate egestas sapien, in congue tellus laoreet eu. Sed ipsum orci, pretium vitae gravida at, venenatis quis eros. Fusce non sem at felis vulputate volutpat non molestie mauris. Suspendisse at suscipit augue. </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    information:{
        height: '100%',
        width: '100%',

        backgroundColor: Colors.black,
        color: Colors.white,
        fontSize:20,
        display: 'flex',
        justifyContent: 'center'
    },
    text:{
        width: '90%',
        margin: '5%',

        color: Colors.white,
        fontSize:20,
        display: 'flex',
        justifyContent: 'center'
    }
})

export default BadgesInformation