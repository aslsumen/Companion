import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Linking} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import HotelMap from './HotelMap';
import styles from './Hotel_style';
import CompanionBanner from '../mainpage/Companion_banner';

const Hotel = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {results} = route.params || {};

  const openWebsite = () => {
    Linking.openURL(results.poi.websiteUrl);
  };

  const dialPhoneNumber = phoneNumber => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const openLargeMap = () => {
    navigation.navigate('LargeMap', {
      lat: results.location.lat,
      lng: results.location.lng,
    });
  };

  return (
    <View style={styles.container}>
      <CompanionBanner />
      <Text style={styles.name}>{results.name}</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={openLargeMap}>
            <Text style={styles.formatAddress}>{results.formatAddress}</Text>
          </TouchableOpacity>

          {/* Render phone numbers conditionally */}
          {results.poi.internationalPhone ? (
            <TouchableOpacity
              onPress={() => dialPhoneNumber(results.poi.internationalPhone)}>
              <Text style={styles.phone}>
                {'\n'} International Phone Number: {'\n'}
                {results.poi.internationalPhone}
              </Text>
            </TouchableOpacity>
          ) : null}

          {results.poi.phone ? (
            <TouchableOpacity
              onPress={() => dialPhoneNumber(results.poi.phone)}>
              <Text style={styles.phone}>
                Local Phone Number: {'\n'} {results.poi.phone}
              </Text>
            </TouchableOpacity>
          ) : null}
          <Text> </Text>
          {/* Render website link conditionally */}
          {results.poi.websiteUrl ? (
            <TouchableOpacity onPress={openWebsite}>
              <Text style={styles.websiteUrl}>
                Visit {results.name} Website
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.mapView}>
          <HotelMap lat={results.location.lat} lng={results.location.lng} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Hotel;

//back button
{
  /* 
  import Icon from 'react-native-vector-icons/Ionicons'; 
  <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
          <Text>Test Icon Display</Text>
        </TouchableOpacity>
        
        backButton: {
    position: 'absolute',
    top: 40, // Adjust based on your header height
    left: 20,
    zIndex: 1,
    borderColor: 'red', // Add border to see the button
    borderWidth: 1,
  },
        */
}
