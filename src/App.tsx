import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icons from './components/Icons'
import Button from './components/Button'


export default function App() {
  const [iconName,setIconName] =  useState("")
  const [turn,setTurn] = useState("o")
  

  const [data,setData]  = useState([
    {pos:0,isChecked:false,iconName:""},
    {pos:1,isChecked:false,iconName:""},
    {pos:2,isChecked:false,iconName:""},
    {pos:3,isChecked:false,iconName:""},
    {pos:4,isChecked:false,iconName:""},
    {pos:5,isChecked:false,iconName:""},
    {pos:6,isChecked:false,iconName:""},
    {pos:7,isChecked:false,iconName:""},
    {pos:8,isChecked:false,iconName:""},
  ])

  
  return (
    <View style={[styles.container]}>
        
        <Text style={styles.pd}>{"palyer  " + turn + "'s" + "  turn"}</Text>
        <SafeAreaView style={styles.grid}>
          {
            data.map((item,index) => <Button data={data} setData={setData} index={index} key={index} turn={turn} setTurn={setTurn} iconName={iconName} setIconName={setIconName}/>)
          }
        </SafeAreaView>

        <TouchableOpacity style={styles.reload}>
             <Text style={styles.reloadText} >{"↻"}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    // backgroundColor:"black"

  },
  pd:{
    borderWidth:1,
    borderColor:"white",
    width:"80%",
    marginBottom:"20%",
    padding:20,
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold",
    backgroundColor:"yellow",
    color:"black"
  },
  grid:{
    alignItems:"center",
    justifyContent:"center",
    height:"50%",
    flexWrap:"wrap",
   
  },
  reload:{
    backgroundColor:"red",
    // padding:5,
    borderRadius:100,
    alignItems:"center",
    justifyContent:"center",
    height:50,
    width:50
  },
  reloadText:{
    fontSize:35,
    fontWeight:"bold",
    textAlign:"center",
    // backgroundColor:"red",
    height:50,
    width:50
  }
})
