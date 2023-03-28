import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, StatusBar, TextInput, View,TouchableOpacity,ScrollView } from 'react-native';
import { HeaderLogo } from '../../assets/icons';
import { bg, BottomBlack } from '../../assets/images';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Regular from '../../typography/regular-text';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const state = useAppSelector(s => s?.user);

  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  return (
    <View style={{ ...styles.container }}>
    <ImageBackground source={bg} style={{ height: '100%', width: '100%',paddingTop:mvs(20) }}>
      <StatusBar translucent backgroundColor='transparent' />
      <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <HeaderLogo style={{alignSelf:'center'}}/>
      <View style={styles.login}>
         <TextInput placeholder='Username' style={{borderBottomColor:colors.lightGray,borderBottomWidth:0.5}}/>
         <TextInput placeholder='E-mail address' style={styles.input}/>
         <TextInput placeholder='Confirm e-mail address' style={styles.input}/>
         <TextInput placeholder='Password' style={styles.input}/>
         <TextInput placeholder='Confirm Password' style={styles.input}/>
         <PrimaryButton title='Register' containerStyle={{marginTop:mvs(45)}}/>
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
