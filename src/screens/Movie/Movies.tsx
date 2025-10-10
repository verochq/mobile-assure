import { getPopularMovies } from '@/src/services/MDBServices';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

const Movies = () => {
    useEffect(()=>{
        getPopularMovies()
        .then((data) => {
            console.log('Popular Movies: ', data)
        })
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <Text>Movies Component</Text>
        </SafeAreaView>
    );
};

export default Movies;