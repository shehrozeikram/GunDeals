import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BASE_URL, IMAGE_URL} from '../../API/urls';
import CustomBackHeader from '../../components/atoms/headers/custom-back-header';
import {Loader} from '../../components/atoms/loader';
import {Row} from '../../components/atoms/row';
import SimilarProduct from '../../components/product/similar-product';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import Deals from './deals';
import Inventory from './inventory';
import styles from './styles';
const InventoryDetails = props => {
  const {navigation, route} = props;
  const {id} = route.params;
  const [inventoryTab, setInventoryTab] = useState(true);
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [inventoryProducts, setInventoryProducts] = useState([]);
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [outOfStocks, setOutOfStocks] = useState([]);
  useEffect(() => {
    getInventory();
  }, []);
  const getInventory = async () => {
    setLoading(true);
    var res = await axios.get(
      BASE_URL + 'products/live_inventory_search?id=' + id,
    );
    console.log('Inenvtory result ===> ', res?.data);
    if (res?.data?.api_status == true) {
      setProduct(res?.data?.product);
      setSimilarProducts(res?.data?.similar_products);
      setInventoryProducts(res?.data?.live_inventory_products);
      setDeals(res?.data?.deals);
      setOutOfStocks(res?.data?.out_of_stock_products);
    }
    setLoading(false);
  };
  return loading ? (
    <Loader />
  ) : (
    <View style={{flex: 1}}>
      <CustomBackHeader
        showBack
        title={'Home'}
        onMenuClick={() => navigation?.toggleDrawer()}
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: mvs(20)}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.image}>
          <Image
            source={{
              uri: product?.image?.url
                ? `${IMAGE_URL}${product?.image?.url}`
                : product?.image_link,
            }}
            resizeMode="contain"
            style={{height: mvs(100), width: '80%'}}
          />
        </View>
        <View style={styles.descriptionView}>
          <Bold
            label={product?.title}
            style={{marginBottom: 8}}
            numberOfLines={2}
          />
          <View style={{...styles.div, marginBottom: mvs(8)}} />
          <Row style={{marginVertical: mvs(3)}}>
            <Medium
              label={'Category: ' + product?.brand}
              color={colors.lightGray}
            />
            {product?.caliber && (
              <Medium
                label={`Caliber: ` + product?.caliber}
                color={colors.lightGray}
              />
            )}
          </Row>
          <Row style={{marginVertical: mvs(3)}}>
            <Medium label={'UPC: ' + product?.upc} color={colors.lightGray} />
            <Medium
              label={`Brand: ` + product?.brand}
              color={colors.lightGray}
            />
          </Row>
          <Row style={{marginVertical: mvs(3)}}>
            <Medium label={'Type: All Firearms'} color={colors.lightGray} />
            {product?.weight && (
              <Medium
                label={`Weight: ` + product?.weight}
                color={colors.lightGray}
              />
            )}
          </Row>
          <View style={{...styles.div, marginTop: mvs(8)}} />
        </View>
        <Bold
          label={'Similar Products'}
          style={{marginVertical: mvs(7), marginHorizontal: mvs(17)}}
          fontSize={mvs(20)}
        />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: mvs(5),
            paddingHorizontal: mvs(10),
            height: mvs(300),
          }}
          data={similarProducts}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                props?.navigation?.navigate('ProductDetails', {id: item?.id})
              }>
              <SimilarProduct item={item} />
            </TouchableOpacity>
          )}
        />
        <Row style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => setInventoryTab(true)}
            style={inventoryTab ? styles.active : styles.inactive}>
            <Regular label={'LIVE INVENTORY'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setInventoryTab(false)}
            style={inventoryTab ? styles.inactive : styles.active}>
            <Regular label={'DEALS'} />
          </TouchableOpacity>
        </Row>
        {inventoryTab ? (
          <Inventory data={inventoryProducts} outOfStocks={outOfStocks} />
        ) : (
          <Deals list={similarProducts} />
        )}
      </ScrollView>
    </View>
  );
};
export default InventoryDetails;
