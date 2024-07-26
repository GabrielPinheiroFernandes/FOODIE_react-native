import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container:{
        flex: 1,
        backgroundColor:COLORS.white,
        
    },
    icons:{
        width:30,
        height:30,
    },
    item:{
        flexDirection:"row",
        padding:12,
        borderBottomWidth:1,
        borderBottomColor:COLORS.gray,
    },
    textos:{
        flex:1,
        marginLeft:10,
    },
    containerIcone:{
        justifyContent:"center",
    },
    titulo:{
        color:COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
    },
    subTitulo:{
        color:COLORS.medium_gray,
        fontSize: FONT_SIZE.sm,
    },
    more:{
        width:20,
        height:20,
    },
    borderTop:{
        borderTopWidth:1,
        borderTopColor:COLORS.gray,
    }
}