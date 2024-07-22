import { Image, Text, View } from "react-native";
import { styles } from "./pedido.style";



function Pedido(props){
    return <>   
        <View style={styles.container}>
            <Image source={props.logotipo} style={styles.logotipo}/>  
          <View style={styles.centerContent}>
            <Text style={styles.productTitle}>{props.nomeProduto}</Text>
            <View style={styles.row}>
                <Text style={styles.description}>R$ {props.preco}</Text>
                <Text style={styles.description}>{props.date}</Text>
            </View>
            <Text style={styles.status}>{props.status}</Text>
          </View>
        </View>
    
    </>
}


export default Pedido;