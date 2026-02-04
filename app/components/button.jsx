import { TouchableOpacity, Text } from "react-native"



const Button =({text, style})=>{

    return(
        <TouchableOpacity style={{backgroundColor:'purple', height:50,
        borderRadius:12, justifyContent:'center', ...style }}
        > 

            <Text style={{alignSelf:'center', fontSize:15, color: 'white'}}>{text}</Text>

        </TouchableOpacity>


    )
}

export default Button;