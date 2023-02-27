import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from './../../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg
    },
    contentContainerStyle: {
        flex: 1,
        padding: mvs(20)
    },
    body:{
        flex:1,
        paddingVertical:mvs(12),
        paddingHorizontal:mvs(21)
    }
});
export default styles;