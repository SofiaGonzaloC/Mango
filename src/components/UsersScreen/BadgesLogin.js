import React from 'react';
import Colors from '../../res/Colors';
import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import UserSession from '../../libs/sessions';
import Loader from "../Generic/Loader"

const Background = {
  uri: `https://images.unsplash.com/photo-1501746877-14782df58970?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
};

class Login extends React.Component {

  state = {
    loading: false,
    error: null,
    user: undefined,
    isPasswordVisible: true,
    form: {},
  }

  handleSubmit = async () => {
    try {
      this.setState({ loading: true, error: null, user: undefined })
      let response = await UserSession.instance.login(this.state.form);

      if (typeof response === 'object') {
        console.log(response)
        this.setState({ loading: false, error: response, user: undefined })
      } else {
        this.setState({ loading: false, error: null, user: response })
      }
    } catch (err) {
      this.setState({ loading: false, error: err })
    }
    if (this.state.user) { /* If user exists move to v screen */
      this.props.navigation.navigate('BadgesTabNavigator')
    }
  }

  handlePress = () => {
    this.props.navigation.replace('BadgesSignup')
  };

  toggleIsPasswordVisible = () => {
    // Alternates between true or false to change view and logo of password
    if (this.state.isPasswordVisible) {
      this.setState({ isPasswordVisible: false })
    } else {
      this.setState({ isPasswordVisible: true })
    }
  }

  render() {
    const { isPasswordVisible, loading, error } = this.state

    // Shows loader if screen is not ready to be shown
    if (loading == true) {
      return <Loader />
    }

    return (
      <ScrollView>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <ImageBackground source={Background} style={styles.image}>
          <View style={styles.container}>

            <Text style={styles.title, styles.lightTitle}> Login !</Text>

            <View style={styles.formContainer}>

              {/* IF login is incorrect : */}
              {error ? (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorMsg}>
                      {'Invalid Username or password. PLease try again'}
                    </Text>
                  </View>
                ) : null}

              {/* Username */}
              <TextInput
                placeholder={"Username"}
                style={styles.formContent}
                onChangeText={text => {
                  this.setState(prevState => {
                    let form = Object.assign({}, prevState.form)
                    form.username = text
                    return { form }
                  })
                }}
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

            </View>

            <TouchableOpacity
              style={styles.darkButton}
            >
              <Text style={{ color: Colors.white, fontSize: 25 }}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.lightButton}
              onPress={this.handlePress}
            >
              <Text style={{ color: Colors.black, fontSize: 10 }}>SIGNUP</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default Login;
