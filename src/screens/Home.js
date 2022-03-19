import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, Image, Alert} from 'react-native';
import {VarText} from "../components/TextLayout";
import {BaseContainer, BaseTabContainer, HStack, VStack} from "../components/BaseLayout";
import {RightArrowIcon} from "../components/IconManager";
import {BestsellerItem, BestSellerItem, BookItem, SearchBar} from "../components/MainComponents";
import * as DATA from "../res/data.json"
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage"

async function saveAllBooks() {
	await AsyncStorage.setItem("all-books", JSON.stringify(DATA));
}

async function getAllBooks() {
	let result = await AsyncStorage.getItem("all-books");
	if (result) {
		return(result)
	} else {
		console.log("Data Failed")
	}
}

const App = ({navigation}) => {

	const [isInitialized, setInitialized] = useState(false)
	const [allBooks, setAllBooks] = useState({})

	useEffect(()=>{
		saveAllBooks()
			.then(()=>{
				getAllBooks()
					.then((res)=> {
						setAllBooks(JSON.parse(res))
						setInitialized(true)
						Alert.alert("initialized")
					})
					.catch(()=> console.log("get all-books failed"))
			}).catch(()=> console.log("save all-books failed"))
	},[])

	const renderItem = ({item}) => (
		<BookItem title={item.title} image={item.image} author={item.author} rating={item.rating} isLast={item.isLast}
		          navigation={navigation}/>
	);

	const renderItemBestseller = ({item}) => (
		<BestsellerItem title={item.title} image={item.image} author={item.author}
		                rating={item.rating} isLast={item.isLast} ranking={item.ranking}
		                wishlised={item.wishlised}
		                navigation={navigation}/>
	);

	return (

		isInitialized ?

				<BaseTabContainer>
					<SearchBar placeholder="Search books..."/>
					<FlatList
						showsVerticalScrollIndicator={false}
						data={allBooks.DATA}
						renderItem={renderItemBestseller}
						keyExtractor={item => item.id}

						ListHeaderComponent={
							<>
								<HStack marginTop={12} paddingBottom={6} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
									<VarText type="xl">Featured</VarText>
									<RightArrowIcon/>
								</HStack>

								<HStack>
									<FlatList
										showsHorizontalScrollIndicator={false}
										horizontal={true}
										data={allBooks.DATA}
										renderItem={renderItem}
										keyExtractor={item => item.id}
									/>
								</HStack>

								<HStack paddingBottom={16} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
									<VarText type="xl">Best Seller</VarText>
									<RightArrowIcon/>
								</HStack>
							</>
						}
					/>
				</BaseTabContainer> : <></>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});

export default App;

// import React from 'react';
// import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, Image} from 'react-native';
// import {VarText} from "../components/TextLayout";
// import {BaseContainer, BaseTabContainer, HStack, VStack} from "../components/BaseLayout";
// import ScrollViewBase from "react-native-web/dist/exports/ScrollView/ScrollViewBase";
// import {RightArrowIcon} from "../components/IconManager";
// import {BookItem, SearchBar} from "../components/MainComponents";
// import * as DATA from "../res/data.json"
//
// const App = ({navigation}) => {
//     const renderItem = ({ item }) => (
//        <BookItem title={item.title} image={item.image} author={item.author} rating={item.rating} isLast={item.isLast} navigation={navigation}/>
//     );
//
//     return (
//        <BaseTabContainer>
//            <SearchBar/>
//            <ScrollView>
//                <HStack paddingBottom={6} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
//                    <VarText type="xl">Featured</VarText>
//                    <RightArrowIcon/>
//                </HStack>
//
//                <HStack>
//                    <FlatList
//                       showsHorizontalScrollIndicator={false}
//                       horizontal={true}
//                       data={DATA.DATA_FEATURED}
//                       renderItem={renderItem}
//                       keyExtractor={item => item.id}
//                    />
//                </HStack>
//
//
//                <HStack paddingVertical={6} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
//                    <VarText type="xl">Best Seller</VarText>
//                    <RightArrowIcon/>
//                </HStack>
//
//                <HStack>
//                    <FlatList
//                       style={{height: 300}}
//                       showsVerticalScrollIndicator={false}
//                       data={DATA.DATA_BESTSELLING}
//                       renderItem={renderItem}
//                       keyExtractor={item => item.id}
//                    />
//                </HStack>
//
//                {/*<HStack paddingVertical={6} paddingHorizontal={16} justifyContent="space-between" alignItems="center">*/}
//                {/*    <VarText type="xl">On Sale</VarText>*/}
//                {/*    <RightArrowIcon/>*/}
//                {/*</HStack>*/}
//
//                {/*<HStack>*/}
//                {/*    <FlatList*/}
//                {/*       showsHorizontalScrollIndicator={false}*/}
//                {/*        horizontal={true}*/}
//                {/*        data={DATA}*/}
//                {/*        renderItem={renderItem}*/}
//                {/*        keyExtractor={item => item.id}*/}
//                {/*    />*/}
//                {/*</HStack>*/}
//            </ScrollView>
//        </BaseTabContainer>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: StatusBar.currentHeight || 0,
//     },
//     item: {
//         backgroundColor: '#f9c2ff',
//         padding: 20,
//         marginVertical: 8,
//         marginHorizontal: 16,
//     },
//     title: {
//         fontSize: 32,
//     },
// });
//
// export default App;