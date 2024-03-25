import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

const Font = ({ children, ...props }) => {
    const [fontsLoaded, fontError] = useFonts({
        'Roboto-Black': require('./fonts/roboto/Roboto-Black.ttf'),
        'Roboto-BlackItalic': require('./fonts/roboto/Roboto-BlackItalic.ttf'),
        'Roboto-Bold': require('./fonts/roboto/Roboto-Bold.ttf'),
        'Roboto-BoldItalic': require('./fonts/roboto/Roboto-BoldItalic.ttf'),
        'Roboto-Italic': require('./fonts/roboto/Roboto-Italic.ttf'),
        'Roboto-Light': require('./fonts/roboto/Roboto-Light.ttf'),
        'Roboto-LightItalic': require('./fonts/roboto/Roboto-LightItalic.ttf'),
        'Roboto-Medium': require('./fonts/roboto/Roboto-Medium.ttf'),
        'Roboto-MediumItalic': require('./fonts/roboto/Roboto-MediumItalic.ttf'),
        'Roboto-Regular': require('./fonts/roboto/Roboto-Regular.ttf'),
        'Roboto-Thin': require('./fonts/roboto/Roboto-Thin.ttf'),
        'Roboto-ThinItalic': require('./fonts/roboto/Roboto-ThinItalic.ttf'),
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
