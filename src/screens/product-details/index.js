import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { CaretDown, CartIcon, Watch } from '../../assets/icons';
import CustomBackHeader from '../../components/atoms/headers/custom-back-header';
import CustomHeader from '../../components/atoms/headers/custom-header';
import { Row } from '../../components/atoms/row';
import ProductDetailsCard from '../../components/product-details-card';
import ProductItem from '../../components/product/product-item';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import styles from './styles';
const ProductDetails = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>

      <CustomBackHeader
        title={'CA LEGAL'}
        onMenuClick={() => navigation?.toggleDrawer()}
      />
      <View style={styles.body}>
        {/* <Row style={{ alignItems: 'center' }}>
          <Medium label={'Showing all categories'} fontSize={mvs(14)} />
          <TouchableOpacity>
            <CaretDown />
          </TouchableOpacity>
        </Row> */}
        <ProductDetailsCard />
        <View style={styles.div} />
        <View style={styles.descriptionView}>
          <Row style={{ marginBottom: mvs(20) }}>
            <Medium label={'Category: Accessories'} color={colors.lightGray} />
            <Medium label={`Caliber: Apparel`} color={colors.lightGray} />
          </Row>
          <Regular
            label={`Adventure north to the most isolated Artic military, Adventure north to the most isolated Artic military`} />
        </View>
      </View>
      <View style={styles.bottom}>
        <Row style={styles.btn}>
          <CartIcon />
          <Medium style={{ marginLeft: mvs(10) }} label={`Go To Store`} color={colors.white} />
        </Row>
      </View>
    </View>
  );
};
export default ProductDetails;
