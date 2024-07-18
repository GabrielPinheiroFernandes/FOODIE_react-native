import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    Header:{
        width:"100%",
        alignItems:"center"
    },
    logo:{
        width: 170,
        height: 50,
    },
    titulo:{
        color:COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        textAlign:"Center"
    }
}