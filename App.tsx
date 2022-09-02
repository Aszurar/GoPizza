import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import SplashScreen from 'expo-splash-screen'

import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { DMSans_400Regular, useFonts } from "@expo-google-fonts/dm-sans";


import { SignIn } from '@screens/SignIn';
import theme from "@src/theme";


export default function App() {
  const [isReady, setIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });


  useEffect(() => {
    /**
     * Prevent auto hide splash screen
     */
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    }

    showSplashScreen();
  }, []);


  useEffect(() => {
    /**
    * When the fonts are loaded, 
    * we can hide the splash screen
    * and show the app
    */

    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    }

    if (fontsLoaded) {
      setIsReady(true);
      hideSplashScreen();
    }

  }, [fontsLoaded])

  if (!isReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}