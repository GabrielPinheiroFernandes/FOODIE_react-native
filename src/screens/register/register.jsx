import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./register.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button"
import { useState } from "react";


function Register(props){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha1, setSenha1] = useState("");
    const [senha2, setSenha2] = useState("");


    return <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

            <Header texto="Crie sua conta." />
            <View style={styles.formgroup}>     
                <View style={styles.form}>
                    <TextBox label="Nome Completo" placeholder="xxxxx" onChangeText={(texto)=>setNome(texto)} value={nome}/>
                </View>          
                <View style={styles.form}>
                    <TextBox label="E-mail" placeholder="xxxxx@hotmail.com" onChangeText={(texto)=>setEmail(texto)} value={email}/>
                </View>
                <View style={styles.form}>
                    <TextBox label="Escolha uma senha" placeholder="xxxxx" isPassworld={true} onChangeText={(texto)=>setSenha1(texto)} value={senha1}/>
                </View>
                <View style={styles.form}>
                    <TextBox label="Confirme a senha" placeholder="xxxxx" isPassworld={true} onChangeText={(texto)=>setSenha2(texto)} value={senha2}/>
                </View>
                <Button texto="Proximo Passo" onPress={() => props.navigation.navigate("registro2")}/>
            </View>

        </View>
    </ScrollView>
    </>
}


export default Register;