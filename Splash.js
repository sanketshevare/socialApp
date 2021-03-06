import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from "react-native";
import Firebase from 'firebase'

class Splash extends Component {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //props.navigation.navigate("Login");
    // }, 0);
  }

  render() {

    return (
      <ImageBackground style={{ flex: 1 }} source={require('./assets/back.png')} >
        <View>
          <Text>Hello</Text>
          {/* <Button
          title="Logout"
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        /> */}
        </View>
      </ImageBackground>
    );

  }
}

export default Splash;