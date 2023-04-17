import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CartIcon} from '../../assets/icons';
import CustomBackHeader from '../../components/atoms/headers/custom-back-header';
import {Row} from '../../components/atoms/row';
import ProductDetailsCard from '../../components/product-details-card';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import TopTabNavigator from '../../navigation/top-tab-navigation';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import styles from './styles';
import {BASE_URL} from '../../API/urls';
import axios from 'axios';
import {Loader} from '../../components/atoms/loader';
const ProductDetails = props => {
  const {navigation, route} = props;
  const {id} = route?.params;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    setLoading(true);
    axios
      .get(BASE_URL + 'products?id=' + id)
      .then(response => {
        setProduct(response?.data?.product);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };
  return loading ? (
    <Loader />
  ) : (
    <View style={{flex: 1}}>
      <CustomBackHeader showBack title={'Home'} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <ProductDetailsCard item={product} />
        <View style={styles.div} />
        <View style={styles.descriptionView}>
          <Row style={{marginBottom: mvs(20)}}>
            <Medium label={'Category: Accessories'} color={colors.lightGray} />
            {product?.caliber && (
              <Medium
                label={`Caliber: ` + product?.caliber}
                color={colors.lightGray}
              />
            )}
          </Row>
          <Regular label={product?.body} numberOfLines={3} />
        </View>
        <View style={{backgroundColor: colors.white}}>
          <TouchableOpacity style={styles.police}>
            <Regular
              label={'See more LA Police Gear deals'}
              fontSize={mvs(12)}
            />
          </TouchableOpacity>
        </View>

        <TopTabNavigator />
      </ScrollView>
      <View style={styles.bottom}>
        <Row style={styles.btn}>
          <CartIcon />
          <Medium
            style={{marginLeft: mvs(10)}}
            label={`Go To Store`}
            color={colors.white}
          />
        </Row>
      </View>
    </View>
  );
};
export default ProductDetails;
