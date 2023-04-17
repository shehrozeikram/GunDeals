import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as SVGS from '../../assets/icons';
import {
  CouponIcon,
  DateIcon,
  DateStar,
  HomeIcon,
  RightArrow,
  StarIcon,
} from '../../assets/icons';
import {drawer_top_bg} from '../../assets/images';
import {SecondayButton} from '../../components/atoms/buttons';
import {SearchInput} from '../../components/atoms/inputs';
import {Row} from '../../components/atoms/row';
import {TouchableRow} from '../../components/atoms/touchable-row';
import DrawerProduct from '../../components/product/drawer-product';
import {colors} from '../../config/colors';
import {CATEGORIES} from '../../config/constants';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import axios from 'axios';
import {BASE_URL} from '../../API/urls';
const CustomDrawerContent = props => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const onSearch = async val => {
    setSearch(val);
    var res = await axios.get(BASE_URL + 'products/search_products?q=' + val);
    console.log('API SEARCH RESPONSE ===> ', res?.data?.search_products);
    setProducts(res?.data?.search_products);
  };
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    //setLoading(true);
    axios
      .get(BASE_URL + 'products/fetch_categories')
      .then(response => {
        setCategories(response?.data?.categories);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: search?.length < 1 ? colors.white : '#F5F6F8',
      }}>
      <ImageBackground
        source={drawer_top_bg}
        style={{
          height: search?.length < 1 ? mvs(220) : mvs(100),
          width: '100%',
          paddingVertical: mvs(17),
        }}>
        <View style={{paddingHorizontal: mvs(20)}}>
          <SearchInput
            value={search}
            onChangeText={val => onSearch(val)}
            onCrossClick={() => setSearch('')}
          />
        </View>
        {search?.length < 1 && (
          <View>
            <Row style={styles.mainRow}>
              <TouchableRow
                style={styles.row}
                onPress={() =>
                  props?.navigation?.navigate('Home', {type: 'Home'})
                }>
                <HomeIcon />
                <Medium label={'Home'} style={styles.label} />
              </TouchableRow>
              <TouchableRow
                style={styles.row}
                onPress={() =>
                  props?.navigation?.navigate('Home', {type: 'Popular'})
                }>
                <StarIcon />
                <Medium label={'Popular'} style={styles.label} />
              </TouchableRow>
            </Row>
            <LinearGradient
              colors={['#9EA2A800', '#9EA2A8', '#9EA2A800']}
              style={styles.linearGradient}
            />
            <Row style={styles.mainRow}>
              <TouchableRow
                style={styles.row}
                onPress={() =>
                  props?.navigation?.navigate('Home', {type: 'Today'})
                }>
                <DateIcon />
                <Medium label={'Today'} style={styles.label} />
              </TouchableRow>
              <TouchableRow
                style={styles.row}
                onPress={() => props?.navigation?.navigate('Discounts')}>
                <CouponIcon />
                <Medium label={'Coupon'} style={styles.label} />
              </TouchableRow>
            </Row>
            <LinearGradient
              colors={['#9EA2A800', '#9EA2A8', '#9EA2A800']}
              style={styles.linearGradientv}
            />
          </View>
        )}
      </ImageBackground>
      {search?.length < 1 && (
        <View
          style={{backgroundColor: colors.primary, paddingHorizontal: mvs(25)}}>
          <TouchableRow
            onPress={() =>
              props?.navigation?.navigate('Home', {type: 'Top this week'})
            }
            style={{alignItems: 'center', paddingVertical: mvs(15)}}>
            <Row style={{justifyContent: 'flex-start'}}>
              <DateStar />
              <Medium
                label={'Top this week'}
                style={{marginHorizontal: mvs(15), color: colors.white}}
              />
            </Row>
            <RightArrow />
          </TouchableRow>
        </View>
      )}
      {search?.length < 1 && (
        <ScrollView
          contentContainerStyle={{flexGrow: 1, paddingHorizontal: mvs(20)}}>
          <Row style={{alignItems: 'center', marginTop: mvs(25)}}>
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: colors.lightGray,
                flex: 1,
              }}
            />
            <Regular
              label={'categories'}
              style={{textTransform: 'uppercase', marginHorizontal: mvs(10)}}
            />
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: colors.lightGray,
                flex: 1,
              }}
            />
          </Row>
          {categories.map(x => {
            const Icon = SVGS[x?.icon];
            return (
              <TouchableRow
                style={{marginTop: mvs(20)}}
                onPress={() =>
                  props?.navigation?.navigate('Home', {
                    type: x?.name + '',
                    categoryId: x?.id,
                  })
                }>
                <Bold
                  label={x?.name + ''}
                  style={{textTransform: 'uppercase'}}
                />
                {Icon && <Icon height={mvs(20)} width={mvs(20)} />}
              </TouchableRow>
            );
          })}
          <Row style={{alignItems: 'center', marginTop: mvs(25)}}>
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: colors.lightGray,
                flex: 1,
              }}
            />
            <Regular
              label={'Quick Links'}
              style={{textTransform: 'uppercase', marginHorizontal: mvs(10)}}
            />
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                backgroundColor: colors.lightGray,
                flex: 1,
              }}
            />
          </Row>
          <Row style={{marginTop: mvs(20)}}>
            <SecondayButton
              onPress={() =>
                props?.navigation?.navigate('Home', {
                  type: 'AK Deals',
                  quick: 'ak',
                })
              }
              title={'AK Deals'}
              containerStyle={{backgroundColor: colors.aqua}}
            />
            <SecondayButton
              onPress={() =>
                props?.navigation?.navigate('Home', {
                  type: 'AR Deals',
                  quick: 'ar',
                })
              }
              title={'AR Deals'}
              containerStyle={{backgroundColor: colors.aqua}}
            />
          </Row>
          <Row style={{marginTop: mvs(20)}}>
            <SecondayButton
              onPress={() =>
                props?.navigation?.navigate('Home', {
                  type: '1911',
                  quick: 'nine_mm_ammo',
                })
              }
              title={'1911'}
              containerStyle={{backgroundColor: colors.aqua}}
            />
            <SecondayButton
              onPress={() =>
                props?.navigation?.navigate('Home', {
                  type: 'C&R',
                  quick: 'c_and_r',
                })
              }
              title={'C&R'}
              containerStyle={{backgroundColor: colors.aqua}}
            />
          </Row>
          <Row style={{marginTop: mvs(20)}}>
            <SecondayButton
              onPress={() =>
                props?.navigation?.navigate('Home', {
                  type: 'Rimfire',
                  quick: 'rimfire',
                })
              }
              title={'Rimfire'}
              containerStyle={{backgroundColor: colors.aqua}}
            />
            <SecondayButton
              onPress={() =>
                props?.navigation?.navigate('Home', {
                  type: 'Revolver',
                  quick: 'revolver',
                })
              }
              title={'Revolver'}
              containerStyle={{backgroundColor: colors.aqua}}
            />
          </Row>
          <Row style={{marginTop: mvs(20)}}>
            <SecondayButton
              onPress={() =>
                props?.navigation?.navigate('Home', {
                  type: '22LR Ammo',
                  quick: 'twenty_two_lr_ammo',
                })
              }
              title={'22LR Ammo'}
              containerStyle={{backgroundColor: colors.aqua}}
            />
            <SecondayButton
              onPress={() =>
                props?.navigation?.navigate('Home', {
                  type: 'Used Guns',
                  quick: 'used',
                })
              }
              title={'Used Guns'}
              containerStyle={{backgroundColor: colors.aqua}}
            />
          </Row>
          <Row style={{marginTop: mvs(20)}}>
            <TouchableOpacity
              style={{
                flex: 1,
                padding: mvs(10),
                backgroundColor: colors.secondary,
              }}
              onPress={() => props?.navigation?.navigate('Login')}>
              <Row style={{alignItems: 'center'}}>
                <Medium label={'WATCHLIST'} size={mvs(14)} />
                <SVGS.Watchlist />
              </Row>
            </TouchableOpacity>
            <View
              style={{
                width: StyleSheet.hairlineWidth,
                height: '100%',
                backgroundColor: colors.lightGray,
              }}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                padding: mvs(10),
                backgroundColor: colors.secondary,
              }}
              onPress={() => props?.navigation?.navigate('Login')}>
              <Row style={{alignItems: 'center'}}>
                <Medium label={'LOGIN'} size={mvs(14)} />
                <SVGS.LoginIcon />
              </Row>
            </TouchableOpacity>
          </Row>
        </ScrollView>
      )}
      {search?.length >= 1 && (
        <>
          <Regular
            label={'SUGGESTED PRODUCTS'}
            style={{
              marginTop: mvs(10),
              marginHorizontal: mvs(10),
              marginBottom: mvs(10),
            }}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: mvs(40),
              paddingTop: mvs(15),
              paddingHorizontal: mvs(18),
            }}
            data={products}
            renderItem={({item}) => (
              <DrawerProduct
                item={item}
                onPress={() =>
                  props?.navigation?.navigate('InventoryDetails', {
                    id: item?.id,
                  })
                }
              />
            )}
          />
        </>
      )}
    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  row: {
    width: mvs(100),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    lineHeight: mvs(20),
    fontSize: mvs(16),
    color: colors.white,
    marginHorizontal: mvs(7),
  },
  linearGradient: {height: StyleSheet.hairlineWidth},
  linearGradientv: {
    width: StyleSheet.hairlineWidth,
    position: 'absolute',
    alignSelf: 'center',
    height: '100%',
  },
  mainRow: {
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(25),
  },
});
