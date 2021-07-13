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
import Fire from 'firebase'
import Ionicons from "react-native-vector-icons/Ionicons";



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

    Fire.auth()
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
      <ImageBackground style={{ flex: 1, }} source={{uri: "https://wallpaperaccess.com/download/dark-iphone-1194580"}}>
        <Text style={{  top: 150,fontSize: 50, color: '#EFFD5F', textAlign: 'center', }}>k i l o G r a m</Text> 
        

        <View style={styles.container}>

          {this.state.isError ? <Text style={{ fontSize: 18, color: "red", backgroundColor: "white", borderColor: "black", textTransform: 'capitalize' }}>
            {this.state.error.message}
          </Text> : <Text></Text>}
        
          <TextInput
         
            style={styles.input}
            placeholder='example@gmail.com'
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
          <Text style={{color: "white"}} onPress={() => navigation.navigate("ForgotPassword")}> Forgot Password? </Text>
          <Text> </Text>

          <Button
            title="Sign In"
             color="#E4CD05"
            type="submit"
            onPress={() => this.handleLogin()}
          />
          <Text> </Text>



          <Text style={{ color: 'white' }}> Don't Have An Account? </Text>
          <Text> </Text>
          <Button
            title="Sign Up"
            color="#F9A602"
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
    alignItems: 'center',
    top:100
  },
  images: {
    width: 200,
    height: 200,
  },


})



export default Login;