import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, ImageBackground} from "react-native";
import {Button, Container, Footer, Icon, Content, FooterTab, Header} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Firebase from 'firebase'
import home from "./footer/home";
import Chat from "./footer/Chat";
import camera from "./footer/camera";
import settings from "./footer/settings";
import profile from "./footer/profile";





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
       AppComponent = camera
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
           <FooterTab style={{backgroundColor: "mediumslateblue"}}>
       <Button onPress={()=>this.switchScreen(0)}>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button  onPress={()=>this.switchScreen(1)}>
            <Icon name='camera' />
            <Text>Camera</Text>
          </Button>
          <Button onPress={()=>this.switchScreen(2)}>
            <Icon name='paper-plane' />
            <Text>Chat</Text>
          </Button>
          <Button onPress={()=>this.switchScreen(3)}>
            <Icon name='settings' />
            <Text>Settings</Text>
          </Button>
          <Button onPress={()=>this.switchScreen(4)}>
            <Icon name='person' />
            <Text>Profile</Text>
          </Button>
          </FooterTab>
         </Footer>
     
       </Container>
     
    );

  }
}

export default Splash;