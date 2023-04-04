import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from './../../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    contentContainerStyle: {
        flex: 1,
        padding: mvs(10)
    },
    body:{
        flex:1,
        paddingVertical:mvs(12),
        paddingHorizontal:mvs(10)
    }
});
export default styles;