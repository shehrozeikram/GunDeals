import React from 'react';
import {TouchableOpacity, View, FlatList} from 'react-native';
import {CaretDown} from '../../assets/icons';
import CustomHeader from '../../components/atoms/headers/custom-header';
import {Row} from '../../components/atoms/row';
import ProductItem from '../../components/product/product-item';
import {mvs} from '../../config/metrices';
import {useAppSelector} from '../../hooks/use-store';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import styles from './styles';
const Home = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <CustomHeader
        title={'CA LEGAL'}
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
          renderItem={({item}) => <ProductItem />}
        />
      </View>
    </View>
  );
};
export default Home;
