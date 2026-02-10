import{ View} from "react-native";

import MovieScreen from "./moviescreen";




 

export default function Index(){


    return(

        <View
        style={{backgroundColor:'red', 
            flex:1,
            paddingHorizontal:10,
            
        }}
        >


        <MovieScreen/>
       

        </View>

    )
}