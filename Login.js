import React, { Component } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,

} from "react-native";
//import setup from "./setup";
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAwpkGgwp2Bs0ePL846wuBNzNfxVJApcaw",
    authDomain: "project-bd9ef.firebaseapp.com",
    projectId: "project-bd9ef",
    storageBucket: "project-bd9ef.appspot.com",
    messagingSenderId: "822511742003",
    appId: "1:822511742003:web:28aab2ad50afcc6b584746"
    };

    firebase.initializeApp(firebaseConfig);





class Login extends Component {
constructor(props){
  super(props)

  this.state = ({
  email: '',
  password: '',
  })
}

signUpUser = (email, password) => {
try{
if(this.state.password.length<6)
{
  alert("Please enter atleast 6 characters")
}
firebase.auth().createUserWithEmailAndPassword(email, password)
}
catch(error){
console.log(error.toString())

}
  
}

loginUser = (email, password) => {

  
}


  render() {

 
    const { navigation } = this.props;



    return (
     <ImageBackground style={{flex: 1,}} source={require('./assets/sample.png')}>
     
            <View  style={styles.container}>
            

            
                <TextInput
                    style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#696969"
                 onChangeText={(email) => this.setState({email})}
                />

                <TextInput
                   style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#696969"
                  secureTextEntry={true}
                  onChangeText={(password) => this.setState({password})}
                />
               <Text> </Text>

                <Button  
                style={{}}
                title="Sign In"
                color="blue"
                //onPress={() => navigation.navigate("Splash")}
                onPress={() => this.signUpUser(this.state.email, this.state.password)}
                />
                <Text> </Text>

                <Text style={{color: 'white'}}> Do Not Have An Account? </Text>
                    <Text> </Text>
              <Button  
              style={{}}
                title="Sign Up"
                color="blue"
                //onPress={() => navigation.navigate("Register")}
                onPress={() => this.loginUser(this.state.email, this.state.password)}
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