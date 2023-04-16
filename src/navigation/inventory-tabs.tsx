import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../config/colors";
import { mvs } from "../config/metrices";
import Deals from "../screens/inventory-details/deals";
import Inventory from "../screens/inventory-details/inventory";
import MyTabBar from "./my-tab";
const Tab = createMaterialTopTabNavigator();

const InventoryTabNavigator = (props: any) => {

    return (
        <View style={{height:mvs(400)}}>
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
                    component={Inventory}
                    options={{
                        // title: stateData?.Morning?.timing,
                        tabBarLabel: "LIVE INVENTORY",
                    }}
                />
                <Tab.Screen
                    name="Afternoon"
                    component={Deals}
                    options={{
                        // title: stateData?.Afternoon?.timing,
                        tabBarLabel: "DEALS",
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
export default InventoryTabNavigator;
