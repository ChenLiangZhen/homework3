import {ActivityIndicator, Image, Pressable, TextInput, View} from "react-native";
import {HStack, VStack} from "./BaseLayout";
import {VarText} from "./TextLayout";
import React, {useState} from "react";
import {RatingStarBar} from "./GadgetManager";
import {DrawerIcon, LeftArrowIcon, SearchIcon} from "./IconManager";

export function BookItem (props){

	const [isLoading, setIsLoading] = useState(true)

	return(
		<Pressable style={{
			height: 340,
			width: 144,
			// padding: 12,
			marginLeft: 22,
			marginRight: props.isLast? 22: 0,
			// borderWidth: 1,
			// borderColor: "#ddd",
			// shadowOpacity: .5,
			// shadowRadius: 4,
			// shadowOffset: {width:0, height: 2},
		}}
			onPress={()=>{
				props.navigation.navigate("BookDetail", {
					props: props
				})
			}}
		>

			<HStack shadowOpacity={.7}  shadowRadius={6} shadowColor= "gray" shadowOffset={{ height: 1}} paddingTop={10}>
				{isLoading? <ActivityIndicator style={{ position: "relative", left: 71}} size="small" color="gray"/> : <></>}
				<Image style={{ width: 142, height: 216, borderRadius: 10, }} source={{ uri: props.image }}
						onLoadEnd={()=>{setIsLoading(false)}}
				/>

			</HStack>

			<VStack paddingHorizontal={2} marginTop={4}>
				<VarText type="sm" fontWeight="bold" marginTop={8}>{props.title}</VarText>
				<VarText type="mc" color="gray" marginTop={4}>{props.author}</VarText>
				<RatingStarBar rating={props.rating}/>
			</VStack>

		</Pressable>
	)
}

export function BestsellerItem (props){
	const [isLoading, setIsLoading] = useState(true)

	return(
		<Pressable style={{
			height: 108,
			width: "auto",
			marginLeft: 22,
			marginRight: props.isLast? 22 : 0,
			flexDirection: "column",
		}}
			onPress={()=>{
				props.navigation.navigate("BookDetail", {
					props: props
				})
			}}
		>

			<HStack>

				<HStack marginRight={12} shadowOpacity={.7}  shadowRadius={6} shadowColor= "gray" shadowOffset={{ height: 1}} paddingTop={10}>
					{isLoading? <ActivityIndicator style={{ position: "relative", left: 71}} size="small" color="gray"/> : <></>}
					<Image style={{ width: 60, height: 90, borderRadius: 10, }} source={{ uri: props.image }}
					       onLoadEnd={()=>{setIsLoading(false)}}/>
				</HStack>

				<VStack borderRadius={12} paddingHorizontal={8} marginTop={4} width={270} height={100} backgroundColor="#e9e9e9">

					<HStack marginTop={4} height={32} alignItems="center">
						<HStack marginRight={8} borderRadius={4} backgroundColor="black" height={24} width={32} justifyContent="center" alignItems="center">
							<VarText type="md" fontWeight="bold" color="white">{"#" + props.ranking}</VarText>
						</HStack>
						<VarText type="sm" fontWeight="bold">{props.title}</VarText>
					</HStack>

					<VarText type="mc" color="gray" marginTop={4}>{props.author}</VarText>
					<RatingStarBar rating={props.rating}/>

				</VStack>

			</HStack>
		</Pressable>
	)
}

export function SearchItem (props){
	// const [isLoading, setIsLoading] = useState(true)

	return(
		<Pressable style={{
			height: 108,
			width: "auto",
			marginLeft: 22,
			marginRight: props.isLast? 22 : 0,
			flexDirection: "column",
		}}
		           onPress={()=>{
			           props.navigation.navigate("BookDetail", {
				           props: props
			           })
		           }}
		>

			<HStack width={200} height={64} justifyContent="flex-start" alignItems="center">

			</HStack>
		</Pressable>
	)
}



export function SearchBar(){
	const [text, setText] = useState("")
	const [showSearchSuggestion, setShowSearchSuggestion] = useState(false)
	return(
		<VStack>
			<HStack width="100%" height={48} justifyContent="space-between" alignItems="center" paddingHorizontal={12} marginBottom={24}
			        backgroundColor="#f2f2f2" shadowOpacity={.3} shadowOffset={{height: 8}} shadowRadius={6} shadowColor="lightgray">
				<DrawerIcon/>
				<TextInput onFocus={()=>{
					setShowSearchSuggestion("dsvbshjfl")
				}}
				           style={{ backgroundColor: "#dedede", height: 32, width: "70%", borderRadius: 16, paddingHorizontal: 12, letterSpacing: 0.5 }} onChangeText={(text)=>setText(prev => text) } value={text}/>
				<SearchIcon/>
			</HStack>

			<VStack>

			</VStack>

		</VStack>

	)
}

export function TopNav(props){
	return(
		<HStack width="100%" height={48} justifyContent="space-between" alignItems="center" paddingHorizontal={12} marginBottom={0}>
		{/*backgroundColor="#f2f2f2" shadowOpacity={.3} shadowOffset={{height: 8}} shadowRadius={6} shadowColor="lightgray">*/}
			<LeftArrowIcon onPress={props.onPress}/>
			{/*<VarText type="md">Detail</VarText>*/}
			{/*<View onPress={props.onPress}/>*/}
		</HStack>
	)
}