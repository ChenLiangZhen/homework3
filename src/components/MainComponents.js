import {ActivityIndicator, Image, LogBox, Pressable, TextInput, View, YellowBox} from "react-native";
import {HStack, VStack} from "./BaseLayout";
import {VarText} from "./TextLayout";
import React, {useContext, useEffect, useState} from "react";
import {RatingStarBar} from "./GadgetManager";
import {
	BookmarkIconFill,
	BookmarkIconOutline,
	DrawerIcon,
	HomeIcon,
	LeftArrowIcon,
	SearchIcon,
	UserIcon
} from "./IconManager";
import { Dimensions } from 'react-native';
import {StateContext} from "../managers/State/GlobalStateManager";
import {ACTIONS} from "../managers/State/ActionLibrary";
import {asyncSaveAllBooks} from "../managers/AsyncManager";

LogBox.ignoreLogs(["Non-serializable values"])

const VW = Dimensions.get('window').width;
const VH = Dimensions.get('window').height;

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

			<HStack shadowOpacity={.5}  shadowRadius={6} shadowColor= "gray" shadowOffset={{ height: 1}} paddingTop={10}>
				{isLoading? <ActivityIndicator style={{ position: "relative", left: 60}} size="small" color="gray"/> : <></>}
				<Image style={{ width: 142, height: 216, borderRadius: 10, }} source={{ uri: props.image }}
						onLoadEnd={()=>{setIsLoading(false)}}
				/>
			</HStack>

			<VStack paddingHorizontal={2} marginTop={4}>
				<VarText type="sm" fontWeight="bold" marginTop={8} color="#333">{props.title}</VarText>
				<VarText type="mc" color="gray" marginTop={4}>{props.author}</VarText>
				<RatingStarBar rating={props.rating}/>
			</VStack>

		</Pressable>
	)
}

export function BestsellerItem (props){

	const [isLoading, setIsLoading] = useState(true)
	const [state, dispatch] = useContext(StateContext)

	const [wishlistState, setWishlistState] = useState(false)

	useEffect(()=>{
		setWishlistState(props.wishlisted)
	})

	return(
		<Pressable style={{
			height: "auto",
			width: VW - 44,
			borderRadius: 12,
			marginLeft: 22,
			marginBottom: 12,
			flexDirection: "column",
			backgroundColor: "#f6f6f6",
			paddingVertical: 0,
			borderWidth: 1,
			borderColor: "#ccc"
		}}
			onPress={()=>{
				props.navigation.navigate("BookDetail", {
					props: props
				})
			}}
		>
			<HStack>
				<HStack marginRight={8} shadowOpacity={.75}  shadowRadius={3} shadowColor= "gray" shadowOffset={{ height: 1}}>
					{isLoading? <ActivityIndicator style={{ position: "relative", left: 30}} size="small" color="gray"/> : <></>}
					<Image style={{ width: 60, height: 90, borderRadius: 10, }} source={{ uri: props.image }}
					       onLoadEnd={()=>{setIsLoading(false)}}/>
				</HStack>

				<VStack borderRadius={12} paddingHorizontal={8} marginTop={4} width={300} backgroundColor="#f6f6f6">

					<HStack marginTop={4} height={24} alignItems="center">
						<HStack marginRight={8} borderRadius={4} backgroundColor="#444" height={24} width={32} justifyContent="center" alignItems="center">
							<VarText type="md" fontWeight="bold" color="white">{"#" + props.ranking}</VarText>
						</HStack>
						<VarText type="sm" fontWeight="bold" color="#333">{props.title}</VarText>
					</HStack>

					<HStack justifyContent="space-between" alignItems="center" marginTop={2} width="100%">

						<VStack>
							<VarText type="nano" color="gray" marginTop={4} >{props.author}</VarText>
							<RatingStarBar rating={props.rating} />
						</VStack>

						<HStack marginTop={20} >
							{wishlistState?
								<BookmarkIconFill size={26} color="#888" onPress={()=>{
									let updatedBookData = state.currentBookData.map(book => {
										if(book.title === props.title){
											setWishlistState(false)
											return {...book, wishlisted: false}
										}
										return book
									})
									asyncSaveAllBooks(updatedBookData)
									dispatch({type: ACTIONS.UPDATE_CURRENT_BOOK_DATA, payload: updatedBookData})
									console.log("[BookDetail.js] wishlist updated. BookData: " + JSON.stringify(updatedBookData))
								}
							}/>:
								<BookmarkIconOutline size={26} color="#888" onPress={()=>{
									let updatedBookData = state.currentBookData.map(book => {
										if(book.title === props.title){
											setWishlistState(true)
											return {...book, wishlisted: true}
										}
										return book
									})
									asyncSaveAllBooks(updatedBookData)
									dispatch({type: ACTIONS.UPDATE_CURRENT_BOOK_DATA, payload: updatedBookData})
									console.log("[BookDetail.js] wishlist updated. BookData: " + JSON.stringify(updatedBookData))
								}
								}/> }

						</HStack>

					</HStack>

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



export function SearchBar({placeholder}){
	const [text, setText] = useState("")
	const [showSearchSuggestion, setShowSearchSuggestion] = useState(false)
	return(
		<VStack>
			<HStack width="100%" height={48} justifyContent="space-between" alignItems="center" paddingHorizontal={12} paddingBottom={4} marginBottom={0}
			        backgroundColor="#ffffff" shadowOpacity={.2} shadowOffset={{height: 8}} shadowRadius={6} shadowColor="lightgray">
				<UserIcon size={30}/>
				<TextInput onFocus={()=>{
					setShowSearchSuggestion("dsvbshjfl")
				}}
				           placeholder={placeholder}
				           selectionColor="gray"
				           style={{ backgroundColor: "#f2f2f2", height: 32, width: "70%", borderRadius: 16, paddingHorizontal: 12, letterSpacing: 0.5 }} onChangeText={(text)=>setText(prev => text) } value={text}/>
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

export function SettingItem({position, children, ...props}){

	let styleObject = {}

	switch(position){
		case "top":
			styleObject= {
				borderTopColor: "#ddd",
				borderTopRightRadius:16,
				borderTopLeftRadius:16,
				borderBottomWidth: 0}
			break;
		case "middle":
			styleObject= { borderBottomWidth: 0}
			break;

		case "bottom":
			styleObject= { borderBottomRightRadius:16,
				borderBottomLeftRadius:16,
				borderBottomColor: "#ddd",
			marginBottom: 16}
			break;

	}



	return(
		<Pressable style={[{
			height: 50,
			width:"auto" ,
			marginHorizontal:16,
			padding:12,
			paddingHorizontal: 16,
			backgroundColor:"#f6f6f6",
			flexDirection: "row",
			borderWidth: 1,
			borderColor: "#bbb",
			borderLeftColor: "#ddd",
			borderRightColor: "#ddd",
			justifyContent: "space-between",
			alignItems: "center"
		}, styleObject, {...props}]}>
			{children}
		</Pressable>
	)
}