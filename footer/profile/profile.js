import { View } from "native-base";
import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ImageBackgroundBase
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Container from "native-base";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as firebase from "firebase";
import { database, storage } from "firebase";




export default function profile() {

  const [textValue, setValue] = useState("");
  const [textValue1, setValue1] = useState("");
  const [avtar, setAvtar] = useState();
  var dateTime = new Date().getTime("");
   const [url, setUrl]=useState("");  



  const pickFromGallery = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
   
    if (status === "granted") {
      var photo = await ImagePicker.launchImageLibraryAsync({
        //mediaTypes: 'Images',
        //allowsEditing: true
        // resizeMode:'cover',
        
      }).catch((error) => console.log(Permissions.CAMERA_ROLL, { error }));
      // console.log(Permissions.CAMERA_ROLL, 'SUCCESS', image);
    }

    if (!status.cancelled) {
      setAvtar(photo.uri);
   
       
     // console.log(photo.uri);
    }
  };
  

  const [isLoading, setLoading] = useState(false);

 uploadPhoto = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("Profile/" + imageName);

    const snap = ref.put(blob);
   
    
    // .storage()
    // .ref()
    // .child(`https://firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Profile%2F${dateTime}.jpg?alt=media&token=079c3fca-b469-4efe-b68f-2a4fa7937bd0`).fullPath
    const url = firebase.storage().ref().child(dateTime + ".jpg").fullPath;
   setUrl(url)
  };
//var k = `https://firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Profile%2F${url}?alt=media&token=59c459c3-c083-49b1-811f-dc2035d87576`
  console.log(url);

  return ( 

     <View>
        <View style={{ alignItems: "center", padding: 20 }}>
          <Image
          style={{
            height: 150,
            width: 150,
            borderRadius: 150,
            padding: 20,
            borderWidth: 1,
            borderColor: "black",
          }}
          source={{ uri:avtar}}//url ? `https://firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Profile%2F${url}?alt=media&token=59c459c3-c083-49b1-811f-dc2035d87576` : "https://firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Profile%2F1621777312893.jpg?alt=media&token=58364dca-e582-456d-8304-c3cc703f6ff7"}}
        />

        <TouchableOpacity onPress={pickFromGallery}>
          <Entypo name="camera" size={30} />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={{ textAlignVertical: "top" }}
          placeholder={"Name"}
          numberOfLines={5}
          value={textValue}
          editable={true}
          onChangeText={(rest) => {
            setValue(rest);
          }}
        />

        <TextInput
          style={{ textAlignVertical: "top" }}
          placeholder={"Add Your Bio Here"}
          numberOfLines={5}
          value={textValue1}
          onChangeText={() => {
            setValue1();
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
        
          onPress={async () => {
            const uploadData = {
              name: "Sanket",
              createdAt: url,
            };
           // await database().ref("Profile/" + dateTime + "/").set(uploadData);
            uploadPhoto(avtar, dateTime + ".jpg");
        

            // var url = firebase.storage().refFromURL("gs://project-bd9ef.appspot.com/Profile").getDownloadURL();
            //  firebase.storage().ref().child("Profile/").getDownloadURL().then((url) => console.log(url))
          }}
          style={{
            padding: 10,
            backgroundColor: "#f66",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            width: "25%",
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}
