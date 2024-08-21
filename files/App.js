import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Mainpage from './pages/mainpage/Mainpage';
import HotelMap from './pages/hotel/HotelMap';
import CreateWidget from './components/SiteSearch';
import Hotel from './pages/hotel/Hotel';
import PlaceDetails from './pages/mainpage/PlaceDetails';
import LargeMap from './pages/hotel/LargeMap';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Mainpage" component={Mainpage} />
        <Stack.Screen name="Hotel" component={Hotel} />
        <Stack.Screen name="HotelMap" component={HotelMap} />
        <Stack.Screen name="LargeMap" component={LargeMap} />
        <Stack.Screen name="CreateWidget" component={CreateWidget} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
