import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./register2.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button"


function Register2(){
    return <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

            <Header texto="Informe seu endereço." />
            <View style={styles.formgroup}>     
                <View style={styles.formHorizontal}>
                    <View style={styles.form70}>
                        <TextBox label="Endereco" placeholder="xxxxx"/>
                    </View>
                    <View style={styles.form30}>
                        <TextBox label="Endereco" placeholder="xxxxx"/>
                    </View>
                </View>          
                <View style={styles.form}>
                    <TextBox label="Bairro" placeholder="xxxxx"/>
                </View>
                <View style={styles.formHorizontal}>
                    <View style={styles.form70}>
                        <TextBox label="Cidade" placeholder="xxxxx"/>
                    </View>
                    <View style={styles.form30}>
                        <TextBox label="Estado" placeholder="xx"/>
                    </View>
                </View>  
                <View style={styles.form}>
                    <TextBox label="Cep" placeholder="xxxxx" />
                </View>
                <Button texto="Criar Miha Conta" />
            </View>


        </View>
    </ScrollView >
    </>
}


export default Register2;