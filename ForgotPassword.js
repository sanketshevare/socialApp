import React, { Component, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, } from "react-native";
import Firebase from 'firebase'
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      error: '',
      isError: false,
    })
  }

  forgotPassword = () => {
  	const { email} = this.state;


    Firebase.auth()
    .sendPasswordResetEmail(email)
         .then(function (user) {
         	 this.setState({ isError: true })
       this.setState({ error });

       
      })
         .catch(error => {
         this.setState({ isError: true });
        this.setState({ error });
        setTimeout(() => {
          this.setState({ isError: false, email: '', name: '', password: '' })
        }, 2500)
      })
  }

 render() {
    return (
    	 <ImageBackground style={{ flex: 1 }} source={require('./assets/back.png')} >
    	 <View style={styles.container}>
    	  {this.state.isError ? <Text style={{ fontSize: 18, color: "red", backgroundColor: "white", borderColor: "black", borderWidth: .5, textTransform: 'capitalize' }}>
            {this.state.error.message}
          </Text> : <Text></Text>}
    	  <TextInput
            style={styles.input}
            value={this.state.name}
            placeholder='Enter Your Registered Email'
            onChangeText={email => this.setState({ email })}
            placeholderTextColor='#696969'

          />

          <Text> </Text>
           <Button
            style={{}}
            title='Send Email'
            // color='pink'
            type='submit'
            onPress={(e) =>this.forgotPassword(e) }
          />
          </View>

           </ ImageBackground >


    	);
    }
}
const styles = StyleSheet.create({

  input: {
    width: 300,
    height: 50,
    backgroundColor: 'white',
    margin: 10,
    padding: 16,
    color: 'black',
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default ForgotPassword;