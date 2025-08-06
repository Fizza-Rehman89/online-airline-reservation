import {View,ImageBackground,Text,StyleSheet,TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen2() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('LandingPage');
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('./imgScreen2.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Discover your next destination and book with ease
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Start Exploring</Text>
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
  textContainer: {
    position: 'absolute',
    top: '20%', 
    left: '25%',
    right: '18%',
    padding: 15,
    borderRadius: 15,
  },
  text: {
    color: '#333', 
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 15,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'cornflowerblue', 
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
