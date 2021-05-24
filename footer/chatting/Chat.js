import firebase from 'firebase';
import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../../config/firebase';
import uuid from "uuid";
import { DatePicker, Left } from 'native-base';
import { getCurrentTime } from 'react-native-easy-chat-ui/app/chat/utils';
import {Button, Container, Footer, Icon, Content, FooterTab, Header, View, Text, LogBOx} from "native-base";

const time = new Date().getTime()
var user = firebase.auth().currentUser;
export default class Chat extends Component {

  
  state = {
    messages: [
      //example message with multiple properties
      {
        _id: 1, // message id
        text: 'Hello developer',
        createdAt: time, // date sent
       

        // sender info
        user: {
          _id: 2, // user id
          name: 'React Native', // username
          avatar: 'https://placeimg.com/140/140/any', 
         // profile picture
        },
      }
    ,],
  };
  

  get user() {
    return {
     // avatar: 'https://placeimg.com/140/140/any', 
      name: "Test",
      _id: 0,   
        
    };
  }

  componentDidMount() {
    // loading messages from the backend
    Fire.shared.on(message =>
      this.setState(previousState => ({     
        messages: GiftedChat.append(previousState.messages, message,time),
      }))
    );
  }

  render() {
    return (
      <Container 
      style={{ flex: 1, }}>
        
        
         <View 
 style={{ flex: 1, }}>
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
        createdAt={time}
      />
    
      </View>
      </Container>
    );
  }

  componentWillUnmount() {
    Fire.shared.off();
  }
}