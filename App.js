import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/screens/Home";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import BookDetail from "./src/screens/BookDetail";
import {useState} from "react";

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
      <Tab.Navigator>
         <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
         <Tab.Screen name="Wishlista" component={Wishlist} options={{headerShown: false}}/>
      </Tab.Navigator>
   )
}