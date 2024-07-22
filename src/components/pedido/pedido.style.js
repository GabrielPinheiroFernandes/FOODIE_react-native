import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constants/theme";


export const styles = {
    container:{
        padding:10,
        flexDirection:"row",
        marginBottom:10,
        margimTop:10,
        
    },
    logotipo:{
        width:80,
        height:80,
        borderRadius:6,
    },
    row:{      
        paddingBottom:3,
        paddingTop:3,
        justifyContent:"space-between",
        flexDirection:"row",
    },
    centerContent:{
        flex:1,
        padding:10,
        paddingLeft:15,
    },
    description: {
        color:COLORS.medium_gray,
    },
    status:{
        color:COLORS.green,
        fontSize:FONT_SIZE.md,
    },
    productTitle:{
        color:COLORS.dark_gray,
        fontSize:FONT_SIZE.md,
    },
    empty:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom:80
    },
    emptyText:{
        fontSize:FONT_SIZE.sm,
        color:COLORS.dark_gray
    }
}