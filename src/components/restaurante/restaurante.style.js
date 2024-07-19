import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    restaurante:{
        flexDirection:"row",
        marginBottom:10,
        margimTop:10,
        
    },
    logotipo:{
        width:80,
        height:80,
        borderRadius:6,
    },
    textos:{
        flex:1,
        padding:8,
    },
    favorito:{
        width:30,
        height:30,  
        
    },
    nome:{
        color:COLORS.dark_gray,
        marginBottom:3,
        fontSize:FONT_SIZE.sm,
    },
    endereco:{
        color:COLORS.medium_gray,
        fontSize:FONT_SIZE.sm,
    },
    centralizaCoracao:{//serve somente para colocar o coração centralizado
        justifyContent: "center",
        alignItems: "center", 
    }
}