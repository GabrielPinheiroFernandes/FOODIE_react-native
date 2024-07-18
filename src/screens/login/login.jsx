import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button"
import { useState } from "react";


function Login(props){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function ProcessarLogin(){
        console.log(email,senha)

    }

    return <>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>

            <Header texto="Acesse sua conta." />
            <View style={styles.formgroup}>               
                <View style={styles.form}>
                    <TextBox label="E-mail" placeholder="xxxxx@hotmail.com" onChangeText={(texto)=>{setEmail(texto)}} value={email}/>
                </View>
                <View style={styles.form}>
                    <TextBox label="Senha" placeholder="xxxxx" isPassworld={true} onChangeText={(texto)=>{setSenha(texto)}} value={senha}/>
                </View>
                <Button texto="Acessar" onPress={ProcessarLogin}/>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("registro")}>
                    <Text style={styles.footerText} >Crie Sua Conta</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    </>
}


export default Login;