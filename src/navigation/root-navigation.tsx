// In App.js in a new project
import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../config/colors';
import Login from '../screens/login';
import Signup from '../screens/signup';
import RootStackParamList from '../types/navigation-types/root-stack';
import { horizontalAnimation } from '../utils';
import DrawerNavigation from './drawer-navigation';
import ProductDetails from '../screens/product-details';
import Prices from '../screens/prices-screen';
import Discounts from '../screens/discount-screen';
import Comments from '../screens/comments-screen';
import TopTabNavigator from './top-tab-navigation';
const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.primary}
        barStyle={Platform?.OS === 'ios' ? 'default' : 'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="Splash" component={DrawerNavigation} />
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Group>
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Prices" component={Prices} />
        <Stack.Screen name="Discounts" component={Discounts} />
        <Stack.Screen name="Comments" component={Comments} />
        <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />

      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, },
});
