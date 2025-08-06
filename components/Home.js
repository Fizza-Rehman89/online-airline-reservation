import React from 'react';
import {View,Image,Text,StyleSheet,Dimensions,ScrollView} from 'react-native';

const { width, height } = Dimensions.get('window');

const Home = () => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.headingContainer}>
      <Text style={styles.head}>Welcome to SkyFly!</Text>
      <Text style={styles.head0}>Your Ultimate Travel Partner</Text>
      <Image source={require('./HomeImg.jpeg')} style={styles.mainImage} />
      <View style={styles.introDiv}>
        <Text style={styles.introText}>
          Welcome to SkyFly! Discover amazing destinations and book your flights effortlessly. Explore our diverse range of services designed to make  your travel experience seamless and enjoyable.
        </Text>
      </View>
      <View style={styles.featureContainer}>
        <Image
          source={{
            uri: 'https://thepointsguy.global.ssl.fastly.net/us/originals/2023/10/GettyImages-1404678952-scaled.jpg',
          }}
          style={styles.featureImage}
        />
        <Text style={styles.featureTitle}>Fast Booking</Text>
        <Text style={styles.featureDescription}>
          Secure your flight in just a few clicks with our user-friendly booking
          system.
        </Text>
      </View>
      <View style={styles.featureContainer}>
        <Image
          source={{
            uri: 'https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos53287017xl-1718329490377.jpg',
          }}
          style={styles.featureImage}
        />
        <Text style={styles.featureTitle}>Exclusive Deals</Text>
        <Text style={styles.featureDescription}>
          Enjoy special offers and discounts available only through SkyFly.
        </Text>
      </View>
      <View style={styles.featureContainer}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1498981757/photo/crm-mockup-or-man-in-a-telemarketing-call-center-helping-talking-or-networking-online-via.webp?b=1&s=612x612&w=0&k=20&c=wWXjuntLQVBj09QgSD9-c-YaIAUlaQNjLfn03E8_rWY=',
          }}
          style={styles.featureImage}
        />
        <Text style={styles.featureTitle}>24/7 Support</Text>
        <Text style={styles.featureDescription}>
          Get assistance any time with our dedicated customer support team.
        </Text>
      </View>
      <View style={styles.contactDiv}>
        <Text style={styles.contactTitle}>Contact Us</Text>
        <Text style={styles.contactText}>Have questions or need help?</Text>
        <Text style={styles.contactText}>
          Reach out to us at support@skyfly.com or call us at +123 456 7890.
        </Text>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  head: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  head0: {
    fontSize: 20,
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'rgba(176, 224, 230, 0.6)',
  },
  mainImage: {
    width: width * 0.9,
    height: height * 0.25,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    alignSelf: 'center',
  },
  headingContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  introDiv: {
    width: width * 0.9,
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'whitesmoke',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignSelf: 'center',
  },
  introText: {
    fontSize: 17,
    color: '#333',
    textAlign: 'justify',
  },
  featureContainer: {
    width: width * 0.9,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: 'whitesmoke',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignSelf: 'center',
    padding: 10,
    alignItems: 'center',
  },
  featureImage: {
    width: width * 0.8,
    height: height * 0.25,
    borderRadius: 15,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  contactDiv: {
    width: width * 0.9,
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignSelf: 'center',
  },
  contactTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default Home;
