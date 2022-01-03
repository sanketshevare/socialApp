import { database } from 'firebase';
import { Button } from 'native-base';
import React, {useEffect, useState} from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, RefreshControl,LogBox} from "react-native";
import { SceneView } from 'react-navigation';
import { Header, Container } from "native-base";
import Ionicans from "react-native-vector-icons/Ionicons";


export default function home() {

    const [isLoading, setLoading] = useState(false);
    const[listData, setListData] = useState([]);
    

    useEffect(() => {
        database().ref("/Feeds/").once("value", res=> {
            console.log(res.val());
            var tempData = [];
           Object.keys(res.val()).sort((a, b) => { return (b - a) }).forEach(keys => {
               tempData = [
                   ...tempData,
                   res.val()[keys],
                  
               ]

           })
           setListData(tempData)
        })
    }, [])

    return (
        <View style={{flex: 1, backgroundColor: "#738276"}}>
      
     <FlatList 

                      refreshControl = {
               <RefreshControl refreshing={isLoading} onRefresh={() => {
                   setLoading(true);
                   console.log("r");
                   setLoading(false)
               }} />
           }
           

     

           data={listData}
           renderItem={({item}) => <View style={{margin: 0, marginLeft:0, marginRight: 0, borderRadius: 0, elevation: 10, backgroundColor: "#100c08"}}>
                    <View style={{height: 2, width: "100%", backgroundColor: "#333", }} />

               <View style={{flexDirection: "row", alignItems: "center", padding: 10}}>

               <Image source={{uri:item.profileImage}} style={{height: 50, width: 50, borderRadius: 50}} />
              <View style={{marginLeft: 10, }}>
              <Text style={{fontSize: 18, color: "#FFFF00"}}>{item.name}</Text>
              <View style={{flexDirection: "row"}}>
              <Text style={{fontSize: 12, color: "#FFF"}}>{new Date(item.createdOn).toString().substring(0, 16)}</Text>
              <Text style={{fontSize: 12, marginLeft: 5, color: "#FFF"}}>{new Date(item.createdOn).getHours() + ":" + new Date(item.createdOn).getMinutes()}</Text>

              </View>
             
              </View>
               </View>

                 {
                        item.isImage? null //<Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Feeds%2F"+item.createdOn +".png?alt=media&token=3046fde8-43a1-4083-806e-33cf801912ce"}} style={{height:200}} />
                            : <Image resizeMode={"cover"} source={{uri: "https://firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Feeds%2F" +item.createdOn +".png?alt=media&token=3046fde8-43a1-4083-806e-33cf801912ce"}} style={{height:300}} />
                    }

               
               
               <Text style={{margin: 10, color: "#FFF", fontSize: 12, marginTop: 5}}>{item.text}</Text>
               <View style={{height: 1, width: "100%", backgroundColor: "#333", }} />

               <View style={{ flexDirection: "row",}}>
                   <TouchableOpacity style={{flex: 1, margin: 12, }}>
                   <Ionicans style={{marginLeft: 60}}
                  name="heart-outline" color="white" size={30}
                  />

                   </TouchableOpacity>

                   <View style={{backgroundColor: "#333", height: "100%", width: 1}} />

                   <TouchableOpacity style={{flex: 1, margin: 12, }}>
                   <Ionicans style={{marginLeft: 60}}
                  name="chatbox-outline" color="white" size={30}
                  />
                   </TouchableOpacity>
               </View>


           </View>
           }
           keyExtractor={(item) => (item)}
           />
        </View>
    )
}
