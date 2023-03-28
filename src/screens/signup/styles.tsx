import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from '../../config/colors';

const  styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        
    },
    contentContainerStyle:{
        padding:mvs(20),
        paddingTop:mvs(100),
    },
    bottom:{
        marginBottom:mvs(20),
        height:mvs(100),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#21252D",
        opacity:0.5,
        paddingBottom:mvs(20)
    },
    login:{
        //height:mvs(364),
        backgroundColor:colors.white,
        marginHorizontal:mvs(30),
        marginTop:mvs(20),
        paddingHorizontal:mvs(20),
        paddingBottom:mvs(30),
        paddingTop:mvs(60)
    },
    input:{
        borderBottomColor:colors.lightGray,
        borderBottomWidth:0.5,
        marginTop:mvs(10)
    }

});
export default styles;