import firebase from 'firebase';
import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../../config/firebase';
import uuid from "uuid";
import { DatePicker, Left } from 'native-base';
import { getCurrentTime } from 'react-native-easy-chat-ui/app/chat/utils';
import {Button, Container, Footer, Icon, Content, FooterTab, Header, View, Text, LogBOx} from "native-base";


export default class Chat extends Component {

  state = {
    messages: [
      //example message with multiple properties
      {
        _id: 1, // message id
        text: 'Hello developer',
        createdAt: new Date(), // date sent
       

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
     
      //name: this.props.route.params.name,
      _id: Fire.shared.uid,    
        
    };
  }

  componentDidMount() {
    // loading messages from the backend
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  render() {
    return (
      <Container scrollEnabled={true}
      style={{ flex: 1, }}>
        
        
         <View scrollEnabled={false}
 style={{ flex: 1, }}>
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
    
      </View>
      </Container>
    );
  }

  componentWillUnmount() {
    Fire.shared.off();
  }
}