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
        // <SafeAreaProvider>
            <NavigationContainer>
                <Content/>
            </NavigationContainer>
        // </SafeAreaProvider>

    );
}

export const Content = () => {

   const [tab, setTab] = useState(true)

   return (
       <>
          { tab ?
             <Tab.Navigator>
                <Tab.Screen name="home" component={Home} options={{headerShown: false}}/>
             </Tab.Navigator> :

             <Stack.Navigator>
                <Tab.Screen name="detail" component={BookDetail} options={{headerShown: false}}/>
             </Stack.Navigator>
          }
       </>
    )
}