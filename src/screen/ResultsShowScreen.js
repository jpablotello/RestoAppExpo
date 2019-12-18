import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    console.log(result);

    const getResults = async (id) => {
        try {
            const response = await yelp.get(`${id}`);
            setResult(response.data);
        } catch (error) {
            setErrorMessage("Error al conectarse ");
        }
    };

    useEffect(() => {
        getResults(id);
    }, []);

    if (!result){
        return null;
    }

    return (
        <View>
            {errorMessage ? <Text>Error al conectarse a internet</Text> : null}
            <Text style={ styles.titulo }>{ result.name }</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={ styles.imagen } source={{ uri: item }}/>
                }}
            />
            <View style={ styles.separador }>
                <Text style={ styles.pie }>Tel: { result.phone }</Text>
                <Text style={ styles.pie }>Direccion { result.location.address1 } - Ciudad : { result.location.city }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    separador: {
        borderWidth: 0,
        borderColor: 'blue'
    },
    pie: {

    },
    titulo: {
        fontSize: 20,
       marginBottom: 2
    },
    imagen: {
        width: 250,
        height: 150,
        marginVertical: 3,
        borderColor: 'black',
        borderWidth: 2
    }
});

export default ResultsShowScreen;