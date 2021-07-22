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
import Loader from "../Generic/Loader"
import UserSession from "../../libs/sessions"

const Background = {
  uri: `https://images.unsplash.com/photo-1570911831871-143ead9965e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGVybWVsb258ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
};

class SignUp extends React.Component {

  state = {
    loading: false,
    error: null,
    errors: [],
    user: undefined,
    isPasswordVisible: true,
    isPasswordConfVisible: true,
    form: {}
  }

  toggleIsPasswordVisible = () => {
    if (this.state.isPasswordVisible) {
      this.setState({ isPasswordVisible: false })
    } else {
      this.setState({ isPasswordVisible: true })
    }
  }

  toggleIsPasswordConfVisible = () => {
    if (this.state.isPasswordConfVisible) {
      this.setState({ isPasswordConfVisible: false })
    } else {
      this.setState({ isPasswordConfVisible: true })
    }
  }

  // Sends to screen "badgeslogin"
  handlePress = () => {
    this.props.navigation.replace('BadgesLogin')
  };

  render() {
    const { isPasswordVisible, isPasswordConfVisible, loading, error } = this.state

    if (loading == true) {
      return <Loader />
    }

    return (
      <ScrollView>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={styles.container}>
          <ImageBackground source={Background} style={styles.image}>
            <Text>Create an Account !</Text>
            <View style={styles.formContainer}>

              {/* IF login is incorrect : */}
              {error ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorMsg}>
                    {'There was a problem with your signup. Try again.'}
                  </Text>
                </View>
              ) : null}

              {/* Username */}
              <TextInput
                placeholder={"Username"}
              />

              {/* Email */}
              <TextInput
                placeholder={"Email"}
              />

              {/* Password */}
              <TextInput
                placeholder={"Password"}
                secureTextEntry={isPasswordVisible}
              />

              {/* Password Confirmation */}
              <TextInput
                placeholder={"Password Confirmation"}
                secureTextEntry={isPasswordConfVisible}
              />

            </View>

            <TouchableOpacity>
              <Text>SIGN UP</Text>
            </TouchableOpacity>
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

    backgroundColor: Colors.yellow,

    height: '100%'
  },

  image: {
    flex: 1,
    marginTop: -130,
    paddingTop: 205,
    paddingBottom: 130,
    marginBottom: -75,
  },
})

export default SignUp
