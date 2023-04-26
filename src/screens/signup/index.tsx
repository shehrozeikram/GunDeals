import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
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
type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const state = useAppSelector(s => s?.user);
  const [loading,setLoading]=useState(false);
  const [payload, setPayload] = React.useState({
    email: '',
    password: '',
    username:"",
    confirm_password:'',
    confirm_email:''
  });
const onSignup=async()=>{
    if(payload.email.length<1){
      Alert.alert("Sign up","enter email address");
      return;
    }
    if(payload.email!=payload.confirm_email){
      Alert.alert("Sign up","confirm email address not matched");
      return;
    }
    if(payload.username.length<1){
      Alert.alert("Sign up","enter user name ");
      return;
    }
    if(payload.password.length<1){
      Alert.alert("Sign up","enter your password ");
      return;
    }
    if(payload.password!=payload.confirm_password){
      Alert.alert("Sign up","confirm password not matched");
      return;
    }
    
   let data = new FormData();
   data.append('email', payload.email);
   data.append('password', payload.password);
   data.append('username', payload.username);

   let config = {
   method: 'post',
   maxBodyLength: Infinity,
   url:BASE_URL+ 'users.json',
   headers: { 
     'Content-type':'multipart/form-data' 
   },
   data : data
   };
   setLoading(true);
   axios.request(config)
   .then((response) => {
      setLoading(false);
      console.log("Response is ===> ",response)
   if(response.data?.id){
      Alert.alert("Sign up","Account Created Successfully")
   }
   })
   .catch((error) => {
      console.log("Error is ===> ",error?.response?.data)
      setLoading(false);
      var errors=error?.response?.data?.errors;
      if(errors){
         if(errors?.email){
            Alert.alert("Sign up",errors?.email[0])
         }
         if(errors?.password){
            Alert.alert("Sign up",errors?.password[0])
         }
      }
   });
    
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
         
         <TextInput placeholder='Username' 
         onChangeText={(val)=>setPayload({...payload,username:val})}
         style={{borderBottomColor:colors.lightGray,borderBottomWidth:0.5}}/>

         <TextInput placeholder='E-mail address' style={styles.input}
         onChangeText={(val)=>setPayload({...payload,email:val})}/>

         <TextInput placeholder='Confirm e-mail address' style={styles.input}
         onChangeText={(val)=>setPayload({...payload,confirm_email:val})}/>

         <TextInput placeholder='Password' secureTextEntry={true} style={styles.input}
         onChangeText={(val)=>setPayload({...payload,password:val})}/>

         <TextInput secureTextEntry={true} placeholder='Confirm Password' style={styles.input}
         onChangeText={(val)=>setPayload({...payload,confirm_password:val})}/>

         <PrimaryButton title='Register' 
           loading={loading}
           onPress={()=>onSignup()}
           containerStyle={{marginTop:mvs(45)}}/>
        
         <TouchableOpacity style={{marginTop:mvs(25),alignSelf:'center'}}>
            <Regular label={'Forgot Your Password?'} color={colors.lightGray}/>
         </TouchableOpacity>
      </View>
      <View style={{flex:1,justifyContent:'flex-end'}}>
      <View style={styles.bottom}>
         <TouchableOpacity style={{}} onPress={()=>props?.navigation?.navigate("Login")}>
            <Regular label={'Already have an account?'}  color={colors.lightGray} fontSize={mvs(16)}/>
         </TouchableOpacity>
         <TouchableOpacity style={{marginTop:mvs(10)}} onPress={()=>props?.navigation?.navigate("Login")}>
            <Regular label={'LOGIN HERE'} color={colors.white} fontSize={mvs(19)}/>
         </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </ImageBackground>
  </View>
  );
};
export default Signup;
