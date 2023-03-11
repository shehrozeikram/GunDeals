import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomBackHeader from "../components/atoms/headers/custom-back-header";
import { colors } from "../config/colors";
import { mvs } from "../config/metrices";
import Comments from "../screens/comments-screen";
import Discounts from "../screens/discount-screen";
import Prices from "../screens/prices-screen";
import MyTabBar from "./my-tab";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = (props: any) => {

    return (
        <View style={{ flex: 1 }}>
            <CustomBackHeader />
            <Tab.Navigator
                tabBar={(props: any) => <MyTabBar {...props} />}
                screenOptions={{
                    tabBarActiveTintColor: colors.black,
                    tabBarStyle: { backgroundColor: colors.white, marginTop: mvs(14) },
                    tabBarIndicatorStyle: {
                        backgroundColor: colors.primary,
                    },
                }}
            >
                <Tab.Screen
                    name="Morning"
                    component={Prices}
                    options={{
                        // title: stateData?.Morning?.timing,
                        tabBarLabel: "Morning",
                    }}
                />
                <Tab.Screen
                    name="Afternoon"
                    component={Comments}
                    options={{
                        // title: stateData?.Afternoon?.timing,
                        tabBarLabel: "Afternoon",
                    }}
                />
                <Tab.Screen
                    name="Evening"
                    component={Discounts}
                    options={{
                        // title: stateData?.Evening?.timing,
                        tabBarLabel: "Evening",
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
