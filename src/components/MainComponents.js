import {ActivityIndicator, Image, TextInput, View} from "react-native";
import {HStack, VStack} from "./BaseLayout";
import {VarText} from "./TextLayout";
import React, {useState} from "react";
import {RatingStarBar} from "./GadgetManager";
import {DrawerIcon, SearchIcon} from "./IconManager";

export function BookItem ({ title, image, author, rating, isLast }){

	const [isLoading, setIsLoading] = useState(true)

	return(
		<View style={{
			height: 328,
			width: 144,
			// padding: 12,
			marginLeft: 22,
			marginRight: isLast? 22: 0,
			// borderWidth: 1,
			// borderColor: "#ddd",
			// shadowOpacity: .5,
			// shadowRadius: 4,
			// shadowOffset: {width:0, height: 2},
		}}>
			<HStack shadowOpacity={.7}  shadowRadius={6} shadowColor= "gray" shadowOffset={{ height: 1}}>
				{isLoading? <ActivityIndicator style={{ position: "relative", left: "25%"}} size="small" color="gray"/> : <></>}
				<Image style={{ width: 142, height: 216, borderRadius: 10, }} source={{ uri: image }}
						onLoadEnd={()=>{setIsLoading(false)}}
				/>

			</HStack>

			<VStack paddingHorizontal={2} marginTop={4}>
				<VarText type="sm" fontWeight="bold" marginTop={8}>{title}</VarText>
				<VarText type="mc" color="gray" marginTop={4}>{author}</VarText>
				<RatingStarBar rating={rating}/>
			</VStack>

		</View>
	)
}

export function SearchBar(){
	const [text, setText] = useState("")
	return(
		<HStack height={42} justifyContent="space-between" alignItems="center" paddingHorizontal={12} marginBottom={8}
		backgroundColor="#f2f2f2" shadowOpacity={.3} shadowOffset={{height: 8}} shadowRadius={6} shadowColor="lightgray">
			<DrawerIcon/>
			<TextInput style={{ backgroundColor: "#dedede", height: 28, width: "70%", borderRadius: 16 }} onTextInput={()=>{ setText(text) }} value={text}/>
			<SearchIcon/>
		</HStack>
	)
}