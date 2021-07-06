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
  uri: `https://images.unsplash.com/photo-1501746877-14782df58970?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
};

class Login extends React.Component {

  handlePress = () => {
    this.props.navigation.replace('Badges')
  };

  signUp = () => {
    this.props.navigation.replace('BadgesSignup')
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <ImageBackground source={Background} style={styles.image}>
            <View style={styles.layerColor}>
              <Text style={styles.title}>Login</Text>

              <View style={styles.login}>
                <View style={styles.inputContainer}>
                  <TextInput
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
                </View>

                <TouchableOpacity
                  style={styles.buttonDark}
                  onPress={this.handlePress}>
                  <Text style={styles.buttonDarkText}>LOGIN</Text>
                </TouchableOpacity>
              </View>

            </View>

          </ImageBackground>

          <View style={styles.signup}>
            <TouchableOpacity
              style={styles.buttonLight}
              onPress={this.signUp}
            >
              <Text style={styles.buttonLightText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
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

  logoContainer: {
    alignSelf: 'center',
    marginTop: -100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.0,
    elevation: 20,

    backgroundColor: Colors.white,

    width: 110,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 90,
    position: 'absolute',

    zIndex: 2,
  },

  logo: {
    width: 105,
    height: 105,
    justifyContent: 'center',
    alignSelf: 'center',

    zIndex: 2,
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

    color: Colors.yellow,
  },

  login: {
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 5,
    },

    height: 250,

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

    marginBottom: 30,

    width: 150,

    textAlign: 'center',
  },

  signup: {
    display: 'flex',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: 10,
    marginBottom: 50,

  },

  signupText: {
    marginTop: 80,

    color: Colors.black,
  },

  buttonLight: {
    width: 140,
    height: 50,

    padding: 15,

    marginTop: 40,

    borderRadius: 15,

    backgroundColor: Colors.white,

    borderColor: Colors.black,

    borderWidth: 2.5,

    position: 'relative'
  },

  buttonLightText: {
    textAlign: 'center',

    fontSize: 10,

    fontWeight: 'bold',

    paddingHorizontal: 25,

    color: Colors.black,
  },
  buttonDark: {
    width: 193,

    padding: 15,

    marginTop: 220,

    // marginBottom: 0,

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
