import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {CaretDown} from '../../assets/icons';
import CustomHeader from '../../components/atoms/headers/custom-header';
import {Row} from '../../components/atoms/row';
import ProductItem from '../../components/product/product-item';
import {mvs} from '../../config/metrices';
import Medium from '../../typography/medium-text';
import styles from './styles';
const Home = props => {
  const {navigation, route} = props;

  return (
    <View style={styles.container}>
      <CustomHeader
        title={route?.params?.type ? route?.params?.type : 'Home'}
        onMenuClick={() => navigation?.toggleDrawer()}
      />
      <View style={styles.body}>
        <Row style={{alignItems: 'center'}}>
          <Medium label={'Showing all categories'} fontSize={mvs(14)} />
          <TouchableOpacity>
            <CaretDown />
          </TouchableOpacity>
        </Row>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: mvs(10),
            marginTop: mvs(15),
          }}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({item}) => (
            <ProductItem
              onPress={() => props?.navigation?.navigate('ProductDetails')}
            />
          )}
        />
      </View>
    </View>
  );
};
export default Home;
