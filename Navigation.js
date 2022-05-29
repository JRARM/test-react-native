import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import ShopScreen from "./screens/ShopScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import AccountScreen from "./screens/AccountScreen";

//icons
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIconStyle: {},
                tabBarStyle: {},
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Shop') {
                        iconName = 'shopping-bag';
                    } else if (route.name === 'ShoppingCart') {
                        iconName = 'shopping-cart';
                    }
                    else if (route.name === 'Account') {
                        iconName = 'user';
                    }

                    // You can return any component that you like here!
                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}

        >
            <Tab.Screen name="Shop" component={ShopScreen} />
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