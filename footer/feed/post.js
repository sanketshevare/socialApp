import React, {useState , Component, useEffect } from 'react'
import {  TouchableOpacity, TextInput, ImageBackground, ActivityIndicator, LogBox} from 'react-native'
import AntIcon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
//import Entypo from "react-native-vector-icons/Entypo";
import { Entypo } from '@expo/vector-icons';

// import database from "firebase/database";
import * as firebase from "firebase";
import {   database, storage } from 'firebase';
import {Button, Container, Footer, Icon, Content, FooterTab, Header, View, Text, LogBOx} from "native-base";



LogBox.ignoreAllLogs("Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.")
export default function post() {

    const [textValue, setValue] = useState("");
    const [image, setImage] = useState("");
   
    const pickFromGallery = async () => {
        
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        
      
        if(status === 'granted') {
           
            var img = await ImagePicker.launchImageLibraryAsync( {
              
            //mediaTypes: 'Images',
            //allowsEditing: true
           // resizeMode:'cover',
           
          },   ).catch(error => console.log(Permissions.CAMERA_ROLL, { error }));
         // console.log(Permissions.CAMERA_ROLL, 'SUCCESS', image);
        
         

        
        }
       
        if (!status.cancelled) {
            setImage(img.uri);
            console.log(img.uri);
           
          }
      }
   
    const [isLoading, setLoading] = useState(false);
    const uploadPhoto = async (uri, imageName) => {
       
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child("Feeds/" + imageName);
        return ref.put(blob);
    }

   
        return (
            <Container style={{ flex: 1, }}>
            <View style={{backgroundColor: "white", flex: 1}}>
                {isLoading?<ActivityIndicator size="large" color="#f66" style={{position: "absolute", top: "45%", left: "45%"}} />: null}

   { image ==""?<TouchableOpacity 
            onPress={pickFromGallery}
            style={{backgroundColor: "#aaaa", justifyContent: "center", alignItems: "center", height: 200}}>
                <AntIcon name="pluscircleo" color="white" size={80}/>
                <Text style={{fontSize: 20, marginTop: 5, color: "white"}}>Add Image</Text>
            </TouchableOpacity>: <ImageBackground source={{uri: image}} style={{height: 200,  alignItems: "flex-end"}}> 
               <TouchableOpacity style={{padding: 10}}
               onPress={() => setImage("")}
               >
               <Entypo name="circle-with-cross" color= "white" size={30}/>
               </TouchableOpacity>
                </ImageBackground>  }

            <TextInput 
            style={{textAlignVertical: "top"}}
            placeholder={"Add Feed Caption Here.."}
            numberOfLines={5}
            value={textValue}
            onChangeText={(res) => {
                setValue(res);
            }}
            /> 
 
  
            <TouchableOpacity style={{backgroundColor: "#f66", margin: 10, borderRadius: 10, top: 300}} 
            onPress={ async () =>{
                setLoading(true);
                const dateTime = new Date();
                const uploadObj = {
                    name: "Test",
                    profileImage: "https://i.picsum.photos/id/625/200/200.jpg?hmac=oIwf4IzbglfXYZo-9VXZTHju2-ox3D-Vooeuioav_nw",
                    text: textValue,
                    Isimage: image==""?false:true,
                    createdOn: dateTime.getTime()
                }
               

                if(image == ""){
                    await database().ref("Feeds/" + dateTime.getTime() + "/").set(uploadObj)


                }else {
                    
                 // const uploadImage = await storage().ref("Feed/" + dateTime.getTime()+ ".png").putString(image)
                 setLoading(true);

                 uploadPhoto(image, dateTime.getTime() + ".png"); 

                  console.log(image)

                  if(uploadPhoto.state !== "success"){
                    await database().ref("Feeds/" + dateTime.getTime() + "/").set(uploadObj)
                  }

                }
                setLoading(false);
                
                
                
            }}>
                <Text style={{color: "white", margin: 15, textAlign: "center", fontSize: 20}}>Post</Text>
            </TouchableOpacity>
            </View>
           </Container>
            
        );
   
}




