import React from 'react';
import { View, Text, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  const navigation = props.navigation;

  const handleLogout = () => {
    Alert.alert(
      'Logout Confirmation',
      'Do you really want to logout?',
      [
        {
          text: 'No',
          onPress: () => null, 
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => navigation.navigate('Login'), 
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Menu</Text>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('HomeTabs')}
        />
        <DrawerItem
          label="Book Ticket"
          onPress={() => navigation.navigate('BookTicket')}
        />
        <DrawerItem
          label="My Bookings"
          onPress={() => navigation.navigate('MyBookings')}
        />
        <DrawerItem
          label="Logout"
          onPress={handleLogout}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
