// In App.js in a new project
import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../config/colors';
import Login from '../screens/login';
import ProductDetails from '../screens/product-details';
import InventoryDetails from '../screens/inventory-details/inventory-details';
import Signup from '../screens/signup';
import Splash from '../screens/splash';
import RootStackParamList from '../types/navigation-types/root-stack';
import { horizontalAnimation } from '../utils';
import DrawerNavigation from './drawer-navigation';
import WatchList from '../screens/watchlist';
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
        initialRouteName="Splash"
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="InventoryDetails" component={InventoryDetails} />
        <Stack.Screen name="WatchList" component={WatchList} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, },
});
