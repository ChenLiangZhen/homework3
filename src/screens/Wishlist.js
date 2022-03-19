import {BaseTabContainer, HStack} from "../components/BaseLayout";
import {BestsellerItem, SearchBar} from "../components/MainComponents";
import * as SecureStore from "expo-secure-store";
import React, {useEffect, useState} from "react";
import {VarText} from "../components/TextLayout";
import {Alert, Button, FlatList, View} from "react-native";
import * as DATA from "../res/data.json";
import {RightArrowIcon, SortIcon} from "../components/IconManager";
import AsyncStorage from "@react-native-async-storage/async-storage"

async function getAllBooks(){
	let result = await AsyncStorage.getItem("all-books");
	if (result) {
		return(result)
	} else {
		console.log("Data Failed")
	}
}

async function filterWishlist(list){
	let listObj = JSON.parse(list)
	let wishlisedArray = listObj.filter(function(item){ return item.wishlised === true})
	console.log("filtered")
	console.log(JSON.stringify(wishlisedArray))
	return wishlisedArray
}


const WishlistData = {
	item:[
		{
			title: "Javan",
			description: "Best selling book of the year."
		},
		{
			title: "Java",
			description: "A well-known programming language."
		}
	]
}

const Wishlist = ({navigation}) =>{

	const renderItemBestseller = ({item}) => (
		<BestsellerItem title={item.title} image={item.image} author={item.author}
		                rating={item.rating} isLast={item.isLast} ranking={item.ranking}
		                wishlised={item.wishlised}
		                navigation={navigation}/>
	);

	const [isInitialzied, setInitialzied] = useState(false)
	const [wishlistArray, setWishlistArray] = useState({})

	useEffect(()=> {

		getAllBooks()
			.then((res) => {
				Alert.alert(res)
				filterWishlist(res)
					.then((res) => {

						setWishlistArray(res)
					})
					.catch((rej) => {
						console.log(rej.message)
					})
				setInitialzied(true)

			}).catch((rej) => {
			console.log(rej.message)
		})
	},[])

	return(


		<BaseTabContainer>
			<SearchBar placeholder="Search in wishlist..."/>
			<HStack marginTop={16} paddingBottom={12} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
				<VarText type="xl">Wishlist</VarText>
				<SortIcon onPress={()=>{
					getAllBooks()
						.then((res) => {
							Alert.alert(res)
							filterWishlist(res)
								.then((res) => {

									setWishlistArray(res)
								})
								.catch((rej) => {
									console.log(rej.message)
								})
							setInitialzied(true)

						}).catch((rej) => {
						console.log(rej.message)
					})
				}}/>

			</HStack>
			{isInitialzied?
			<FlatList
				ListHeaderComponent={<>

				</>}
				showsVerticalScrollIndicator={false}
				data={wishlistArray}
				renderItem={renderItemBestseller}
				keyExtractor={item => item.id}
			/> : <></> }

		</BaseTabContainer>
	)
}

export default Wishlist