import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} <Foundation name="star" style={styles.iconStyle}/>, {result.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    // Images need styling otherwise they will collapse 
    image:{
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name:{
        fontWeight: 'bold'
    },
    iconStyle:{
        alignSelf: 'center'
    }
});

export {ResultsDetail};