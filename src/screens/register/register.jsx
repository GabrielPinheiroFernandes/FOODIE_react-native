import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./register.style";
import Header from "../../components/header/header";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button"


function Register(props){
    return <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

            <Header texto="Crie sua conta." />
            <View style={styles.formgroup}>     
                <View style={styles.form}>
                    <TextBox label="Nome Completo" placeholder="xxxxx"/>
                </View>          
                <View style={styles.form}>
                    <TextBox label="E-mail" placeholder="xxxxx@hotmail.com"/>
                </View>
                <View style={styles.form}>
                    <TextBox label="Escolha uma senha" placeholder="xxxxx" isPassworld={true}/>
                </View>
                <View style={styles.form}>
                    <TextBox label="Confirme a senha" placeholder="xxxxx" isPassworld={true}/>
                </View>
                <Button texto="Proximo Passo" onPress={() => props.navigation.navigate("registro2")}/>
            </View>

        </View>
    </ScrollView>
    </>
}


export default Register;