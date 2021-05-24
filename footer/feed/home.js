import { database } from 'firebase';
import { Button } from 'native-base';
import React, {useEffect, useState} from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, RefreshControl,LogBox} from "react-native";
import { SceneView } from 'react-navigation';
LogBox.ignoreAllLogs("Setting a timer for ");
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
        <View style={{flex: 1, backgroundColor: "white"}}>
           <FlatList 
                      refreshControl = {
               <RefreshControl refreshing={isLoading} onRefresh={() => {
                   setLoading(true);
                   console.log("r");
                   setLoading(false)
               }} />
           }
           



           data={listData}
           renderItem={({item}) => <View style={{margin: 10, marginLeft:1, marginRight: 1, borderRadius: 7, elevation: 10, backgroundColor: "white"}}>

               <View style={{flexDirection: "row", alignItems: "center", padding: 10}}>

               <Image source={{uri:"https://placeimg.com/140/140/any"}} style={{height: 50, width: 50, borderRadius: 50}} />
              <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 18}}>{item.name}</Text>
              <View style={{flexDirection: "row"}}>
              <Text style={{fontSize: 12}}>{new Date(item.createdOn).toString().substring(0, 16)}</Text>
              <Text style={{fontSize: 12, marginLeft: 5}}>{new Date(item.createdOn).getHours() + ":" + new Date(item.createdOn).getMinutes()}</Text>

              </View>
             
              </View>
               </View>

                 {
                        item.isImage? null //<Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Feeds%2F"+item.createdOn +".png?alt=media&token=3046fde8-43a1-4083-806e-33cf801912ce"}} style={{height:200}} />
                            : <Image resizeMode={"cover"} source={{uri: "https://firebasestorage.googleapis.com/v0/b/project-bd9ef.appspot.com/o/Feeds%2F" +item.createdOn +".png?alt=media&token=3046fde8-43a1-4083-806e-33cf801912ce"}} style={{height:300}} />
                    }

               
               
               <Text style={{margin: 10, color: "#333", fontSize: 12, marginTop: 5}}>{item.text}</Text>
               <View style={{height: 1, width: "100%", backgroundColor: "#333", }} />

               <View style={{ flexDirection: "row",}}>
                   <TouchableOpacity style={{flex: 1, margin: 12}}>
                       <Text style={{textAlign: "center", fontWeight: "bold"}}>Like</Text>
                   </TouchableOpacity>

                   <View style={{backgroundColor: "#3333", height: "100%", width: 1}} />

                   <TouchableOpacity style={{flex: 1, margin: 12}}>
                       <Text  style={{textAlign: "center",  fontWeight: "bold"}}>Comment</Text>
                   </TouchableOpacity>
               </View>


           </View>
           }
           keyExtractor={(item) => (item)}
           />
        </View>
    )
}
