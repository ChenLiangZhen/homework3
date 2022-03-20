import {BaseTabContainer, HStack} from "../components/BaseLayout";
import {BestsellerItem, SearchBar} from "../components/MainComponents";
import * as SecureStore from "expo-secure-store";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {VarText} from "../components/TextLayout";
import {Alert, Button, FlatList, View} from "react-native";
import * as DATA from "../res/data.json";
import {RightArrowIcon, SortIcon} from "../components/IconManager";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {asyncGetAllBooks, asyncFilterWishlist, asyncSaveAllBooks} from "../managers/AsyncManager";
import {StateContext} from "../managers/State/GlobalStateManager";
import {ACTIONS} from "../managers/State/ActionLibrary";
import * as BookData from "../res/data.json";
import {useFocusEffect} from "@react-navigation/native";

const Wishlist = ({navigation}) =>{

	const renderItemBestseller = ({item}) => (
		<BestsellerItem title={item.title} image={item.image} author={item.author}
		                rating={item.rating} isLast={item.isLast} ranking={item.ranking}
		                wishlisted={item.wishlisted}
		                navigation={navigation}/>
	);

	const [isInitialzied, setInitialzied] = useState(false)
	const [wishlistArray, setWishlistArray] = useState({})
	const [state, dispatch] = useContext(StateContext)

	useFocusEffect(
		useCallback(() => {
			setWishlistArray(state.currentBookData.filter(function(item){ return item.wishlisted === true}))
		}, [state])
	);

	return(


		<BaseTabContainer>
			<SearchBar placeholder="在願望清單中搜尋..."/>
			<HStack marginTop={16} paddingBottom={18} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
				<VarText type="xl" letterSpacing={1.25}>願望清單</VarText>
				<SortIcon onPress={()=>{
					dispatch({type: ACTIONS.UPDATE_TEST_DATA, payload: 123})
					console.log(navigation.isFocused())
				}}/>
			</HStack>

			{wishlistArray.length < 1?
				<VarText type="sm" marginHorizontal={16} color="darkgray" fontWeight="bold" lineHeight={24}> 嗚嗚嗚...... 這裏什麼都沒有。{"\n"} 快去逛逛吧！</VarText>
				: <></>
			}

			<FlatList
				ListHeaderComponent={<>

				</>}
				showsVerticalScrollIndicator={false}
				data={wishlistArray}
				renderItem={renderItemBestseller}
				keyExtractor={item => item.id}
			/>


		</BaseTabContainer>
	)
}

export default Wishlist