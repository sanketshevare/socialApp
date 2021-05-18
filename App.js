import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import settings from "./footer/settings";
import Main from "./footer/chatting/Main";
import Chat from "./footer/chatting/Chat";



const AppNavigator = createStackNavigator({
    //  Splash: {
    //   screen: Splash
    // },
    // Main :{
    //   screen: Main
    // },
    // Chat: {
    //   screen: Chat
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
