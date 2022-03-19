import {BaseStackContainer, HStack, VStack} from "../components/BaseLayout";
import {ActivityIndicator, Alert, Image, Pressable, ScrollView, View} from "react-native";
import {VarText} from "../components/TextLayout";
import {SearchBar, TopNav} from "../components/MainComponents";
import React, {useState} from "react";
import {RatingStarBar} from "../components/GadgetManager";
import {MainButton} from "../components/ButtonManager";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveAllBooks(value) {
   await AsyncStorage.setItem("all-books", JSON.stringify(value));
}

async function getAllBooks(){
   let result = await AsyncStorage.getItem("all-books");
   if (result) {
      return(result)
   } else {
      console.log("Data Failed")
   }
}

function updateWishlist(list){
   let listObj = JSON.parse(list)
   let wishlisedArray = listObj.DATA_BESTSELLER.filter(function(item){ return item.wishlised === true})
   console.log("filtered")
   console.log(JSON.stringify(wishlisedArray))
   return wishlisedArray
}

const BookDetail = ({ route, navigation }) => {

   const { props } = route.params;
   const [isLoading, setIsLoading] = useState(true)

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

                    { props.wishlised? <MainButton color="white" type="mc" text="remove from wishlist" width={155} backgroundColor="#ccc" marginHorizontal={8}/> :
                       <MainButton color="black" type="sm" text="Add to Wishlist" width={155} backgroundColor="transparent" borderWidth={1} borderColor="black"  marginHorizontal={8}
                           onPress={()=>{
                              // const newArr = arr1.map(obj => {
                              //    if (obj.id === 1) {
                              //       return {...obj, name: 'Alfred'};
                              //    }
                              //
                              //    return obj;
                              // });

                              getAllBooks()
                                 .then((res)=>{
                                    let allBooks = JSON.parse(res)
                                    // console.log(allBooks.DATA_BESTSELLER)
                                    let updatedData = allBooks.DATA.map(book => {
                                       if(book.title === props.title){
                                          return {...book, wishlisted: true}
                                       }
                                       return book
                                    })

                                    let a = Object.create({
                                       updatedData
                                    })

                                    saveAllBooks(a)
                                       .then((res)=> console.log("Save Updated Books Success.") )
                                       .catch((rej) => console.log(rej.message))
                                 .catch((rej)=>{ Alert.alert(rej.message)})

                                 })
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