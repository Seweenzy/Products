import{Text, View, TouchableOpacity} from "react-native";
import{SafeAreaView} from "react-native-safe-area-context";

import{useState} from 'react';
import {router} from "expo-router";

import Input from '../components/input';
import Button from "../components/button";

 

export default function(){

    const [lightMode, setlightMode] =useState(true)

    return(

        <SafeAreaView
        style={{backgroundColor:lightMode ? 'pink' : 'orange', 
            flex:1,
            paddingHorizontal:10,
            
        }}
        >


        <View style={{gap:40, marginTop:20}}> 

        <Input type={'default'} label={'Full Name'} placeholder={'Enter your full name'}/>
        <Input type={'email-address'}label={'Email Address'}placeholder={'Enter your email address'}/>
        <Input type={'number-pad'} label={'Phone Number'} placeholder={'Enter your phone number'}/>
        

        </View>


        <TouchableOpacity onPress={()=>setlightMode(!lightMode)} 
        style={{backgroundColor:'green', height:50, justifyContent:'center', 
            marginTop:30, borderRadius:12}}>
            <Text style={{alignSelf:'center', color:'white', fontWeight:'bold', fontSize:16}}>Submit</Text>
        </TouchableOpacity>


        <View style={{marginTop:60, gap:20}}>
            <Button  onPress={() => {
                router.push('signin')  
                }} 
                
                style={{backgroundColor:'blue' }} text={'Sign Up!'}/>
            <Button style={{backgroundColor:'orange'}} text={'Log In!'}/>
            <Button style={{backgroundColor:'purple'}} text={'Click Me!'}/>
            <Button style={{backgroundColor:'grey'}} text={'Press Me!'}/>
            </View>

        </SafeAreaView>

    )
}