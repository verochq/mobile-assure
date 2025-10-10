import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Movies from './screens/Movie/Movies';


const App = () => {
    return (
        <SafeAreaProvider>
        <Movies/>
        </SafeAreaProvider>
    );
};

export default App;