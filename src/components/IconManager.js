import {
	AntDesign,
	Feather,
	FontAwesome,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons
} from "@expo/vector-icons";
import {Pressable} from "react-native";
import {useRoute} from "@react-navigation/native-stack"
import {useContext} from "react";
import {StateContext} from "../managers/State/GlobalStateManager";
import {ACTIONS} from "../managers/State/ActionLibrary";

export function RightArrowIcon({onPress, size}){
	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: "center",
			alignItems: "center",
		}}>
			<MaterialIcons name="arrow-forward-ios" size={size} color="black"/>

		</Pressable>
	)
}

export function LeftArrowIcon({onPress}){
	return(
		<Pressable style={{
			height: 40,
			width: 40,
			justifyContent: "center",
			alignItems: "center",
		}} onPress={onPress}>
			<MaterialIcons name="arrow-back-ios" size={22} color="black"/>

		</Pressable>
	)
}

export function BookmarkIconOutline({onPress, size, color}){
	const [state, dispatch] = useContext(StateContext)

	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: "center",
			alignItems: "center",
		}} onPress={onPress}>
			<FontAwesome name="bookmark-o" size={size} color={color}/>

		</Pressable>
	)
}

export function BookmarkIconFill({onPress, size, color}){
	const [state, dispatch] = useContext(StateContext)

	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: "center",
			alignItems: "center",
		}} onPress={onPress}>
			<FontAwesome name="bookmark" size={size} color={color}/>

		</Pressable>
	)
}

export function RatingStar({isColored}){
	return(
		<Pressable style={{
			height: 16,
			width: 18,
			justifyContent: 'center',
			alignItems: "center",

		}}>
			<FontAwesome name="star" size={14} color={isColored? "#FFBE15" : "lightgray"}/>
		</Pressable>
	)
}

export function UserIcon({size, color}){
	return(
		<Pressable style={{
			height: size + 8,
			width: size + 8,
			justifyContent: 'center',
			alignItems: "center",
			shadowColor: "lightgray",
			shadowOpacity: .8,
			shadowOffset: { height: 1}

		}}>
			<Ionicons name="person-circle-outline" size={size} color={color}/>
		</Pressable>
	)
}

export function SearchIcon(){
	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: 'center',
			alignItems: "center",
			shadowColor: "lightgray",
			shadowOpacity: .8,
			shadowOffset: { height: 1}

		}}>
			<Feather name="search" size={24} color="black"/>
		</Pressable>
	)
}

export function HomeIcon({navigation}){

	// let route = useRoute()

	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: 'center',
			alignItems: "center",
			shadowColor: "lightgray",
			shadowOpacity: .8,
			shadowOffset: { height: 1}

		}} onPress={()=>{
			navigation.navigate("Home")
		}}>
			<AntDesign name="home" size={24} color="black"/>
		</Pressable>
	)
}

export function WishlistIcon({navigation}){


	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: 'center',
			alignItems: "center",
			shadowColor: "lightgray",
			shadowOpacity: .8,
			shadowOffset: { height: 1}

		}}onPress={()=>{
			navigation.navigate("Wishlist")
		}}>
			<AntDesign name="book" size={24} color="black"/>
		</Pressable>
	)
}

export function SettingsIcon({navigation, onPress}){
	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: 'center',
			alignItems: "center",
			shadowColor: "lightgray",
			shadowOpacity: .8,
			shadowOffset: { height: 1}

		}} onPress={()=>{
			navigation.navigate("Settings")
		}}>
			<AntDesign name="setting" size={24} color="black"/>
		</Pressable>
	)
}

export function SortIcon({navigation, onPress}){
	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: 'center',
			alignItems: "center",
			shadowColor: "lightgray",
			shadowOpacity: .8,
			shadowOffset: { height: 1}

		}}onPress={onPress
		}>
			<MaterialCommunityIcons name="sort-variant" size={28} color="black"/>
		</Pressable>
	)
}
