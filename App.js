import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Home from './components/Home';
import Explore from './components/Explore';
import AboutUs from './components/AboutUs';
import WhereWeFly from './components/WhereWeFly';
import BookTicket from './components/BookTicket';
import MyBookings from './components/MyBookings';
import Logout from './components/Logout';
import CustomDrawerContent from './components/CustomDrawerContent';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Explore') {
          iconName = 'search-outline';
        } else if (route.name === 'WhereWeFly') {
          iconName = 'airplane-outline';
        } else if (route.name === 'AboutUs') {
          iconName = 'information-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    <Tab.Screen
      name="Explore"
      component={Explore}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="WhereWeFly"
      component={WhereWeFly}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="AboutUs"
      component={AboutUs}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: true,
      drawerActiveTintColor: 'green',
      drawerInactiveTintColor: 'gray',
    }}>
    <Drawer.Screen
      name="HomeTabs"
      component={BottomTabNavigator}
      options={{ title: 'Online Airline Reservation App' }}
    />
    <Drawer.Screen name="BookTicket" component={BookTicket} />
    <Drawer.Screen name="MyBookings" component={MyBookings} />
    <Drawer.Screen name="Logout" component={Logout} />
  </Drawer.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
