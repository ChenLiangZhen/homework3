import {BaseStackContainer, HStack, VStack} from "../components/BaseLayout";
import {ActivityIndicator, Image, Pressable} from "react-native";
import {VarText} from "../components/TextLayout";
import {SearchBar, TopNav} from "../components/MainComponents";
import React, {useState} from "react";
import {RatingStarBar} from "../components/GadgetManager";
import {MainButton} from "../components/ButtonManager";

const BookDetail = ({route, navigation}) => {

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

           <VStack alignItems="center">

              <HStack justifyContent="center" alignItems="center" shadowOpacity={.5}  shadowRadius={10} shadowColor= "gray" shadowOffset={{ height: 1}}>
                 {isLoading? <ActivityIndicator style={{position: "relative", left: 100 }} size="small" color="gray"/> : <></> }
                    <Image style={{ width: 250, height: 375, borderRadius: 10, }} source={{ uri: props.image }}
                        onLoadEnd={()=>{setIsLoading(false)}}
                    />
              </HStack>

               <VarText type="lg" fontWeight="bold" marginTop={24}>{props.title}</VarText>
               <VarText type="sm" fontWeight="normal" marginTop={4} color="gray" marginBottom={6}>{props.author}</VarText>
               <RatingStarBar rating={props.rating}/>

              <HStack marginTop={36} justifyContent="space-between" width={240}>
                 <MainButton type="md" text="Order" width={110} backgroundColor="black"/>
                 <MainButton type="md" text="Order" width={110} backgroundColor="darkgray"/>
              </HStack>
           </VStack>
        </BaseStackContainer>
    )
}

export default BookDetail