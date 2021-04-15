
import React, { Component, useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    ImageBackground,
    LogBox
    
    


} from "react-native";
import { GiftedChat, Message } from 'react-native-gifted-chat';
import { Button, Container, Footer,Icon, Content, FooterTab, Header} from "native-base";
import ChatRoom from "./ChatRoom";
import firebase from "firebase";
import Firebase from "../config/firebase";



export default function CreateChatRoom({ navigation }) {
    const [roomName, setRoomName] = useState('')
   
    function handleButtonPress() {
      if (roomName.length > 0) {
         firebase.firestore()
        .collection('MESSAGE_THREADS')
        .add({
          name: roomName,
          latestMessage: {
            text: `${roomName} created. Welcome!`,
            createdAt: new Date().getTime()
          }
        })
        .then(() => {
          LogBox.ignoreLogs(['Setting a timer']);
         


       
        })
      }
      else{
        alert("Please Enter Rom Name!");
      }
    }
  
    return (
      <View style={{flex: 10, justifyContent: "center", alignItems: "center"}}>
        <TextInput
            
          style={styles.input}
          placeholder='Thread Name'
          onChangeText={roomName => setRoomName(roomName)}
        />
        <Text></Text>
        <Button  style={{padding:30, alignSelf:"auto", backgroundColor: "cornflowerblue"}} onPress={handleButtonPress}> 
        <Text>Create Chat Room</Text>
        <Icon name="enter"></Icon>
        </Button>
          
     
      </View>
    )
  }


  const styles = StyleSheet.create({

    input: {
      width: 300,
      height: 50,
      backgroundColor: 'gainsboro',
      margin: 1,
      paddingLeft: 8,
      color: 'black',
      borderRadius: 9,
      borderColor: "black",
      fontSize: 16,
      fontWeight: '500',
      marginTop:280
    }


  })