import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ScrollView,Animated} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function AboutUs() {
  const [fadeAnim] = useState(new Animated.Value(0)); 
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 1000, 
      useNativeDriver: true, 
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>About Us</Text>
        </View>
        <Image
          source={require('./AboutScreen.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.subheading}>Our Story</Text>
          <Text style={styles.text}>
            Founded in 2000, our airline has been committed to providing
            exceptional service and comfortable flights to destinations around
            the world. With a fleet of over 100 aircraft, we connect over 50
            cities across six continents. Our mission is to ensure that every
            journey is a memorable experience.
          </Text>
          <Text style={styles.subheading}>Our Mission</Text>
          <Text style={styles.text}>
            We aim to deliver the highest quality of service, safety, and
            comfort to our passengers. Our dedicated team works tirelessly to
            maintain our reputation as one of the world's leading airlines.
          </Text>
          <Text style={styles.subheading}>Our Vision</Text>
          <Text style={styles.text}>
            To be the airline of choice for travelers worldwide, known for our
            exceptional customer service, innovative approach, and commitment to
            sustainability.
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'rgba(176, 224, 230, 0.6)',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textContainer: {
    width: '100%',
    backgroundColor: 'whitesmoke',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 24,
  },
});
