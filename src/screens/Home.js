import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, StatusBar} from 'react-native';
import {VarText} from "../components/TextLayout";
import {BaseTabContainer, HStack, VStack} from "../components/BaseLayout";
import {RightArrowIcon} from "../components/IconManager";
import {BestsellerItem, BestSellerItem, BookItem, SearchBar} from "../components/MainComponents";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {StateContext} from "../managers/State/GlobalStateManager";
import {asyncGetAllBooks, asyncSaveAllBooks} from "../managers/AsyncManager";
import {ACTIONS} from "../managers/State/ActionLibrary";
import * as BookData from "../res/data.json"

const App = ({navigation}) => {

	const [isInitialized, setInitialized] = useState(false)
	const [allBooks, setAllBooks] = useState({})

	const [state, dispatch] = useContext(StateContext)

	useEffect(() => {
		asyncGetAllBooks()
			.then(
				res => {
					console.log("[App.js] Get all books for data testing: " + res)

					if (res === null){
						asyncSaveAllBooks(BookData.DATA)
							.then(
								res => {
									dispatch({type: ACTIONS.UPDATE_CURRENT_BOOK_DATA, payload: BookData.DATA})
									console.log("[App.js] Save books from async succeed. Payload: " + BookData.DATA)
								}, rej => {
									console.log("[App.js] Save books from async failed: " + rej.message)
								})
					}
					else{
						dispatch({type: ACTIONS.UPDATE_CURRENT_BOOK_DATA, payload: JSON.parse(res)})
					}

				}, rej => {
					console.log("[App.js] Get all books for data testing failed: " + rej.message)
			})

	}, [])

	const renderItem = ({item}) => (
		<BookItem title={item.title} image={item.image} author={item.author} rating={item.rating} isLast={item.isLast}
		          navigation={navigation}/>
	);

	const renderItemBestseller = ({item}) => (
		<BestsellerItem title={item.title} image={item.image} author={item.author}
		                rating={item.rating} isLast={item.isLast} ranking={item.ranking}
		                wishlisted={item.wishlisted}
		                navigation={navigation}/>
	);

	return (
		<BaseTabContainer>
			<SearchBar placeholder="搜尋書籍..."/>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={state.currentBookData}
				renderItem={renderItemBestseller}
				keyExtractor={item => item.id}

				ListHeaderComponent={
					<>
						<HStack marginTop={16} paddingBottom={8} paddingHorizontal={16} justifyContent="space-between"
						        alignItems="center">
							<VarText type="xl" letterSpacing={1.25}>焦點</VarText>
							<RightArrowIcon size={22}/>
						</HStack>

						<HStack>
							<FlatList
								showsHorizontalScrollIndicator={false}
								horizontal={true}
								data={state.currentBookData}
								renderItem={renderItem}
								keyExtractor={item => item.id}
							/>
						</HStack>

						<HStack paddingBottom={16} marginTop={8} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
							<VarText type="xl" letterSpacing={1.25}>暢銷書籍</VarText>
							<RightArrowIcon size={22}/>
						</HStack>
					</>
				}
			/>
		</BaseTabContainer>
	);
}

export default App;