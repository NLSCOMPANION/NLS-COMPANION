// App.js
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { ThemeProvider } from './ThemeContext';

const fetchFonts = () => {
  return Font.loadAsync({
    'Karla-Italic': require('./assets/fonts/Karla-Italic.ttf'),
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Nexa-Regular': require('./assets/fonts/Nexa-Regular.otf'),
    'ProductSans-Black': require('./assets/fonts/ProductSans-Black.ttf'),
    'ProductSans-Bold': require('./assets/fonts/ProductSans-Bold.ttf'),
    'ProductSans-Regular': require('./assets/fonts/ProductSans-Regular.ttf'),
    'Proxima-Nova-Bold': require('./assets/fonts/Proxima-Nova-Bold.otf'),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await fetchFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResources();
  }, []);

  if (!fontLoaded) {
    return null; // Render nothing while fonts are loading
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
