import {Text,SafeAreaView,StyleSheet,View,ImageBackground,TextInput,Button,TouchableOpacity,Modal,} from 'react-native';
import { useState } from 'react';

export default function ResetPassword({ navigation }) {
  const [username, setUsername] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  async function buttonHandler() {
    const newData = {
      email: username,
      requestType: 'PASSWORD_RESET',
    };

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
    if (data.email) {
      alert('Email Sent successfully');
    } else {
      alert('Credentials do not match');
    }
  }

  function buttonHandler1() {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('./ResetImg.jpeg')}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Reset Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            placeholder="Enter Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={buttonHandler}>
            <Text style={styles.buttonText}>Send Link</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.paragraph}>Welcome {username}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%', 
    maxHeight: 400, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
    marginLeft: 35,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', 
  },
  input: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'cornflowerblue', 
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
