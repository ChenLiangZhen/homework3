import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView} from 'react-native';
import {TitleText} from "../components/TextLayout";
import {BaseContainer, HStack} from "../components/BaseLayout";
import ScrollViewBase from "react-native-web/dist/exports/ScrollView/ScrollViewBase";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '1 Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '2 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '3 Item',
    },
    {
        id: '58694aer-3da1-471f-bd96-145571e29d72',
        title: '4 Item',
    },
    {
        id: '52494a0f-3da1-471f-bd96-145571e29d72',
        title: '5 Item',
    },
];

const Item = ({ title }) => (
    <View style={{
        height: 192,
        width: 128,
        margin: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#ccc"
    }}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <BaseContainer>
            <ScrollView>
                <HStack padding={12}>
                    <TitleText>Popular</TitleText>
                </HStack>

                <HStack>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </HStack>


                <HStack padding={12}>
                    <TitleText>Popular</TitleText>
                </HStack>

                <HStack>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </HStack>

                <HStack padding={12}>
                    <TitleText>Popular</TitleText>
                </HStack>

                <HStack>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </HStack>
            </ScrollView>
        </BaseContainer>
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