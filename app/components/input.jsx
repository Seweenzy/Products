import { TextInput, View, Text } from "react-native"


const Input=({placeholder, label, type})=>{

    return(
        <View >
            <Text style={{marginBottom:10, fontWeight:'medium', fontSize:16, fontWeight:'medium'} }>{label}</Text>
            <TextInput keyboardType ={type} style={{paddingLeft:20, height:50, backgroundColor:'white', borderRadius:12}} placeholderTextColor={'black'} placeholder={placeholder}/>
        </View>
    )
}


  

export default Input; 