import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import settings from "./footer/settings/settings";
import Main from "./footer/chatting/Main";
import Chat from "./footer/chatting/Chat";
import post from "./footer/feed/post";
import profile from "./footer/profile/profile";
import rootNavigation from "./footer/chatting/navigation/rootNavigation";



const AppNavigator = createStackNavigator({
  // Splash: {
  //   screen: Splash,
   
  // },
    // settings : {
    //   screen: settings
    // },
    // Main :{
    //   screen: Main
    // },
    // Chat: {
    //   screen: Chat
    // },
  //  post: {
  //    screen: post
  //  },
  // rootNavigation: {
  //   screen: rootNavigation
  // }
  // profile :{
  //   screen: profile
  // },
  Login: {
    screen: Login,
    
  },
   Register: {
    screen: Register,
  },
  Splash: {
    screen: Splash,
   
  },

  ForgotPassword: {
    screen: ForgotPassword,
  },
});

export default createAppContainer(AppNavigator);
