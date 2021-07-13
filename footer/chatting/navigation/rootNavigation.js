import React from 'react'
import { View, Text } from 'react-native'
import * as firebase from "firebase";
import { database, storage } from "firebase";

export default function rootNavigation() {


    var user = firebase.auth().currentUser;
    console.log(user);

    if (user != null) {
      name = user.displayName;
      email = user.email;
      uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                       // this value to authenticate with your backend server, if
 
                       // you have one. Use User.getToken() instead.
    }
    return (
        <View>
            <Text>hi</Text>
        </View>
    )
}

