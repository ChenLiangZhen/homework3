import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/screens/Home";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BookDetail from "./src/screens/BookDetail";
import {useState} from "react";
import Wishlist from "./src/screens/Wishlist";
import Settings from "./src/screens/Settings"
import {HomeIcon, SettingsIcon, WishlistIcon} from "./src/components/IconManager";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Content/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export const Content = () => {

   const [tab, setTab] = useState(true)

   return (
       <>
          <Stack.Navigator initialRouteName="Home">
             <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
             <Stack.Screen name="BookDetail" component={BookDetail} options={{headerShown: false}}/>
          </Stack.Navigator>
       </>
    )
}

const TabNavigator = () =>{
   return(
      <Tab.Navigator
         screenOptions={{
         tabBarShowLabel: false,

      }}>
         <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: () => (<HomeIcon/>)}}/>
         <Tab.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false, tabBarIcon: () => (<WishlistIcon/>)}}/>
         <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: () => (<SettingsIcon/>)}}/>
      </Tab.Navigator>
   )
}