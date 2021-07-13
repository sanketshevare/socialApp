import React from "react";
import { Text, View, Button, Image, ScrollView, BackHandler } from "react-native";
import Ionicans from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-elements";
import * as Linking from "expo-linking";
import { CardItem } from "native-base";
import firebase from "firebase";

export default function home() {
  const signOutUser = () => {
      firebase.auth()
    .signOut()
    .then(() => console.log('User signed out!'),

BackHandler.exitApp(),
    );
}

  return (
    <View style={{ backgroundColor: "#0a0a0a"}}>
    <View style={{  marginLeft: 3, marginRight: 3,}}>
      
      <View style={{ flexDirection: "row", padding: 10,  }}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8inHt88SKNSOxE2dYgr97zBzle4-mEDeSpQ&usqp=CAU",
          }}
          style={{ height: 50, width: 50, borderRadius: 10, }}
        />
        <View style={{ marginLeft: 20,  }}>
          <Text style={{ fontSize: 17,  color: "white"  }}>About Us</Text>
          <Text style={{ fontSize: 14 ,  color: "white" }}>Know About Us 😃</Text>
          <View style={{ flexDirection: "row",  }}></View>
        </View>
      </View>
      <View style={{marginTop: 10, }}>
        <Text  style={{fontSize: 13,  color: "white" , }}>We developed this application for our final year project. That's why we started figuring out latest and innovative technologies from which we can implement our application. Along the way, We have developed a robust application in which user can interact with others in this platform. We want to be a good developer/designer in future</Text>
      </View>
      <View style={{height: 2, width: "100%", marginTop: 20, backgroundColor: "#3d3d3d" }} />
      <View style={{ flexDirection: "row", padding: 10 , marginTop: 20, }}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6vMGuco543o3mP3w1EiRKWw4br887EzwZQ&usqp=CAU",
          }}
          style={{ height: 50, width: 50, borderRadius: 10 }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 17, color: "white" }}>Help and Feedback</Text>
         <View style={{flexDirection: "row"}}>
        
          <Text style={{ fontSize: 14 ,  color: "white" }}>Reach out to us 🙂</Text>
         
         </View>
          <View style={{ flexDirection: "row" , }}></View>
        </View>
      </View>
      <View style={{marginTop: 10, flexDirection: "row", }}>
         
      <Ionicans style={{marginLeft: 85, marginTop: 2}} name="mail-outline" color="white" size={14}/>
<Text style={{fontSize: 13, color: "#6ca0dc"}} onPress={() => Linking.openURL("mailto: tyitgroupc@gmail.com")}>    tyitgroupc@gmail.com  </Text>

      </View>
      <View style={{flexDirection: "row",}}>
      <Ionicans style={{marginLeft: 85, marginTop: 2}} name="location-outline" color="white" size={14} />
       <Text style={{fontSize: 13, color: "white"}}>    Government Polytechnic Kolhapur </Text>
       </View>
       <View style={{flexDirection: "row"}}>
       <Ionicans style={{marginLeft: 85, marginTop: 2}} name="desktop-outline" color="white" size={14}/>
      <Text style={{fontSize: 13, color: "white"}}>    Information Technology </Text>
      </View>
      <View style={{height: 2, width: "100%",  marginTop: 20, backgroundColor: "#3d3d3d" }} />
      <View style={{ flexDirection: "row", padding: 10,  marginTop: 20 }}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVVQ30PcJUO5nMKdDMJazN-Cnx7_941FGVg&usqp=CAU",
          }}
          style={{ height: 50, width: 50, borderRadius: 10 }}
        />
        <View style={{ marginLeft: 20 , }}>
          <Text style={{ fontSize: 17,  color: "white"  }}>Privacy and Policy</Text>
          <Text style={{ fontSize: 14, color: "white"   }}>Terms and Conditions 🔒</Text>
          <View style={{ flexDirection: "row" }}>
          <Ionicans style={{marginLeft: 7, top: 12}} name="help-circle-outline" color="white" size={16}/>
          <Text style={{color: "white", top: 10,  color: "#6ca0dc"}} onPress={() => Linking.openURL("google.com")}>  Terms and Policy</Text>
          </View>
        </View>
  
      </View>
     
      <View style={{height: 2, width: "100%",  marginTop: 20, backgroundColor: "#3d3d3d" }} />

      <View style={{ flexDirection: "row", padding: 10,  marginTop: 20 }}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFMHL2l4UxvhAbRJUcCLWE1kcMx8hhg8gZw&usqp=CAU",
          }}
          style={{ height: 50, width: 50, borderRadius: 10 }}
        />
        <View style={{ marginLeft: 20 , }}>
          <Text style={{ fontSize: 17,  color: "white"  }}>Log Out</Text>
          <Text style={{ fontSize: 14, color: "white"   }}>You will be missed ☹️</Text>
          <View style={{ flexDirection: "row" }}></View>
        </View>
      </View>
      <View style={{marginTop: 10, flexDirection: "row", justifyContent: "center",}}>

          
       <Button 

       title="signOut & Exit"
       color= "#F9C802"
       onPress={()=>signOutUser()}
       />
     

      </View>
      <View style={{ backgroundColor: "#030303", margin: 16}}>
      </View>
    </View>
    </View>
    
  );
}
