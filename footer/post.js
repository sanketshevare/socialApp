import { Icon } from "native-base";
import React, { Component } from "react";
import {
    View,
    Button,
    TextInput,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    ImageBackground,
    Platform,
    screenWidth,
    TouchableOpacity,
    
    

} from "react-native";
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import uploadImage from "./upload";
import  firebase from "firebase";
import firestore from "firebase/firestore";
import Firebase from "../config/firebase";
import uuid from "uuid";



class post extends Component {


    


    openLibrary = async () => {
        try {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if(status === "granted"){
                const image = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing:true
                })
                if(!image.cancelled){
                     const url = await this.props.uploadImage()
                    //  uploadImage = async uri => {
                      
                    //       const response = await fetch(uri);
                    //       const blob = await response.blob();
                    //       const ref = firebase.storage().ref("images").child(uuid.v4());
                    //       const task = ref.put(blob);
                    //       return new Promise((resolve, reject) => {
                    //         task.on("state_changed", () => { }, reject,
                    //           () => resolve(task.snapshot.downloadURL));
                    //       });
                   
                }}
        } catch (error) {
            alert(error);
        } 
       
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={(Platform.OS == 'ios') ? { width:screenWidth, height:55, borderBottomColor:"grey", borderBottomWidth:1}: {width:screenWidth, height:59, borderBottomColor: "grey", borderBottomWidth: 1, marginTop:0, justifyContent: "space-between", alignItems: "center", flexDirection: "row", backgroundColor: "powderblue"}}>

                    <Text  style={{margin: 10, fontSize: 16, fontWeight: "normal"}}>Create a new post</Text>
                    <TouchableOpacity>
                        <Text  style={{margin: 10, fontSize: 16, fontWeight: "normal", color: "blue"}}> <Icon name='add'/></Text>
                    </TouchableOpacity>

                    </View>
                    <View style={{width: screenWidth, height: 360,}}>
                        <Image source={require("../assets/image.png")} style={{width: screenWidth, height: 360,}} />
                </View>

                <View style={{flexDirection: 'row', width:screenWidth, justifyContent:"center", alignItems:"center",}}>
                    <TouchableOpacity style={{width: 95, height: 90, backgroundColor: 'rgba(0,0,0,0.1)', justifyContent: "center", alignItems: "center", borderRadius: 5}}
                    onPress={() => this.openLibrary()} >
                        <View style={{width: 40, height: 40, borderRadius: 20, backgroundColor:"rgba(0,0,0,0.1)", justifyContent: "center", alignItems: "center"}}>
                            <Text style={{color: "white", fontSize: 30}}>+</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        );

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ uploadPhoto}, dispatch)
// }


export default (post);