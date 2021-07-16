import React from 'react';
import Colors from '../../res/Colors';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const Background = {
  uri: `https://images.unsplash.com/photo-1570911831871-143ead9965e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGVybWVsb258ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
};

class Login extends React.Component {

  handlePress = () => {
    this.props.navigation.replace('BadgesLogin')
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <ImageBackground source={Background} style={styles.image}>
            <View style={styles.layerColor}>
              <Text style={styles.title}>Make an account !</Text>

              <View style={styles.login}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.form}
                    placeholder="Username"
                    placeholderTextColor={Colors.black}
                    />
                  <TextInput
                    secureTextEntry={true}
                    style={styles.form}
                    placeholder="Email"
                    placeholderTextColor={Colors.black}
                    />
                  <TextInput
                    secureTextEntry={true}
                    style={styles.form}
                    placeholder="Password"
                    placeholderTextColor={Colors.black}
                    />
                  <TextInput
                    secureTextEntry={true}
                    style={styles.form}
                    placeholder="Password Confirmation"
                    placeholderTextColor={Colors.black}
                    />
                </View>

                <TouchableOpacity
                  style={styles.buttonDark}
                  onPress={this.handlePress}>
                  <Text style={styles.buttonDarkText}>save</Text>
                </TouchableOpacity>
              </View>

            </View>

          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column',

    justifyContent: 'center',

    backgroundColor: Colors.black,

  },

  image: {
    flex: 1,
    marginTop: -150,
    paddingTop: 205,
    paddingBottom: 130,
    marginBottom: -75,
  },

  layerColor: {
    flex: 2,

    justifyContent: 'center',

    alignItems: 'center',
  },

  title: {

    marginBottom: 50,

    fontSize: 100,

    fontWeight: 'bold',

    fontSize: 20,

    color: Colors.black,
  },

  login: {
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 5,
    },

    height: 440,

    marginTop: -30,

    shadowOpacity: 0.36,

    shadowRadius: 6.68,

    elevation: 11,

    backgroundColor: Colors.white,

    width: 261,

    borderRadius: 15,

    display: 'flex',

    alignItems: 'center',

    zIndex: 1,

    position: 'relative',
  },

  inputContainer: {
    paddingTop: 40,

    marginBottom: -30,
  },

  form: {
    paddingHorizontal: 20,

    color: Colors.black,

    borderBottomColor: Colors.black,

    borderBottomWidth: 1,

    marginBottom: 37,

    width: 150,

    textAlign: 'center',
  },

  buttonDark: {
    width: 193,

    padding: 15,

    marginTop: 400,

    borderRadius: 15,

    backgroundColor: Colors.black,

    borderColor: Colors.black,

    borderWidth: 1,

    justifyContent: 'center',

    zIndex: 5,

    position: 'absolute',
  },

  buttonDarkText: {
    textAlign: 'center',

    fontSize: 18,

    fontWeight: 'bold',

    paddingHorizontal: 25,

    color: Colors.white,
  },
});

export default Login;
