import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./home.style";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox";
import { useState } from "react";
import Categoria from "../../components/category/category";
import { categorias,banners,restaurantes } from "../../constants/dados";
import Banner from "../../components/banner/banner";
import Restaurante from "../../components/restaurante/restaurante";


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

            <ScrollView showsVerticalScrollIndicator={false}>
                <Categoria dados={categorias}/>

                <Banner dados={banners} />
                {
                    restaurantes.map((restaurantes,index)=>{
                        return <View key={index}>
                            <Restaurante logotipo={restaurantes.logotipo} nome={restaurantes.nome} endereco={restaurantes.endereco} icone={icons.favoritoFull}/>
                        </View>
                    })
                }
            </ScrollView>
        </SafeAreaView>
   
    </>
}

export default Home;