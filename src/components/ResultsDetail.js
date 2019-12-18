import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={ styles.container }>
            <Text style = { styles.name } > { result.name } </Text>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
            <Text> {result.rating} Starts, { result.review_count} Opiniones </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name:{
        fontWeight:'bold',
        fontSize:16
    }
});


export default ResultsDetail;