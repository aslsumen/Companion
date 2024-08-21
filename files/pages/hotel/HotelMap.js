import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import HMSMap from '@hmscore/react-native-hms-map';
import MapKit from '../../components/MapKit';

const HotelMap = ({lat, lng}) => {
  useEffect(() => {
    HMSMap.module.initializer(
      'DQEDALeo1IEf2cFScGjvETbp6VX4T5m5Aljb/gXel8qHWGffnQfi0EkSK+nAfG691V7PmhdlFHzQbpt4A8yHz2m/vbjbnEtRuke14Q==',
      'CN',
    );
  }, []);

  return (
    <SafeAreaView>
      <View style={style.lineStyle} />
      <MapKit lat={lat} lng={lng} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  lineStyle: {
    marginTop: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  buttonBorder: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default HotelMap;
