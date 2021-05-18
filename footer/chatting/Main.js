import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class Main extends Component {
  state = {
    name: '',
  };

  onChangeText = (name) => this.setState({ name });

  onPress = () =>  this.props.navigation.navigate("Chat", {name: this.state.name});
  

  render() {
    return (
      <View>
        <Text style={styles.title}> Enter your Name: </Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeText}
          value={(this.state.name)}
        />

        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}> Done </Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const offSet = 24;

const styles = StyleSheet.create({
    title: {
        marginTop: offSet,
        marginLeft: offSet,
        fontSize: offSet
    },
    nameInput: {
        height: offSet * 2,
        margin: offSet,
        paddingHorizontal: offSet,
        borderColor: "black",
        borderWidth: 1,
    },
    buttonText: {
        marginLeft: offSet,
        fontSize: offSet,
    }
});