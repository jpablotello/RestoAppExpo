import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultList = ({ title, results, navigation }) => {
    if(!results.length)
        return null;
        
    return (
        <View style={styles.container} >
            <Text style={styles.titleStyle}> {title} </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});


export default withNavigation(ResultList);