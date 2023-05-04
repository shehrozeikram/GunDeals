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
import AsyncStorage from '@react-native-async-storage/async-storage';
import SecondaryLoader from '../../components/loader/secondary-loader';
import Prices from '../prices-screen';
import Comments from '../comments-screen';
import ProductCoupons from '../product-coupons/product-coupons';
const ProductDetails = props => {
  const {navigation, route} = props;
  const {id} = route?.params;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({});
  const [tab, setTab] = useState('p');
  useEffect(() => {
    getUser();
    getComments();
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
  const getComments = async () => {
    axios
      .get(BASE_URL + 'products/fetch_comments?id=' + id)
      .then(response => {
        console.log('Comments respponse iis====> ', response?.data);
        if (response?.data?.api_status == true) {
          setComments(response?.data?.comments);
        } else {
          setComments([]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  const addToWatch = async () => {
    if (!user?.id) {
      props?.navigation.navigate('Login');
      return;
    }
    setLoader(true);
    axios
      .get(
        BASE_URL +
          'watchlist/add_to_watchlist?product_id=' +
          product?.id +
          '&user_id=' +
          user?.id,
      )
      .then(response => {
        //setProduct(response?.data?.product);
        setLoader(false);
      })
      .catch(error => {
        console.log(error);
        setLoader(false);
      });
  };
  const getUser = async () => {
    const u = await AsyncStorage.getItem('@user');
    var us = JSON.parse(u);
    if (us?.id) {
      setUser(us);
    }
  };
  const onComment = async val => {
    console.log('Calling api ===> ', val);
    if (!user?.id) {
      props?.navigation.navigate('Login');
      return;
    }
    let data = new FormData();
    data.append('body', val);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url:
        BASE_URL +
        'products/create_comment?product_id=' +
        product?.id +
        '&user_id=' +
        user?.id,
      headers: {
        'Content-type': 'multipart/form-data',
      },
      data: data,
    };
    setLoader(true);
    axios
      .request(config)
      .then(response => {
        getComments();
        setLoader(false);
      })
      .catch(error => {
        console.log(error);
        setLoader(false);
      });
  };
  return loading ? (
    <Loader />
  ) : (
    <View style={{flex: 1}}>
      <CustomBackHeader showBack title={'Home'} />
      <SecondaryLoader visible={loader} animationType={'fade'} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: mvs(120),
          backgroundColor: colors.bg,
        }}
        showsVerticalScrollIndicator={false}>
        <ProductDetailsCard item={product} onWatch={() => addToWatch()} />
        <View style={styles.div} />
        <View style={styles.descriptionView}>
          <Row style={{marginBottom: mvs(20)}}>
            <Medium
              label={'Category: ' + product?.category?.name}
              color={colors.lightGray}
            />

            <Medium
              label={`Caliber: ` + product?.caliber}
              color={colors.lightGray}
            />
          </Row>
          <Regular
            label={product?.description ? product?.description : product?.body}
            numberOfLines={3}
          />
        </View>
        <View style={{backgroundColor: colors.white}}>
          <TouchableOpacity style={styles.police}>
            <Regular
              label={'See more LA Police Gear deals'}
              fontSize={mvs(12)}
            />
          </TouchableOpacity>
        </View>

        {/* <TopTabNavigator /> */}
        <Row style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => setTab('p')}
            style={tab == 'p' ? styles.active : styles.inactive}>
            <Regular label={'PRICES'} fontSize={mvs(11)} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab('c')}
            style={tab == 'c' ? styles.active : styles.inactive}>
            <Regular
              label={`COMMENTS (${comments?.length})`}
              fontSize={mvs(11)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTab('d')}
            style={tab == 'd' ? styles.active : styles.inactive}>
            <Regular label={'DISCOUNTS'} fontSize={mvs(11)} />
          </TouchableOpacity>
        </Row>
        {tab == 'p' ? (
          <Prices productId={product?.id} />
        ) : tab == 'c' ? (
          <Comments
            productId={product?.id}
            comments={comments}
            onCommentSend={val => onComment(val)}
          />
        ) : tab == 'd' ? (
          <ProductCoupons productId={product?.id} />
        ) : null}
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
