import { Image, ScrollView,  Text, TouchableOpacity, View } from "react-native";
import { styles } from "./category.style";




function Categoria(props){
    return <>
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                {props.dados.map((categoria,index)=>{
                    // console.log(categoria,index)
                    return ( 
                        <TouchableOpacity>
                            <View key={index} style={styles.categoria}>
                                <Image source={categoria.icone} style={styles.icone}/>
                                <Text style={styles.descricao}>{categoria.descricao}</Text>
                            </View>              
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    
    
    </>

}



export default Categoria;