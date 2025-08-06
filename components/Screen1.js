import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Screen2');
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/screen1.jpeg')}
        style={styles.backgroundImage}
      >
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Online Airline Reservation App</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Welcome aboard! Ready to explore the world with us?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Let's Go</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    position: 'absolute',
    top: 50, 
    alignItems: 'center',
    width: '100%',
    marginTop : 60,
  },
  heading: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: '50%', 
    left: '20%', 
    right: '20%',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80, 
    alignItems: 'center',
    width: '100%',
  },
  button: {
    position: 'absolute',
    bottom: '20%', 
    backgroundColor: 'cornflowerblue', 
    paddingVertical: 15,
    paddingHorizontal: 110,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
