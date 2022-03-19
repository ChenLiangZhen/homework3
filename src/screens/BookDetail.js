import {BaseStackContainer, HStack, VStack} from "../components/BaseLayout";
import {ActivityIndicator, Alert, Image, Pressable, ScrollView, View} from "react-native";
import {VarText} from "../components/TextLayout";
import {SearchBar, TopNav} from "../components/MainComponents";
import React, {useContext, useEffect, useState} from "react";
import {RatingStarBar} from "../components/GadgetManager";
import {MainButton} from "../components/ButtonManager";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StateContext} from "../managers/State/GlobalStateManager";
import {asyncSaveAllBooks} from "../managers/AsyncManager";
import {ACTIONS} from "../managers/State/ActionLibrary";

const BookDetail = ({ route, navigation }) => {

   const { props } = route.params;
   const [isLoading, setIsLoading] = useState(true)
   const [state, dispatch] = useContext(StateContext)
   const [wishlistState, setWishlistState] = useState(false)

   useEffect(()=>{
      setWishlistState(props.wishlisted)
   },[])

   return(

        <BaseStackContainer alignItems="center">
           <HStack>
              <TopNav
                 onPress={()=> navigation.goBack()}
                 title={props.title}
              />
           </HStack>

           <ScrollView
           showsVerticalScrollIndicator={false}>
              <VStack alignItems="center" width="100%" marginTop={16}>

                 <HStack justifyContent="center" alignItems="center" shadowOpacity={.5}  shadowRadius={10} shadowColor= "gray" shadowOffset={{ height: 1}}>
                    {isLoading? <ActivityIndicator style={{position: "relative", left: 100 }} size="small" color="gray"/> : <></> }
                    <Image style={{ width: 200, height: 300, borderRadius: 10, }} source={{ uri: props.image }}
                           onLoadEnd={()=>{setIsLoading(false)}}
                    />
                 </HStack>

                 <VarText type="md" fontWeight="bold" marginTop={24}>{props.title}</VarText>
                 <VarText type="sm" fontWeight="normal" marginTop={4} color="gray" marginBottom={6}>{props.author}</VarText>
                 <RatingStarBar rating={props.rating}/>

                 <HStack marginTop={36} justifyContent="space-between" >
                    <MainButton color="white" type="sm" text="Buy Now" width={155} backgroundColor="black" marginHorizontal={8}/>

                    { wishlistState?
                       <MainButton color="white" type="mc" text="remove from wishlist" width={155} backgroundColor="#ccc" marginHorizontal={8}
                           onPress={()=>{
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
                           }}
                       /> :
                       <MainButton color="black" type="sm" text="Add to Wishlist" width={155} backgroundColor="transparent" borderWidth={1} borderColor="black"  marginHorizontal={8}
                           onPress={()=>{

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
                           }}
                       /> }
                 </HStack>

                 <View style={{
                    backgroundColor: "gray",
                    height: 1,
                    width: "95%",
                    marginVertical: 32,
                 }}/>
                 <VStack width="90%">

                    <HStack justifyContent="center">

                       <VarText fontWeight="bold" type="sm"
                          paddingBottom={8}>
                          AWARDS:
                       </VarText>
                    </HStack>

                    <VStack alignItems="center">
                          <VarText paddingVertical={12} letterSpacing={0.5} lineHeight={20}>
                             #1 NEW YORK TIMES BESTSELLER {"\n"}
                             SELECTION OF THE REESE WITHERSPOON BOOK CLUB {"\n"}
                             A BEST BOOK OF 2021 BY REAL SIMPLE AND VOGUE {"\n"}
                             A HIGHLY ANTICIPATED, BEST BOOK OF SUMMER SELECTED BY * VOGUE * USA TODAY * ENTERTAINMENT WEEKLY * CNN * TOWN & COUNTRY * PARADE * BUSTLE * AND MORE!
                          </VarText>
                    </VStack>
                 </VStack>



              </VStack>
           </ScrollView>

        </BaseStackContainer>
    )
}

export default BookDetail