import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container:{
        flex: 1,
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent: "center" ,
        alignItems:"center",
        backgroundColor:COLORS.white,
    },
    form:{
        width:"100%",
        marginBottom:25,
    },
    form30:{
        width:"30%",
        marginBottom:25,
    },
    form70:{
        width:"70%",
        marginBottom:25,
        paddingRight:10,
    },
    formHorizontal:{
        flexDirection: "row"
    },
    formgroup:{
        width:"100%",
        marginTop:25,
        marginBottom:40,

    },
    footer:{
        width:"100%",
        position:"absolute",
        bottom:0,
        marginBottom:35,
    },
    footerText:{
        textAlign:"center",
        color:COLORS.dark_gray,
        FONT_SIZE:FONT_SIZE.md,
    }
}