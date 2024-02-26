import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Snackbar from 'react-native-snackbar';

import Icons from './Icons'
import { Touchable } from 'react-native'

export default function Button({data,setData,index,turn,setTurn}:any):JSX.Element {
   
    const [iconname ,setIconname] = useState("")
    const [isempty,setIsempty] = useState(true)
    const [indexValue,setIndexValue] = useState(index)

    

    const handlePlayer =  (index:any) => {
        if(!isempty) return ;
        
        if(turn === "o"){
            setData((prev:any) => prev.map((old:any) => (old.pos === index? {...old,isChecked:true,iconName:"o"}:old)))
            setIconname("circle")
            setIsempty(false)
            setTurn("x")
        }
        else{
            setData((prev:any) => prev.map((old:any) => old.pos === index? {...old,isChecked:true,iconName:"x"}:old))
            setIconname("cross")
            setIsempty(false)
            setTurn("o")
        }
        
       
    }

    useEffect(() => {
       
       if((data[0].isChecked && data[0].iconName === data[1].iconName && data[0].iconName === data[2].iconName)){
            Snackbar.show({
                text: "player " + data[0].iconName + " win the game",
                marginBottom:50,
                backgroundColor:"green"
            })
           
            return
        }
        if((data[0].isChecked && data[0].iconName === data[3].iconName && data[0].iconName === data[6].iconName)){
            Snackbar.show({
                text: "player " + data[0].iconName + " win the game",
                marginBottom:50,
                backgroundColor:"green"
            })
          
            return
        }
        if((data[0].isChecked && data[0].iconName === data[4].iconName && data[0].iconName === data[8].iconName)){
            Snackbar.show({
                text: "player " + data[0].iconName + " win the game",
                marginBottom:50,
                backgroundColor:"green"
            })
           
            return
        }
        if((data[2].isChecked && data[2].iconName === data[5].iconName && data[2].iconName === data[8].iconName)){
            Snackbar.show({
                text:  "player " + data[2].iconName + " win the game",
                marginBottom:50,
                backgroundColor:"green"
            })
          
            return
        }
        if((data[2].isChecked && data[2].iconName === data[4].iconName && data[2].iconName === data[6].iconName)){
            Snackbar.show({
                text:  "player " + data[2].iconName + " win the game",
                marginBottom:50,
                backgroundColor:"green"
            })
          
            return
        }
        if((data[6].isChecked && data[6].iconName === data[7].iconName && data[6].iconName === data[8].iconName)){
            Snackbar.show({
                text:  "player " + data[6].iconName + " win the game",
                marginBottom:50,
                backgroundColor:"green"
            })
     
            return
        }
        if((data[1].isChecked &&  data[1].iconName === data[4].iconName && data[1].iconName === data[7].iconName)){
            Snackbar.show({
                text:  "player " + data[1].iconName + " win the game",
                marginBottom:50,
                backgroundColor:"green"
            })
          
            return
        }
        if((data[3].isChecked && data[3].iconName === data[4].iconName && data[3].iconName === data[5].iconName)){
            Snackbar.show({
                text:  "player " + data[3].iconName + " win the game",
                marginBottom:50,
                backgroundColor:"green",
                
            })
          
            return
        }
     

        let flag = 0;
        data.map((item:any) => {
            if(!item.isChecked){
                flag=1;
            }
        })

        if(flag === 0){
            Snackbar.show({
                text:"Draw",
                backgroundColor:"red"
            })
            
        }
     
    
    },[data])
    return (
        <>
        <TouchableOpacity style={styles.container} onPress={() => handlePlayer(indexValue)}>
            <Icons name={iconname}/>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"blue",
        margin:3,
        height:100,
        width:100,
        alignItems:"center",
        justifyContent:"center"
    },
})