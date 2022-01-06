import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SearchBar } from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    };

    return (
        // Using a placeholder "<></>" instead of <View></View> 
        // to return a group of different elements
        // b/c <View> can cause visual errors when trying to fit all of the content 
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={ () =>searchApi(term)}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective $" 
                    />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier $$"
                    />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender $$$"
                    />
                <ResultsList 
                    results={filterResultsByPrice('$$$$')} 
                    title="Daddy Warbucks $$$$"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export { SearchScreen };