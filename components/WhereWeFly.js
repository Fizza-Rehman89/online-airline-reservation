import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ScrollView,} from 'react-native';

const { width, height } = Dimensions.get('window');

const flights = [
  {
    id: 1,
    imageUri:
      'https://plus.unsplash.com/premium_photo-1682656220562-32fde8256295?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D',
    destination: 'New York, USA',
    ticketPrice: '$299',
    flyDate: 'August 25, 2024',
  },
  {
    id: 2,
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg',
    destination: 'London, UK',
    ticketPrice: '$399',
    flyDate: 'September 10, 2024',
  },
  {
    id: 3,
    imageUri:
      'https://t3.ftcdn.net/jpg/04/98/23/10/360_F_498231018_6w6Zt0h2PdU4Muy5Tvph2VeNG67yTuwl.jpg',
    destination: 'Tokyo, Japan',
    ticketPrice: '$499',
    flyDate: 'October 5, 2024',
  },
  {
    id: 4,
    imageUri:
      'https://asianinsiders.com/wp-content/uploads/2023/06/Kuala-Lumpur-World-Class-Business-Hub-1100x619-1.jpg',
    destination: 'Kuala Lumpur, Malaysia',
    ticketPrice: '$349',
    flyDate: 'October 15, 2024',
  },
  {
    id: 5,
    imageUri:
      'https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?s=612x612&w=0&k=20&c=ZneUFVlR5TPCooxRV1rldUAadqLxZEvOoyVCOrtpcRQ=',
    destination: 'Paris, France',
    ticketPrice: '$549',
    flyDate: 'November 20, 2024',
  },
  {
    id: 6,
    imageUri:
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/11/ed/79/0f.jpg',
    destination: 'Doha, Qatar',
    ticketPrice: '$299',
    flyDate: 'December 5, 2024',
  },
  {
    id: 7,
    imageUri:
      'https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg',
    destination: 'Sydney, Australia',
    ticketPrice: '$599',
    flyDate: 'December 25, 2024',
  },
];

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Available Flights</Text>
        </View>
        {flights.map((flight) => (
          <View key={flight.id} style={styles.flightBlock}>
            <Image
              source={{ uri: flight.imageUri }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.destination}>
              Destination: {flight.destination}
            </Text>
            <Text style={styles.ticketPrice}>
              Ticket Price: {flight.ticketPrice}
            </Text>
            <Text style={styles.flyDate}>Fly Date: {flight.flyDate}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  flightBlock: {
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
  image: {
    width: '100%',
    height: height * 0.25,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
  },
  destination: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  ticketPrice: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  flyDate: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
});
