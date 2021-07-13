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
import styles from './styles';

const Background = {
  uri: `https://images.unsplash.com/photo-1501746877-14782df58970?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuZ298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
};

class Login extends React.Component {



  handlePress = () => {
    this.props.navigation.replace('BadgesTabNavigator')
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

export default Login;
