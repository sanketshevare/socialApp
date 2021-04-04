import React, { Component } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,

} from "react-native";
//import setup from "./setup";
import Firebase from './config/firebase';


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: '',
      error: '',
      isError: false,
    })
  }

  handleLogin = () => {
    const { email, password } = this.state;

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ isError: true });

        //this.setState({ });
        setTimeout(() => {
          this.props.navigation.navigate('Splash');
          this.setState({ isError: false, name: '', email: '', password: '' })
        }, 3000)
      })
      .catch(error => {
        this.setState({ isError: true });
        this.setState({ error });
        setTimeout(() => {
          this.setState({ isError: false, email: '', password: '', error: '' });
        }, 3000);
      })
  }


  render() {


    const { navigation } = this.props;



    return (
      <ImageBackground style={{ flex: 1, }} source={require('./assets/back.png')}>
        <Text style={{ fontSize: 50, color: 'pink', textAlign: 'center', paddingTop: 20 }}>SocialApp</Text>
        <View style={styles.container}>

          {this.state.isError ? <Text style={{ fontSize: 18, color: "red", backgroundColor: "white", borderColor: "black", textTransform: 'capitalize' }}>
            {this.state.error.message}
          </Text> : <Text></Text>}

          <TextInput
            style={styles.input}
            placeholder='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholderTextColor='#696969'

          />

          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholderTextColor='#696969'

          />
          <Text> </Text>
          <Text onPress={() => navigation.navigate("ForgotPassword")}> Forgot Password? </Text>
          <Text> </Text>

          <Button
            title="Sign In"
            // color="blue"
            type="submit"
            onPress={() => this.handleLogin()}
          />
          <Text> </Text>



          <Text style={{ color: 'white' }}> Don't Have An Account? </Text>
          <Text> </Text>
          <Button
            title="Sign Up"
            // color="pink"
            onPress={() => navigation.navigate("Register")}
          />



        </View>
      </ImageBackground>


    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderColor: 'black',
    padding: 100,
    borderRadius: 10,

  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    margin: 10,
    padding: 12,
    color: 'black',
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  images: {
    width: 200,
    height: 200,
  },

})



export default Login;