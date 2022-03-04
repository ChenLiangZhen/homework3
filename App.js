import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/screens/Home";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<NavigationContainer>
					<Content/>
				</NavigationContainer>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

export const Content = () => {
	return(
			<Stack.Navigator>
				<Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
			</Stack.Navigator>
	)
}