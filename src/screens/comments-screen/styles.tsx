import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg
    },
    contentContainerStyle: {
        flex: 1,
        padding: mvs(20)
    },
    body: {
        flex: 1,
        paddingVertical: mvs(12),
        paddingHorizontal: mvs(20),
        backgroundColor: colors.bg
    },
    descriptionView: {
        flex: 1,
        backgroundColor: colors.white,
        padding: mvs(20)
    },
    div: {
        height: 1,
        backgroundColor: colors.border,
        marginHorizontal: mvs(20)
    },
    btn: {
        backgroundColor: colors.primary,
        paddingHorizontal: mvs(50),
        borderRadius: mvs(10),
        paddingVertical: mvs(15),
        alignSelf: 'center'
    },
    rotate: {
        borderLeftWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: colors.border,
        position: 'absolute',
        top: mvs(-15 / 2),
        left: mvs(20),
        height: mvs(15),
        width: mvs(15),
        backgroundColor: colors.white,
        transform: [{ rotate: '45deg' }],
    },
    bottom: { position: 'absolute', bottom: 0, width: '100%', paddingBottom: mvs(30) }
});
export default styles;