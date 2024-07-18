import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./register2.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button"
import { useState } from "react";


function Register2(){
    const [endereco,setEndereco] = useState("");
    const [complemento,setComplemento] = useState("");
    const [bairro,setBairro] = useState("");
    const [cidade,setCidade] = useState("");
    const [uf,setUF] = useState("");
    const [cep,setCep] = useState("");



    return <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

            <Header texto="Informe seu endereço." />
            <View style={styles.formgroup}>     
                <View style={styles.formHorizontal}>
                    <View style={styles.form70}>
                        <TextBox label="Endereco" placeholder="xxxxx" onChangeText={(texto)=>setEndereco(texto)} value={endereco}/>
                    </View>
                    <View style={styles.form30}>
                        <TextBox label="compl." placeholder="xxxxx" onChangeText={(texto)=>setComplemento(texto)} value={complemento}/>
                    </View>
                </View>          
                <View style={styles.form}>
                    <TextBox label="Bairro" placeholder="xxxxx" onChangeText={(texto)=>setBairro(texto)} value={bairro}/>
                </View>
                <View style={styles.formHorizontal}>
                    <View style={styles.form70}>
                        <TextBox label="Cidade" placeholder="xxxxx" onChangeText={(texto)=>setCidade(texto)} value={cidade}/>
                    </View>
                    <View style={styles.form30}>
                        <TextBox label="Estado" placeholder="xx" onChangeText={(texto)=>setUF(texto)} value={uf}/>
                    </View>
                </View>  
                <View style={styles.form}>
                    <TextBox label="Cep" placeholder="xxxxx"  onChangeText={(texto)=>setCep(texto)} value={cep}/>
                </View>
                <Button texto="Criar Miha Conta" onPress={console.log(endereco,complemento,bairro,cidade,uf,cep)}/>
            </View>


        </View>
    </ScrollView >
    </>
}


export default Register2;