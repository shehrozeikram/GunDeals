import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CartIcon } from '../../assets/icons';
import CustomBackHeader from '../../components/atoms/headers/custom-back-header';
import { Row } from '../../components/atoms/row';
import ProductDetailsCard from '../../components/product-details-card';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import TopTabNavigator from '../../navigation/top-tab-navigation';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import styles from './styles';
const ProductDetails = props => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <CustomBackHeader
        showBack
        title={'CA LEGAL'}
        onMenuClick={() => navigation?.toggleDrawer()}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}>
        <ProductDetailsCard />
        <View style={styles.div} />
        <View style={styles.descriptionView}>
          <Row style={{ marginBottom: mvs(20) }}>
            <Medium label={'Category: Accessories'} color={colors.lightGray} />
            <Medium label={`Caliber: Apparel`} color={colors.lightGray} />
          </Row>
          <Regular
            label={`Adventure north to the most isolated Artic military, Adventure north to the most isolated Artic military`}
          />
        </View>
        <TopTabNavigator />
      </ScrollView>
      <View style={styles.bottom}>
        <Row style={styles.btn}>
          <CartIcon />
          <Medium
            style={{ marginLeft: mvs(10) }}
            label={`Go To Store`}
            color={colors.white}
          />
        </Row>
      </View>
    </View>
  );
};
export default ProductDetails;
