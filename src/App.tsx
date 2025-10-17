import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyStackNavigator from './Navigation/MyStackNavigator';




const App = () => {
    return (
        <GestureHandlerRootView>
        <SafeAreaProvider>
                <MyStackNavigator/>
        </SafeAreaProvider>
        </GestureHandlerRootView>
    );
};

export default App;