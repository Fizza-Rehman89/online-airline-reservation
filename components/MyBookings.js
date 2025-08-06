import {Text,View,StyleSheet,FlatList,TouchableOpacity,TextInput,Modal,Alert,} from 'react-native';
import { useState } from 'react';

export default function MyBookings({ navigation }) {
  const [bookings, setBookings] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const [id, setId] = useState(null);

  async function fetchBookings() {
    const response = await fetch(
      'YourAPIKey'
    );
    const data = await response.json();
    const bookingData = [];

    for (const key in data) {
      const bookingObj = {
        id: key,
        from: data[key].from,
        to: data[key].to,
        dateOfDeparture: data[key].dateOfDeparture,
        numberOfTickets: data[key].numberOfTickets,
      };
      bookingData.push(bookingObj);
    }

    setBookings(bookingData);
  }

  function handleDelete(id) {
    Alert.alert(
      'Delete Booking',
      'Are you sure you want to delete this booking?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            await fetch(
              `YourAPIKey`,
              {
                method: 'DELETE',
              }
            );
            setBookings((prevBookings) =>
              prevBookings.filter((booking) => booking.id !== id)
            );
          },
        },
      ],
      { cancelable: false }
    );
  }

  function handleSave() {
    Alert.alert(
      'Save Changes',
      'Do you want to save the changes?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            const updatedBooking = {
              from,
              to,
              dateOfDeparture: departureDate,
              numberOfTickets,
            };

            fetch(
              `YourAPIKey`,
              {
                method: 'PUT',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBooking),
              }
            )
              .then(() => {
                setBookings((prevBookings) =>
                  prevBookings.map((booking) =>
                    booking.id === id
                      ? { ...booking, ...updatedBooking }
                      : booking
                  )
                );
                setIsVisible(false);
                navigation.navigate('MyBookings'); 
              })
              .catch((error) => {
                console.error('Error updating booking:', error);
              });
          },
        },
      ],
      { cancelable: false }
    );
  }

  function handleClose() {
    Alert.alert(
      'Close Modal',
      'Are you sure you want to close without saving changes?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Close',
          onPress: () => setIsVisible(false),
        },
      ],
      { cancelable: false }
    );
  }

  function openModal(booking) {
    setId(booking.id);
    setFrom(booking.from);
    setTo(booking.to);
    setDepartureDate(booking.dateOfDeparture);
    setNumberOfTickets(booking.numberOfTickets);
    setIsVisible(true);
  }

  const renderBookingItem = ({ item }) => (
    <View style={styles.bookingItem}>
      <Text style={styles.bookingText}>{`From: ${item.from}`}</Text>
      <Text style={styles.bookingText}>{`To: ${item.to}`}</Text>
      <Text
        style={styles.bookingText}>{`Departure: ${item.dateOfDeparture}`}</Text>
      <Text
        style={styles.bookingText}>{`Tickets: ${item.numberOfTickets}`}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.updateButton]}
          onPress={() => openModal(item)}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => handleDelete(item.id)}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.showBtn} onPress={fetchBookings}>
        <Text style={styles.buttonText}>Show Bookings</Text>
      </TouchableOpacity>
      <FlatList
        data={bookings}
        renderItem={renderBookingItem}
        keyExtractor={(item) => item.id}
      />
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalStyle}>
            <Text style={styles.label}>From</Text>
            <TextInput
              style={styles.input}
              value={from}
              onChangeText={setFrom}
              placeholder="Enter departure city"
            />
            <Text style={styles.label}>To</Text>
            <TextInput
              style={styles.input}
              value={to}
              onChangeText={setTo}
              placeholder="Enter destination city"
            />
            <Text style={styles.label}>Departure Date</Text>
            <TextInput
              style={styles.input}
              value={departureDate}
              onChangeText={setDepartureDate}
              placeholder="YYYY-MM-DD"
            />
            <Text style={styles.label}>Number of Tickets</Text>
            <TextInput
              style={styles.input}
              value={numberOfTickets}
              onChangeText={setNumberOfTickets}
              keyboardType="numeric"
              placeholder="Enter number of tickets"
            />
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.closeButton]}
              onPress={handleClose}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(176, 224, 230, 0.6)',
  },
  bookingItem: {
    backgroundColor: 'ghostwhite',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookingText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  updateButton: {
    backgroundColor: 'limegreen',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
  },
  saveButton: {
    backgroundColor: 'limegreen',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'cornflowerblue',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalStyle: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(176, 224, 230, 0.8)', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'royalblue',
    marginBottom: 8,
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
  showBtn: {
    backgroundColor: 'cornflowerblue',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
});
