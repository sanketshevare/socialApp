import React, {useState , Component, useEffect } from 'react'
import {  TouchableOpacity, TextInput, ImageBackground, ActivityIndicator, LogBox, FlatList} from 'react-native'
import AntIcon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from "expo-permissions";
//import Entypo from "react-native-vector-icons/Entypo";
import { Entypo } from '@expo/vector-icons';

// import database from "firebase/database";
import * as firebase from "firebase";
import {   database, storage } from 'firebase';
import {Button, Container, Footer, Icon, Content, FooterTab, Header, View, Text, LogBOx} from "native-base";
import color from 'color';



export default function post() {


    const[listData, setListData] = useState([]);
    

    useEffect(() => {
      database().ref("/Profile/").once("value", result=> {
          console.log(result.val());
          var tempData = [];
         Object.keys(result.val()).sort((a, b) => { return (a-b) }).forEach(keys => {
             tempData = [
                
              result.val()[keys],
                
             ]
  
         })
         setListData(tempData)
      })
  }, [])


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
            <FlatList
            
            data={listData}
        renderItem={({item}) => 
            <Container style={{ flex: 1, }}>
            <View style={{backgroundColor: "black", flex: 1}}>
                {isLoading?<ActivityIndicator size="large" color="#f66" style={{position: "absolute", top: "45%", left: "45%"}} />: null}
                <View style={{}}>
  <Header style={{justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
<Text style={{justifyContent: "center", alignItems: "center", fontSize: 16, fontWeight: "bold", color: "white"}}>CREATE NEW POST</Text>
  </Header>
</View>

   { image ==""?<TouchableOpacity 
            onPress={pickFromGallery}
            style={{backgroundColor: "#1B1212", justifyContent: "center", alignItems: "center", height: 200}}>
                <AntIcon name="pluscircleo" color="white" size={80}/>
                <Text style={{fontSize: 20, marginTop: 5, color: "white"}}>Add Image</Text>
            </TouchableOpacity>: <ImageBackground source={{uri: image}} style={{height: 200,  alignItems: "flex-end"}}> 
               <TouchableOpacity style={{padding: 10}}
               onPress={() => setImage("")}
               >
               <Entypo name="circle-with-cross" color= "white" size={30}/>
               </TouchableOpacity>
                </ImageBackground>  }

            <TextInput placeholderTextColor={'white'} 
            placeholderTextSize={30}
            style={{textAlignVertical: "top", color: "white", fontSize: 18}}
            placeholder={"Add Feed Caption Here.."}
            //placeholderStyle={{color:"white"}}
            numberOfLines={5}
            value={textValue}
            onChangeText={(res) => {
                setValue(res);
            }}
            /> 
 
  
            <TouchableOpacity style={{backgroundColor: "#EFFD5F", margin: 10, borderRadius: 10, top: 230}} 
            onPress={ async () =>{
                setLoading(true);
                const dateTime = new Date();
                const uploadObj = {
                    name: firebase.auth().currentUser.displayName,
                    profileImage:  firebase.auth().currentUser.photoURL, //"https:/firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Profile%2F"+item.createdOn+".jpg?alt=media&token=87cda9e7-d178-4f60-ae25-23082beaaed6",
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
                <Text style={{color: "#000", margin: 15, textAlign: "center", fontSize: 20}}>Post</Text>
            </TouchableOpacity>
            </View>
           </Container>
             }
             keyExtractor={(item) => (item)}
             />
        );
   
}




