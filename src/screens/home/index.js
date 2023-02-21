import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useAppSelector } from '../../hooks/use-store';
import Regular from '../../typography/regular-text';
import styles from './styles';
const Home = (props) => {
  const { navigation } = props;


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation?.toggleDrawer()}>
        <Regular label={'jdjfjsd'} />
      </TouchableOpacity>
    </View>
  );
};
export default Home;
