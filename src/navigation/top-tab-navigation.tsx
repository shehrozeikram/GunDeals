import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../config/colors";
import { mvs } from "../config/metrices";
import Comments from "../screens/comments-screen";
import Prices from "../screens/prices-screen";
import ProductCoupons from "../screens/product-coupons/product-coupons";
import MyTabBar from "./my-tab";
const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = (props: any) => {

    return (
        <View style={{ height: 600, paddingBottom: mvs(80), backgroundColor: 'red' }}>
            <Tab.Navigator
                tabBar={(props: any) => <MyTabBar {...props} />}
                screenOptions={{
                    // tabBarScrollEnabled: true,
                    tabBarActiveTintColor: colors.black,
                    tabBarStyle: { backgroundColor: colors.white, marginTop: mvs(14) },
                    tabBarIndicatorStyle: {
                        backgroundColor: colors.primary,
                    },
                }}>
                <Tab.Screen
                    name="Morning"
                    component={Prices}
                    options={{
                        // title: stateData?.Morning?.timing,
                        tabBarLabel: "PRICES",
                    }}
                />
                <Tab.Screen
                    name="Afternoon"
                    component={Comments}
                    options={{
                        // title: stateData?.Afternoon?.timing,
                        tabBarLabel: "COMMENTS (3)",
                    }}
                />
                <Tab.Screen
                    name="Evening"
                    component={ProductCoupons}
                    options={{
                        // title: stateData?.Evening?.timing,
                        tabBarLabel: "DISCOUNTS (5)",
                        tabBarStyle: { backgroundColor: "powderblue" },
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};
const styles = StyleSheet.create({
    tabOption: {
        width: mvs(110),
        height: mvs(50),
    },
    lableStyle: {
        color: colors.black,
        fontSize: 17,
    },
});
export default TopTabNavigator;
