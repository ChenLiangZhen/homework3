import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, Image} from 'react-native';
import {VarText} from "../components/TextLayout";
import {BaseContainer, BaseTabContainer, HStack, VStack} from "../components/BaseLayout";
import ScrollViewBase from "react-native-web/dist/exports/ScrollView/ScrollViewBase";
import {RightArrowIcon} from "../components/IconManager";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/hws/wk3/images/%E6%88%AA%E5%9C%96%202022-03-06%20%E4%B8%8A%E5%8D%881.47.36.png",
        title: 'The Last Thing He Told Me',
        author: "John Alexander",
        rating: "5",
        isLast: false,

    },
    {
        id: '58694aer-3da1-471f-bd96-145571e29d72',
        image: "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/hws/wk3/images/%E6%88%AA%E5%9C%96%202022-03-06%20%E4%B8%8A%E5%8D%881.48.56.png",
        title: 'Cloud Cuckoo Land',
        author: "Peter Andrew",
        rating: "5",
        isLast: false,

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/hws/wk3/images/%E6%88%AA%E5%9C%96%202022-03-06%20%E4%B8%8A%E5%8D%881.46.42.png",
        title: 'The Wok',
        author: "Javelin J.",
        rating: "5",
        isLast: false,

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/hws/wk3/images/%E6%88%AA%E5%9C%96%202022-03-06%20%E4%B8%8A%E5%8D%881.47.07.png",
        title: 'The 1619 Project',
        author: "Marry William",
        rating: "5",
        isLast: true,
    },
];

const Item = ({ title, image, author, rating, isLast }) => (
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
            <Image style={{ width: 142, height: 216, borderRadius: 10, }} source={{ uri: image }}/>
        </HStack>

        <VStack style={{backgroundColor: "white", }}>
            <VarText type="sm" fontWeight="bold" marginTop={8}>{title}</VarText>
            <VarText type="mc" color="gray" marginTop={4}>{author}</VarText>
            <VarText>{rating}</VarText>
        </VStack>

    </View>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} author={item.author} rating={item.rating} isLast={item.isLast} />
    );

    return (
        <BaseTabContainer>
            <ScrollView>
                <HStack paddingBottom={16} paddingTop={4} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
                    <VarText type="xl">Featured</VarText>
                    <RightArrowIcon/>
                </HStack>

                <HStack>
                    <FlatList
                       showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </HStack>


                <HStack paddingBottom={16} paddingTop={4} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
                    <VarText type="xl">New Release</VarText>
                    <RightArrowIcon/>
                </HStack>

                <HStack>
                    <FlatList
                       showsHorizontalScrollIndicator={false}
                       horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </HStack>

                <HStack paddingBottom={16} paddingTop={4} paddingHorizontal={16} justifyContent="space-between" alignItems="center">
                    <VarText type="xl">On Sale</VarText>
                    <RightArrowIcon/>
                </HStack>

                <HStack>
                    <FlatList
                       showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </HStack>
            </ScrollView>
        </BaseTabContainer>
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