import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

const Font = ({ children, ...props }) => {
    const [fontsLoaded, fontError] = useFonts({
        'Roboto-Regular': require('./fonts/roboto/Roboto-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    // Spread the rest of the props to the View component
    return (
        <View {...props} onLayout={onLayoutRootView}>
            {children}
        </View>
    );
};

export default Font;
