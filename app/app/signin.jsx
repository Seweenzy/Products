import{Text,TextInput,TouchableOpacity,View,Image} from "react-native";
import{SafeAreaView} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import {router} from "expo-router";


export default function(){
    return (
        <SafeAreaView
        style={{
            backgroundColor:"white",
            flex:1,
            paddingHorizontal:20,
            paddingTop:10
        }}
        >
            <TouchableOpacity onPress={() => {router.back()}}><Icon name='arrow-left' size={15} color='grey'/></TouchableOpacity>

        <Text style={{color:'grey', fontSize:12, TextAlign: 'center', marginTop:30}}>English (US)</Text> <TouchableOpacity><Icon name='chevron-down' size={12} color='grey'></Icon></TouchableOpacity>

        

        <TextInput placeholder="Enter your name here" style={{borderColor:'#D3D3D3', borderRadius:20, height:60, paddingLeft:10, marginTop:60}}>
        </TextInput>
        <TextInput placeholder="Enter your password here" style={{borderColor:'#D3D3D3', borderRadius:20, height:60, paddingLeft:10, marginTop:20}}>
        </TextInput>

        <TouchableOpacity
        style={{
            backgroundColor:'#1a70e2',
            borderRadius:20,
            height:50,
            marginTop:20,
            textAlign: 'center',
            justifyContent:'center',
            borderWidth:1

        }}
        >
            <Text style={{color:'white', fontSize:14, fontWeight:'medium'}}>Log In</Text>
        </TouchableOpacity>

        <Text style={{color:'black', textAlign:'center', fontWeight:'medium', marginTop:15}}>
            Forgot Password
        </Text>

        <TouchableOpacity style={{
            height:50,
             borderColor:'##075186',
              borderRadius:20, 
              textAlign:'center',
               justifyContent:'center',
               borderWidth:1,
               marginTop:150,
               }}>

            <Text style={{color:'#075186', fontWeight:'mediumm', fontSize:14}}>Create a new account</Text>
            
        </TouchableOpacity>

        </SafeAreaView>

    )
}