import firebase from 'firebase';
import React, { Component } from 'react'
import { GiftedChat, Bubble} from 'react-native-gifted-chat';
import Fire from '../../config/firebase';
import uuid from 'react-native-uuid';
import { DatePicker, Left } from 'native-base';
import { getCurrentTime } from 'react-native-easy-chat-ui/app/chat/utils';
import {Button, Container, Footer, Icon, Content, FooterTab, Header, View, Text, LogBOx} from "native-base";
import { ImageBackground } from 'react-native';
import * as Random from 'expo-random';


  

const time = new Date().getTime()
const user = firebase.auth().currentUser;


if (user != null) {
  // name = user.displayName;
  // email = user.email;
  // uid = user.uid;  
  var t = user.uid;
  var e = user.email;
  var pid =  user.providerId;
  var ur = user.photoURL;
  console.log( user.displayName);
  console.log( user.photoURL);


}


export default class Chat extends Component {
  



  state = {
    messages: [
      //example message with multiple properties
      {
        _id: 0, // message id
        // text: 'Hello developer',
         createdAt: time, // date sent
       

        // sender info
        user: {
          _id: 0, // user id
         
         
          avatar: firebase.auth().currentUser.photoURL, 
         // profile picture
        },
      }
    ,],
  };
  

  get user() {

    return {
  
      
      avatar: firebase.auth().currentUser.photoURL, 
       //name: firebase.auth().currentUser.email,
      _id: firebase.auth().currentUser.uid,   
        // name: e
    };
  }

  componentDidMount() {
    // loading messages from the backend
    Fire.shared.on(message =>
      this.setState(previousState => ({     
        messages: GiftedChat.append(previousState.messages,message),
      }))
    );
  }

  render() { 
   
    

    return (
      <Container 
      style={{ flex: 1, }}>
        <View style={{}}>
  <Header style={{justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
<Text style={{justifyContent: "center", alignItems: "center", fontSize: 16, fontWeight: "bold", color: "white"}}>GROUP CHAT</Text>
  </Header>
</View>
        
         <View 
 style={{ flex: 1 }}>
   <ImageBackground source={require("../../assets/s.png")} style={{height:"100%", width: "100%"}}>


      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        
        user={this.user}
        createdAt={time}
     
          
      />
       </ImageBackground>
      </View>
      </Container>
   
    );
  }

  componentWillUnmount() {
    Fire.shared.off();
  }
}