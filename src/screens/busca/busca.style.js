import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container:{
        flex: 1,
        padding: 12,  
        backgroundColor:COLORS.white,
        
    },
    containerList: {
        flex: 1,
        
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