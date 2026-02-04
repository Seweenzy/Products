import{Text, View} from "react-native";
import{SafeAreaView} from "react-native-safe-area-context";
import ProductScreen from "./productscreen";



 

export default function Index(){


    return(

        <SafeAreaView
        style={{backgroundColor:'red', 
            flex:1,
            paddingHorizontal:10,
            
        }}
        >


        
        <ProductScreen/>

        </SafeAreaView>

    )
}