import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React,{useState} from 'react';
import { Alert, ImageBackground, ScrollView, StatusBar, TextInput, TouchableOpacity, View } from 'react-native';
import { Back, HeaderLogo } from '../../assets/icons';
import { bg } from '../../assets/images';
import { PrimaryButton } from '../../components/atoms/buttons';
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Regular from '../../typography/regular-text';
import styles from './styles';
import axios from 'axios';
import { BASE_URL } from '../../API/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
type props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const state = useAppSelector(s => s?.user);
  const [loading,setLoading]=useState(false);
  const [payload, setPayload] = React.useState({
    email: '',
    password: '',
  });
const onLogin=async()=>{
    if(payload.email.length<1){
      Alert.alert("Sign up","enter email address");
      return;
    }
    if(payload.password.length<1){
      Alert.alert("Sign up","enter your password ");
      return;
    }
    
   let data = new FormData();
   data.append('email', payload.email);
   data.append('password', payload.password);
   let config = {
   method: 'post',
   maxBodyLength: Infinity,
   url:BASE_URL+ 'users/sign_in',
   headers: { 
     'Content-type':'multipart/form-data' 
   },
   data : data
   };
   setLoading(true);
   axios.request(config)
   .then((response) => {
      setLoading(false);
      console.log("Reponse is ===> ",response?.data)
      if(response.data?.api_status){
        savePreference(response.data?.user)
      }
      else if(response.data?.error && !response.data?.api_status){
        Alert.alert("Login",response.data?.error)
      }
   })
   .catch((error) => {
      setLoading(false);
      console.log("Error is ===> ",error?.response?.data)
      Alert.alert("Login","Something went wrong")
   }); 
}
const savePreference=async(user:any)=>{
  await AsyncStorage.setItem("@user",JSON.stringify(user));
  props.navigation.navigate("DrawerNavigation")
}
  return (
    <View style={{ ...styles.container }}>
    <ImageBackground source={bg} style={{ height: '100%', width: '100%',paddingTop:mvs(20) }}>
      <StatusBar translucent backgroundColor='transparent' />
      <Row style={{paddingLeft:mvs(10),marginBottom:mvs(10)}}>
         <TouchableOpacity style={{marginTop:mvs(6)}} onPress={()=>navigation?.goBack()}>
              <Back/>
         </TouchableOpacity>
         <View style={{flex:1}}>
           <HeaderLogo style={{alignSelf:'center'}}/>
         </View>
      </Row>
      <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
       <View style={styles.login}>
         <TextInput placeholder='Username or e-mail address' 
         onChangeText={(val)=>setPayload({...payload,email:val})}
         style={{borderBottomColor:colors.lightGray,borderBottomWidth:0.5}}/>

         <TextInput placeholder='Password' 
         secureTextEntry={true}
         onChangeText={(val)=>setPayload({...payload,password:val})}
         style={{borderBottomColor:colors.lightGray,borderBottomWidth:0.5,marginTop:mvs(12)}}/>
      
         <PrimaryButton title='Login' 
         loading={loading}
         containerStyle={{marginTop:mvs(45)}} onPress={()=>onLogin()}/>
      
         <TouchableOpacity style={{marginTop:mvs(25),alignSelf:'center'}}>
            <Regular label={'Forgot Your Password?'} color={colors.lightGray}/>
         </TouchableOpacity>
      
      </View>
      <View style={{flex:1,justifyContent:'flex-end'}}>
      <View style={styles.bottom}>
         <TouchableOpacity style={{}} onPress={()=>props?.navigation?.navigate("Signup")}>
            <Regular label={'Don’t have an account yet?'} color={colors.lightGray} fontSize={mvs(16)}/>
         </TouchableOpacity>
         <TouchableOpacity style={{marginTop:mvs(10)}} onPress={()=>props?.navigation?.navigate("Signup")}>
            <Regular label={'REGISTER HERE'} color={colors.white} fontSize={mvs(19)}/>
         </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </ImageBackground>
  </View>
  );
};
export default Login;
