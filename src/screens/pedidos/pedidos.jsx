import { FlatList, Image, Text, View } from "react-native";
import Pedido from "../../components/pedido/pedido";
import icons from "../../constants/icons"
import { pedidos } from "../../constants/dados";
import { styles } from "../../screens/pedidos/pedidos.style"


function Pedidos (){

    vazio=[];
    return <>
        <FlatList 
        style={styles.container}
        data={pedidos}
        // data={vazio}
        keyExtractor={(pedidos)=>pedidos.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
            return <Pedido nomeProduto={item.nome} logotipo={item.logotipo} preco={item.vl_total} date={item.dt_pedido} status={item.status}/>
        }}

        contentContainerStyle={styles.containerList}

        ListEmptyComponent={()=>{
            return <View  style={styles.empty}>
                <Image source={icons.empty} />
                <Text style={styles.emptyText} >Nenhum Pedido encontrado</Text>
            </View>
        }}
        />
    
    
    </>
}



export default Pedidos;

