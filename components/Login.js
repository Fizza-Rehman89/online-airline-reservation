import React from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Image,Dimensions,ScrollView,Alert,Modal,Button,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  async function handleLogin() {
    const newData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    try {
      const response = await fetch(
        'YourAPIKey',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Login Successful', 'You have logged in successfully.', [
          { text: 'OK', onPress: () => navigation.navigate('DrawerNavigator') },
        ]);
      } else {
        Alert.alert('Login failed', data.error.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('An unexpected error occurred. Please try again later.');
    }
  }

  function buttonHandler1() {
    navigation.navigate('SignUp');
  }

  function buttonHandler2() {
    navigation.navigate('ResetPassword');
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Online Airline Reservation App</Text>
          <Image source={require('./LogimImg.jpeg')} style={styles.image} />
        </View>
        <View style={styles.sub}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter email"
            placeholderTextColor="#888"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="#888"
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={buttonHandler1}>
              <Text style={styles.linkText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={buttonHandler2}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.paragraph}>Welcome {email}</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(176, 224, 230, 0.6)',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'royalblue',
    textAlign: 'center',
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  sub: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(176, 224, 230, 0.6)', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, 
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'royalblue',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'ghostwhite',
  },
  button: {
    backgroundColor: 'cornflowerblue',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 150,
    width: 250,
    borderRadius: 15,
    padding: 20,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
