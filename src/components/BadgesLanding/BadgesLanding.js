import React from "react";
import { styles } from 'ansi-colors';
import { defer } from 'lodash';
import Colors from "../../res/Colors"
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar
} from 'react-native'

const ImageBackground = {
    uri: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb3dlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
};

class BadgeLanding extends React.Component {

    handlePress = () => {
        this.props.navigation.replace('Badges')
    };

    render() {
        return (
            <View style={StyleSheet.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <ImageBackground source={importBackground} style={styles.image}>
                    <View style={styles.layerColor}>
                        <Text style={styles.title}>
                            Welcome {'\n'} to my {'\n'} ...
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                            <Text style={styles.buttonText}>Welcome</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    layerColor: {
        flex: 2,
        backgroundColor: '#1A535C06',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        marginHorizontal: 30,
        fontSize: 80,
        fontWeight: 'bold',
        color: Colors.white,
    },
    button: {
        padding: 15,
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: Colors.blue,
        borderColor: Colors.white,
        borderWidth: 1,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 25,
        color: Colors.white,
    }
})

export default BadgeLanding