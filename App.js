import "react-native-gesture-handler"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/screens/Home";
import {SafeAreaProvider} from "react-native-safe-area-context";
import BookDetail from "./src/screens/BookDetail";
import {useState} from "react";
import Wishlist from "./src/screens/Wishlist";
import Settings from "./src/screens/Settings"
import {HomeIcon, SettingsIcon, WishlistIcon} from "./src/components/IconManager";
// import {createDrawerNavigator} from "@react-navigation/drawer";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
// const Drawer = createDrawerNavigator()

const theme = {
   colors: {
      ...DefaultTheme.colors,
      background: "white",
   },
};

export default function App() {

    return (
        <SafeAreaProvider>
            <NavigationContainer theme={theme}>
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

const TabNavigator = ({navigation}) =>{
   return(
      <Tab.Navigator
         initialRouteName="Home"
         screenOptions={{

         tabBarShowLabel: false,
            tabBarActiveTintColor: "black",
            tabBarActiveBackgroundColor: "#f2f2f2",
            tabBarStyle:{ //Add this
               backgroundColor: "white",
               borderRadius : 24,
               paddingVertical: 6,
               paddingHorizontal: 8,
               shadowOpacity: .25,
               shadowColor: "gray",
               shadowRadius: 16,
               borderWidth: 2,
               borderColor: "lightgray"
            },

            tabBarItemStyle:{
               borderRadius: 16,
               paddingVertical: 2
            }
      }}>
         <Tab.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false, tabBarIcon: () => (<WishlistIcon navigation={navigation}/>)}}/>
         <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ color }) => <HomeIcon color={color} navigation={navigation}/>}}/>

         <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: () => (<SettingsIcon navigation={navigation}/>)}}/>
      </Tab.Navigator>
   )
}

// const DrawerNavigator = ({navigation}) =>{
//    return(
//       <Drawer.Navigator
//          screenOptions={{
//          // tabBarShowLabel: false,
//             tabBarActiveTintColor: "black",
//             tabBarActiveBackgroundColor: "#f6f6f6",
//       }}>
//          <Drawer.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: ({ color }) => <HomeIcon color={color} navigation={navigation}/>}}/>
//          <Drawer.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false, tabBarIcon: () => (<WishlistIcon navigation={navigation}/>)}}/>
//          <Drawer.Screen name="Settings" component={Settings} options={{ headerShown: false, tabBarIcon: () => (<SettingsIcon navigation={navigation}/>)}}/>
//       </Drawer.Navigator>
//    )
// }