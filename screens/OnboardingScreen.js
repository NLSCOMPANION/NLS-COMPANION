import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const slides = [
    {
      image: require('../assets/slider1.png'),
      text: 'Welcome to NLSCOMPANION!',
    },
    {
      image: require('../assets/slider2.png'),
      text: 'Learn and excel in your law studies.',
    },
    {
      image: require('../assets/slider3.png'),
      text: 'Connect with peers and experts.',
    },
    {
      image: require('../assets/slider4.png'),
      text: 'Stay updated with latest news and resources.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideNext = () => {
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    setCurrentIndex(nextIndex);
  };

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        ref={flatListRef}
      />

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[styles.paginationDot, { opacity: currentIndex === index ? 1 : 0.3 }]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontFamily: 'ProductSans-Bold',
    textAlign: 'center',
    marginVertical: 20,
    color: Colors.primary,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: Colors.primary,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 16,
    fontFamily: 'ProductSans-Bold',
  },
});

export default OnboardingScreen;
