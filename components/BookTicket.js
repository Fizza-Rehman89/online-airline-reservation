import React, { useState } from 'react';
import {View,Image,Text,StyleSheet,Dimensions,TouchableOpacity,Modal,TextInput,
Alert,} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function BookTicket({ navigation }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [ticketCategory, setTicketCategory] = useState('');
  const [dateOfDeparture, setDateOfDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible0, setModalVisible0] = useState(false);

  function handleBooking() {
    Alert.alert(
      'Booking Confirmation',
      'Do you want to confirm the booking?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            const data = {
              from,
              to,
              ticketCategory,
              dateOfDeparture,
              numberOfTickets,
            };

            fetch(
              'YourAPIKey',
              {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              }
            )
              .then(() => {
                setModalVisible(false);
                navigation.navigate('BookTicket'); 
              })
              .catch((error) => {
                console.error('Error saving booking:', error);
              });
          },
        },
      ],
      { cancelable: false }
    );
  }

  function handleBooking0() {
    Alert.alert(
      'Booking Confirmation',
      'Do you want to confirm the booking?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            const data = {
              from,
              to,
              ticketCategory,
              dateOfDeparture,
              returnDate,
              numberOfTickets,
            };

            fetch(
              'YourAPIKey',
              {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              }
            )
              .then(() => {
                setModalVisible0(false);
                navigation.navigate('BookTicket'); 
              })
              .catch((error) => {
                console.error('Error saving booking:', error);
              });
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.main}>
      <View style={styles.headingContainer}>
        <Image
          source={{
            uri: 'https://thepointsguy.global.ssl.fastly.net/us/originals/2020/11/Emirates-Game-Changer-First-Class-777-Zach-Griff-5.jpeg',
          }}
          style={styles.image}
        />
        <View style={styles.div}>
          <Text style={styles.text}>
            Discover amazing destinations and book your flights effortlessly
            with SkyFly. Whether you're planning a quick getaway or an extended
            adventure, we have the best deals and options tailored just for you.
          </Text>
        </View>
        <View style={styles.div1}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>One Way</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible0(true)}>
            <Text style={styles.buttonText}>Return</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalStyle}>
            <Text style={styles.label}>From</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter departure city"
              value={from}
              onChangeText={(text) => setFrom(text)}
            />

            <Text style={styles.label}>To</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter destination city"
              value={to}
              onChangeText={(text) => setTo(text)}
            />

            <Text style={styles.label}>Ticket Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter ticket category (Economy, Business, First Class)"
              value={ticketCategory}
              onChangeText={(text) => setTicketCategory(text)}
            />

            <Text style={styles.label}>Departure Date</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={dateOfDeparture}
              onChangeText={(text) => setDateOfDeparture(text)}
            />

            <Text style={styles.label}>Number of Tickets</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={numberOfTickets}
              placeholder="Enter Number of Tickets"
              onChangeText={(text) =>
                setNumberOfTickets(text.replace(/[^0-9]/g, ''))
              }
            />

            <TouchableOpacity style={styles.button} onPress={handleBooking}>
              <Text style={styles.buttonText}>Book Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={false} visible={modalVisible0}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalStyle}>
            <Text style={styles.label}>From</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter departure city"
              value={from}
              onChangeText={(text) => setFrom(text)}
            />

            <Text style={styles.label}>To</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter destination city"
              value={to}
              onChangeText={(text) => setTo(text)}
            />

            <Text style={styles.label}>Ticket Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter ticket category (Economy, Business, First Class)"
              value={ticketCategory}
              onChangeText={(text) => setTicketCategory(text)}
            />

            <Text style={styles.label}>Departure Date</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={dateOfDeparture}
              onChangeText={(text) => setDateOfDeparture(text)}
            />

            <Text style={styles.label}>Return Date</Text>
            <TextInput
              style={styles.input}
              placeholder="YYYY-MM-DD"
              value={returnDate}
              onChangeText={(text) => setReturnDate(text)}
            />

            <Text style={styles.label}>Number of Tickets</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={numberOfTickets}
              placeholder="Enter Number of Tickets"
              onChangeText={(text) =>
                setNumberOfTickets(text.replace(/[^0-9]/g, ''))
              }
            />

            <TouchableOpacity style={styles.button} onPress={handleBooking0}>
              <Text style={styles.buttonText}>Book Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    padding: 16,
  },
  main: {
    backgroundColor: 'rgba(176, 224, 230, 0.6)',
    flex: 1,
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  div: {
    width: width * 0.9,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: 'ghostwhite',
    padding: 15,
  },
  div1: {
    width: width * 0.9,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    backgroundColor: 'lightsteelblue',
    padding: 15,
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: 'cornflowerblue',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalStyle: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(176, 224, 230, 0.6)',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, 
    marginLeft: 20,
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
    backgroundColor: 'lightgrey',
  },
});
