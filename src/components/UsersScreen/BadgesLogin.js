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
      this.props.navigation.replace('BadgesTabNavigator')
    }
  }

  handlePress = () => {
    this.props.navigation.replace('BadgesSignup')
  };

  toggleIsPassword = () => {
    if (this.state.isPasswordVisible) {
      this.setState({ isPasswordVisible: false })
    } else {
      this.setState({ isPasswordVisible: true })
    }
  }

  render() {
    const { isPasswordVisible, loading, error } = this.state
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <ImageBackground source={Background} style={styles.image}>
            <View style={styles.layerColor}>
              <Text style={styles.title}>Login</Text>


              <View style={styles.login}>

                {/* IF login is incorrect : */}
                {error ? (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorMsg}>
                      {'Invalid Username or password. PLease try again'}
                    </Text>
                  </View>
                ) : null}

                {/* user input */}
                <View style={styles.inputContainer}>

                  <TextInput
                    style={styles.form}
                    placeholder={"Username"}
                    placeholderTextColor={Colors.black}
                    onChangeText={text => {
                      this.setState(prevState => {
                        let form = Object.assign({}, prevState.form)
                        form.username = text
                        return { form }
                      })
                    }}
                  />

                  {/* Password input */}
                  <TextInput
                    style={styles.form}
                    secureTextEntry={true}
                    placeholder={"Password"}
                    placeholderTextColor={Colors.black}
                    onChangeText={text => {
                      this.setState(prevState => {
                        let form = Object.assign({}, prevState.form)
                        form.password = text
                        return { form }
                      })
                    }}
                  />
                  
                  {/* <TouchableOpacity onPress={this.toggleIsPasswordVisible}>
                    <image
                      style={{marginRight: 10}}
                      source={
                        isPasswordVisible
                        ? require("../../assets/show.png")
                        : require("../../assets/hide.png")
                      }
                    />
                  </TouchableOpacity> */}
                </View>

                <TouchableOpacity
                  style={styles.buttonDark}
                  onPress={this.handleSubmit}>
                  <Text style={styles.buttonDarkText}>LOGIN</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.signup}>
              <TouchableOpacity
                style={styles.buttonLight}
                onPress={this.handlePress}
              >
                <Text style={styles.buttonLightText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

        </View>
      </ScrollView>
    );
  }
}

export default Login;
