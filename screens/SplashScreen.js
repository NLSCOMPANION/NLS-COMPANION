import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'; // Adjust path as per your project structure
import NLSLogo from '../assets/nlslogo.png'; // Import your app logo

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the Onboarding screen after a delay
    setTimeout(() => {
      navigation.replace('Onboard');
    }, 2000); // Splash screen time in milliseconds (2 seconds)
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={NLSLogo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
  logo: {
    width: 200, // Adjust size as needed
    height: 200, // Adjust size as needed
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontFamily: 'ProductSans-Bold',
    marginTop: 20,
    color: Colors.primary,
  },
});

export default SplashScreen;
