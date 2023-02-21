import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { width } from '../config/metrices';
import Home from '../screens/home';
import CustomDrawerContent from './drawer-navigation/drawer-content';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
                backgroundColor: '#c6cbef',
                width: width - 40,
            },
            headerShown: false
        }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigation;

