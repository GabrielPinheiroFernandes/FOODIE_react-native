import { Image, ScrollView,  Text, TouchableOpacity, View } from "react-native";
import { styles } from "./banner.style";




function Banner(props){
    return <>
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {props.dados.map((banner,index)=>{
                    // console.log(banner,index)
                    return ( 
                        <View key={index} style={styles.banner}>
                            <TouchableOpacity>
                                <Image source={banner.icone} style={styles.icone}/>
                            </TouchableOpacity>
                        </View>              
                    )
                })}
            </ScrollView>
        </View>
    </>

}



export default Banner;