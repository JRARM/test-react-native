import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import ShopScreen from "./screens/ShopScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import AccountScreen from "./screens/AccountScreen";

//icons

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator

            initialRouteName='Shop'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'orange',

            }}

        >
            <Tab.Screen
                name="Shop"component={ShopScreen} options={{
                    
                }}
            />
            <Tab.Screen name="ShoppingCart" component={ShoppingCartScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}