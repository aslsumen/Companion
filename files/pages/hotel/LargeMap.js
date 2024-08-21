import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HotelMap from './HotelMap';

const LargeMap = ({route}) => {
  const {lat, lng} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <HotelMap lat={lat} lng={lng} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LargeMap;
