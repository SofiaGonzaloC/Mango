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
import styles from './styles';

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
        <ImageBackground source={Background} style={styles.image}>
          <View style={styles.container}>

            <Text style={styles.title}>Create an Account !</Text>

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
                style={styles.formContent}
              />

              {/* Email */}
              <TextInput
                placeholder={"Email"}
                style={styles.formContent}
              />

              {/* Password */}
              <View style={styles.formContent}>
                <TextInput
                  placeholder={"Password"}
                  secureTextEntry={isPasswordVisible}

                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form)
                      form.password = text
                      return { form }
                    })
                  }}
                />
                <TouchableOpacity onPress={this.toggleIsPasswordVisible}>
                  <Image
                    source={
                      isPasswordVisible
                        ? require("../../assets/show.png")
                        : require("../../assets/hide.png")
                    }
                  />
                </TouchableOpacity>
              </View>

              {/* Password Confirmation */}
              <View style={styles.formContent}>
                <TextInput
                  placeholder={"Password Conf"}
                  secureTextEntry={isPasswordConfVisible}
                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form)
                      form.password = text
                      return { form }
                    })
                  }}
                />
                <TouchableOpacity onPress={this.toggleIsPasswordConfVisible}>
                  <Image
                    source={
                      isPasswordVisible
                        ? require("../../assets/show.png")
                        : require("../../assets/hide.png")
                    }
                  />
                </TouchableOpacity>
              </View>

            </View>

            <TouchableOpacity
              style={styles.darkButton}
              onPress={this.handlePress}
            >
              <Text style={{color:Colors.white, fontSize: 20}}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default SignUp
