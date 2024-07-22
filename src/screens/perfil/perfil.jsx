import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./perfil.style";
import icons from "../../constants/icons";

export default function Perfil(){
    return <>
        <View style={styles.container}>

        <TouchableOpacity style={[styles.item,styles.borderTop]}>
                <View style={styles.containerIcone}>
                    <Image source={icons.address} style={styles.icons}/>
                </View>
                <View style={styles.textos}>
                    <Text style={styles.titulo}>Endereço</Text>
                    <Text style={styles.subTitulo}>Meu endereço de entrega</Text>
                </View>
                <View style={styles.containerIcone}>
                    <Image source={icons.more} style={styles.more}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcone}>
                    <Image source={icons.dados} style={styles.icons}/>
                </View>
                <View style={styles.textos}>
                    <Text style={styles.titulo}>Meus dados</Text>
                    <Text style={styles.subTitulo}>Informações da minha conta</Text>
                </View>
                <View style={styles.containerIcone}>
                    <Image source={icons.more} style={styles.more}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
                <View style={styles.containerIcone}>
                    <Image source={icons.logout} style={styles.icons}/>
                </View>
                <View style={styles.textos}>
                    <Text style={styles.titulo}>Desconectar</Text>
                    <Text style={styles.subTitulo}>Desconectar seu usuário desse aparelho</Text>
                </View>
                <View style={styles.containerIcone}>
                    <Image source={icons.more} style={styles.more}/>
                </View>
            </TouchableOpacity>
            
        </View>
    
    </>
}