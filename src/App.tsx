import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Movies from './screens/Movie/Movies';

const App = () => {
    return (
        <GestureHandlerRootView>
        <SafeAreaProvider>
        <Movies/>
        </SafeAreaProvider>
        </GestureHandlerRootView>
    );
};

export default App;