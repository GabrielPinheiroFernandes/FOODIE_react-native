import { FlatList, Image, Text, View } from "react-native";
import { restaurantes } from "../../constants/dados";
import Restaurante from "../../components/restaurante/restaurante";
import icons from "../../constants/icons";
import { styles } from "./favoritos.style";

function Favoritos(props){
    const vazio=[];

    return <View style={styles.container}>
        <FlatList 
        data={restaurantes}
        // data={vazio}
        keyExtractor={(restaurantes)=>restaurantes.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>{
            return <Restaurante nome={item.nome} endereco={item.endereco} logotipo={item.logotipo} icone={icons.remove} />
        }}

        contentContainerStyle={styles.containerList}

        ListEmptyComponent={()=>{
            return <View  style={styles.empty}>
                <Image source={icons.empty} />
                <Text style={styles.emptyText} >Nenhum favorito encontrado</Text>
            </View>
        }}
        />
    </View>
}

export default Favoritos;