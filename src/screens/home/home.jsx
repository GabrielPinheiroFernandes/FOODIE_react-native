import { Image, ScrollView, View } from "react-native";
import { styles } from "./home.style";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox";
import { useState } from "react";


function Home(){
    const [busca,setBusca] = useState("");

    return <>
        <SafeAreaView style={styles.container}>         
            <View style={styles.headerBar}>
                <Image source={icons.Logo} style={styles.logo}/>
                <Image source={icons.cart} style={styles.cart}/>
            </View>        
            <View style={styles.busca}>
                <TextBox placeholder="o que vamos pedir hoje ?"
                onChangeText={(texto)=> setBusca(texto)}
                />
            </View>
        </SafeAreaView>
   
    </>
}

export default Home;