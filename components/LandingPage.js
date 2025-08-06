import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ImageBackground,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LandingPage() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('./imgScreen3.jpeg')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.description}>
            Start your journey with us. Find and book your perfect trip.
            Experience travel like never before.
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80, 
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
  },
  header: {
    position: 'absolute',
    top: '62%',
    left: '10%',
    right: '10%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '600',
    color: '#333',
  },
  footer: {
    position: 'absolute',
    bottom: 10, 
    left: '20%',
    right: '20%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'cornflowerblue', 
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
