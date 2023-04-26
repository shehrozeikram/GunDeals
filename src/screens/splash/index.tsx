import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import styles from './styles';
import { useAppDispatch, useAppSelector } from './../../hooks/use-store';
import { SERVICES } from '../../utils';
import { STORAGEKEYS } from '../../config/constants';
import { bg } from '../../assets/images';
import { SplashIcon } from '../../assets/icons';

const Splash = props => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const store = useAppSelector(s => s);

  React.useEffect(() => {
    (async () => {
      setTimeout(() => {
        navigation?.replace("DrawerNavigation");
      }, 2000);
    })()
  }, []);
  return (
    <View style={{ ...styles.container }}>
      <ImageBackground source={bg} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar translucent backgroundColor='transparent' />
        <SplashIcon />
      </ImageBackground>
    </View>
  );
};
export default Splash;


