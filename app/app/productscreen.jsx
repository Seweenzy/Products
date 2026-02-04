
import { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const ProductScreen=()=>{

useEffect(()=>{
    getProducts();
}, []); 

const getProducts=()=>{

    const URL="https://imdb236.p.rapidapi.com/api/imdb/top250-movies/";

    fetch(URL).then(res=>{
        return res.json()
}).then(data=>{
    console.log(data);
})

}

    return(
        
       <SafeAreaView style={styles.body}>
         <Text>Product Screen</Text>
       </SafeAreaView>
        
    )
}



export default ProductScreen;

const styles= StyleSheet.create({

    body:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

})