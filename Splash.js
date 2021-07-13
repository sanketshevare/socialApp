import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground, Image} from "react-native";
import {Button, Container, Footer, Icon, Content, FooterTab, Header} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Firebase from 'firebase'
import home from "./footer/feed/home";
import Chat from "./footer/chatting/Chat";
import post from "./footer/feed/post";
import settings from "./footer/settings/settings";
import profile from "./footer/profile/profile";
import * as firebase from "firebase";





class Splash extends Component {
  constructor(props) {
    super(props);
   
    this.state = {index: 0}
  }

   switchScreen(index) {
    this.setState({index: index})
 }


//  async componentWillMount() {
//   await Expo.Font.loadAsync({
//     'Roboto': require('native-base/Fonts/Roboto.ttf'),
//     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//     'MaterialIcons': require('native-base/Fonts/MaterialIcons.ttf'),
//   });
 
//   }


  render() {





    let AppComponent = null;

    if (this.state.index == 0) {
       AppComponent = home
    } 
    else if(this.state.index == 1){
       AppComponent = post
    }
    else if(this.state.index == 2){
      AppComponent = Chat
   }
   else if(this.state.index == 3){
    AppComponent = settings
 }
 else if(this.state.index == 4){
  AppComponent = profile
}
    return (
  <Container>
      
        <Content>
        <AppComponent/>
        
        </Content>
       
         
        
         <Footer>
           <FooterTab style={{backgroundColor: "#000"}}>
       <Button onPress={()=>this.switchScreen(0)}>
            <Icon name='home-outline' style={{color:"#FFFF00"}}/>
            {/* <Text>Home</Text> */}
          </Button>
        
          <Button  onPress={()=>this.switchScreen(2)} >
            <Icon name='paper-plane-outline'  style={{color:"#FFFF00"}}/>
            {/* <Text>Chat</Text> */}
          
          </Button>
          <Button  onPress={()=>this.switchScreen(1)} >
            <Icon name='add-circle-outline'  style={{color:"#FFFF00"}}/>
            {/* <Text>Post</Text> */}
          </Button>
          
          <Button color="yellow" onPress={()=>this.switchScreen(3)}>
            <Icon name='settings-outline'  style={{color:"#FFFF00"}}/>
            {/* <Text>Settings</Text> */}
          </Button>
          <Button onPress={()=>this.switchScreen(4)} >
          <Image
          onPress={()=>this.switchScreen(4)} 
          style={{  
            height: 7,
            width: 7,
            borderRadius: 25,
            padding: 15,
            borderColor: "#353935",
            borderWidth: 1,
            
            
          
          }}
         
      source={{uri:firebase.auth().currentUser.photoURL }} resizeMode={"cover"}  />
    
         </Button>
          </FooterTab>
         </Footer>
     
       </Container>
     
    );

  }
}

export default Splash;