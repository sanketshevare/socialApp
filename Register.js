import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, } from "react-native";

class Register extends Component {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //   props.navigation.navigate("Login");
    // }, 3000);
  }

  render() {
    return (
   <ImageBackground style={{flex: 1,}} source={require('./assets/sample.png')}>
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Your name'
          
          placeholderTextColor='#696969'
         
        />
        <TextInput
          style={styles.input}
          placeholder='Username'
          placeholderTextColor='#696969'
       
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          
         
          placeholderTextColor='#696969'
          
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
         secureTextEntry={true}
          placeholderTextColor='#696969'
          
        />
        <Text> </Text>
        <Button

          title='Sign Up'
          color="blue"
          onPress={(this.signUp)}
        />
      </View>
      </ImageBackground>

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
export default Register;