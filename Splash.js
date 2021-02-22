import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, } from "react-native";

class Splash extends Component {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //props.navigation.navigate("Login");
    // }, 0);
  }

  render() {

    return (
      <View>
        <Text> Hello </Text>
      </View>
    );

  }
}

export default Splash;