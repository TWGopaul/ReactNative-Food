import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    // Show nothing if no results returned
    if(!result){
        return null;
    }

    return (
     <View>
        <Text style={styles.text}>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image 
                        style={styles.image}
                        source={{ uri: item }}
                        />
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
    image:{
        height: 200,
        width: 300,
        borderRadius: 4,
        marginBottom: 10,
        marginLeft: 10
    }
});

export { ResultsShowScreen };