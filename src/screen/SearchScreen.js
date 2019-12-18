import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term, setTerm, onTermSubmit] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList
                    results={filterResultByPrice('$')}
                    title='Baratitos'
                />
                <ResultList
                    results={filterResultByPrice('$$')}
                    title='Precios normales'
                />
                <ResultList
                    results={filterResultByPrice('$$$')}
                    title='Los caros'
                />
            </ScrollView>
        </>
    )
};

const style = StyleSheet.create({});

export default SearchScreen;