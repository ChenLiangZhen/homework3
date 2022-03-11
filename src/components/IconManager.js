import {Feather, FontAwesome, MaterialIcons, Octicons} from "@expo/vector-icons";
import {Pressable} from "react-native";

export function RightArrowIcon({onPress}){
	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: "center",
			alignItems: "center",
		}}>
			<MaterialIcons name="arrow-forward-ios" size={22} color="black"/>

		</Pressable>
	)
}

export function LeftArrowIcon({onPress}){
	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: "center",
			alignItems: "center",
		}} onPress={onPress}>
			<MaterialIcons name="arrow-back-ios" size={22} color="black"/>

		</Pressable>
	)
}

export function BookmarkIconOutline({onPress}){
	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: "center",
			alignItems: "center",
		}} onPress={onPress}>
			<FontAwesome name="bookmark-o" size={22} color="black"/>

		</Pressable>
	)
}

export function BookmarkIconFill({onPress}){
	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: "center",
			alignItems: "center",
		}} onPress={onPress}>
			<FontAwesome name="bookmark" size={22} color="black"/>

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
			shadowColor: "lightgray",
			shadowOpacity: .8,
			shadowOffset: { height: 1}

		}}>
			<FontAwesome name="star" size={14} color={isColored? "#FFBE15" : "lightgray"}/>
		</Pressable>
	)
}

export function DrawerIcon(){
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
			<Feather name="menu" size={24} color="black"/>
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
