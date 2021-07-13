import { View } from "native-base";
import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,

} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as firebase from "firebase";
import { database, storage } from "firebase";
import { Header, Container } from "native-base";




export default function profile() {

  // var user1 = firebase.auth().currentUser;
  // console.log(user1);

  // if (user != null) {
  //   // name = user.displayName;
  //   // email = user.email;
  //   // uid = user.uid;  
  //   var t = user.uid;
  //   console.log(t);
  // }


  




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
  const [textValue1, setValue1] = useState("");
  const [avtar, setAvtar] = useState();
  var dateTime = new Date().getTime("");
   const [url, setUrl]=useState("");  
   const [path, setPath] = useState("");

   const [name, setName] = useState("");
   const [address, setAdd] = useState("");
   const [bio, setBio] = useState("");


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

var uploadPhoto = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("Profile/" + imageName);

    const snap = ref.put(blob).then((data) => {
      data.ref.getDownloadURL().then( (url) => {
       // console.log(data);
    
        setUrl(url);
 
          
    firebase.database()
    .ref("Profile/" + dateTime + "/")
    .on('value', snapshot => {
        const name = snapshot.val().name;
        setName(name);
        const address = snapshot.val().path;
        setAdd(address);
        const bio = snapshot.val().bio;
        setBio(bio);
    });

      })
    })
  // const path = firebase.storage().ref().child("https://firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Profile%2F"+dateTime+".jpg?alt=media&token=87cda9e7-d178-4f60-ae25-23082beaaed6").fullPath;
  // setPath(path);
  };
  // console.log(url);
  // console.log(path);



  return ( 
    
    <FlatList
    data={listData}
renderItem={({item}) => 


<View style={{backgroundColor: "#080808"}}>
<View style={{}}>
  
</View>

        <View style={{ alignItems: "center", padding: 20,  }}>
    
     
     <Image
          style={{  
            height: 150,
            width: 150,
            borderRadius: 150,
            padding: 20,
            borderColor: "black",
            borderWidth: 1,
            
          
          }}
         
       key={url}  source={{uri:firebase.auth().currentUser.photoURL }} resizeMode={"cover"}  />
    

        <TouchableOpacity onPress={pickFromGallery}>
          <Entypo style={{color: "grey"}}  name="camera" size={30} />
        </TouchableOpacity>
      <View style={{padding: 20}}>
      <Text style={{fontSize: 18, fontWeight: "500", color: "white"}}>{firebase.auth().currentUser.displayName}</Text>
        <Text style={{fontSize: 16,  }}>{item.bio}</Text>
      </View>
      </View>
      <View style={{height: 1, width: "100%", backgroundColor: "#333", }} />
      <View style={{marginTop: 50}}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
       

        <Text style={{fontSize: 14, marginBottom: 5, color: "white", bottom: 20}}>EDIT YOUR INFO</Text>
        </View>
        <TextInput
          style={{ textAlignVertical: "top", color: "white"}}
          placeholderTextColor={'grey'} 
            placeholderTextSize={30}
          placeholder={"Enter Your Name Here"}
          numberOfLines={5}
          value={textValue}
          editable={true}
          onChangeText={(result) => {
            setValue(result);
            

          }}
        />

        <TextInput
          style={{ textAlignVertical: "top", color: "white", }}
          placeholderTextColor={'grey'} 
            placeholderTextSize={30}
          placeholder={"Add Your Bio Here"}
          numberOfLines={5}
          value={textValue1}
          onChangeText={(result) => {
            setValue1(result);
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
        
          onPress={async () => {
             
            const uploadData = {
              name: firebase.auth().currentUser.displayName,
              path: "https:/firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Profile%2F"+dateTime+".jpg?alt=media&token=87cda9e7-d178-4f60-ae25-23082beaaed6",
              bio: textValue1,
              createdOn: dateTime
              
            };
            //await database().ref("Profile/" + dateTime + "/").set(uploadData);
          
  
            uploadPhoto(avtar, dateTime + ".jpg");
            if(uploadPhoto.state !== "success"){
              await  database().ref("Profile/" + dateTime + "/").set(uploadData);
            
            }
          
            
              await firebase.auth().currentUser.updateProfile({
                    displayName: textValue,
                    photoURL: "https:/firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Profile%2F"+dateTime+".jpg?alt=media&token=87cda9e7-d178-4f60-ae25-23082beaaed6"
                  });
              await firebase.auth().currentUser.reload();
              //console.log(firebase.auth().currentUser.displayName); 
            }
            // var url = firebase.storage().refFromURL("gs://project-bd9ef.appspot.com/Profile").getDownloadURL();
            //  firebase.storage().ref().child("Profile/").getDownloadURL().then((url) => console.log(url))
          }
        
          style={{
            padding: 10,
            backgroundColor: "#FFFF33",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            width: "25%",
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
        <View style={{marginBottom: 70, backgroundColor: "#080808"}}>
  </View>
      </View>
            
    </View>

 }
 keyExtractor={(item) => (item)}
 />

  );
  
}
