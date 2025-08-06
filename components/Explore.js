import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,Image,Dimensions,ScrollView,Animated,} from 'react-native';

const { width, height } = Dimensions.get('window');

const experiences = [
  {
    id: 1,
    imageUri:
      'https://news.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/leonardcnrs_2_72dpi.jpg',
    title: 'Urban Exploration',
    description: 'Discover the hidden gems of bustling cities.',
  },
  {
    id: 2,
    imageUri:
      'https://www.travelandleisure.com/thmb/-BKpLbCHiq25xq3zQ95h03P5EKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/40-LIttle-Palm-Island-Florida-HONEYMOON0616-aac88105d78645be8120fba04df478dd.jpg',
    title: 'Romantic Getaways',
    description: 'Escape to the most romantic destinations.',
  },
  {
    id: 3,
    imageUri:
      'https://wander-lush.org/wp-content/uploads/2020/12/Cultural-Travel-jan-gemerle-V3qa-sEPFQ-unsplash.jpg',
    title: 'Cultural Journeys',
    description: 'Experience the rich culture and history.',
  },
  {
    id: 4,
    imageUri:
      'https://vault-london.com/wp-content/uploads/2019/04/Travel-Experience-An-Adventure.jpg',
    title: 'Adventure Awaits',
    description: "Thrilling adventures in nature's lap.",
  },
];

export default function Explore() {
  const [slideAnim] = useState(new Animated.Value(-width)); 
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, 
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Explore Unique Experiences</Text>
        </View>
        {experiences.map((experience) => (
          <Animated.View
            key={experience.id}
            style={[
              styles.experienceBlock,
              { transform: [{ translateX: slideAnim }] },
            ]}>
            <Image
              source={{ uri: experience.imageUri }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{experience.title}</Text>
              <Text style={styles.description}>{experience.description}</Text>
            </View>
          </Animated.View>
        ))}
      </View>
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
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  experienceBlock: {
    width: '100%',
    backgroundColor: 'whitesmoke',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: 'row',
  },
  image: {
    width: '40%',
    height: height * 0.15,
  },
  textContainer: {
    padding: 15,
    justifyContent: 'center',
    width: '60%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});
