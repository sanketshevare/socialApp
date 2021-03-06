
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


class setup extends Component {
    constructor(props) {
        super(props);

        // setTimeout(() => {
        //props.navigation.navigate("Login");
        // }, 0);
    }

    render() {


        const { navigation } = this.props;



        return (
            <ImageBackground style={{ flex: 1, }} source={require('./assets/back.png')}>
                <Text style={{ fontSize: 50, color: 'pink', textAlign: 'center', paddingTop: 300 }}>SocialApp</Text>
                <View>

                </View>
            </ImageBackground>
        );
    }
}


export default setup;