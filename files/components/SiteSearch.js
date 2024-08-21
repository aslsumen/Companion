//https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides/rn-intro-0000001050975015
//https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/introduction-0000001050176404-V1
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import RNHMSSite from '@hmscore/react-native-hms-site';
import {styles} from './Site_styles';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

const defaultLocation = {
  location: {
    lat: 48.8815,
    lng: 2.4444,
  },
  bounds: {
    northeast: {
      lat: 49,
      lng: 2.47,
    },
    southwest: {
      lat: 47.8815,
      lng: 2.0,
    },
  },
};

const SiteSearch = () => {
  const [strictBounds, setStrictBounds] = useState(false);
  const [query, setQuery] = useState();
  const [radius, setRadius] = useState(1000);
  const navigation = useNavigation();

  useEffect(() => {
    const config = {
      apiKey:
        'DQEDALeo1IEf2cFScGjvETbp6VX4T5m5Aljb/gXel8qHWGffnQfi0EkSK+nAfG691V7PmhdlFHzQbpt4A8yHz2m/vbjbnEtRuke14Q==',
    };

    RNHMSSite.initializeService(config)
      .then(() => {
        console.log('Service is initialized successfully');
      })
      .catch(err => {
        console.log('Error : ' + err);
      });
  }, []);

  const createWidget = () => {
    const params = {
      searchIntent: {
        apiKey:
          'DQEDALeo1IEf2cFScGjvETbp6VX4T5m5Aljb/gXel8qHWGffnQfi0EkSK+nAfG691V7PmhdlFHzQbpt4A8yHz2m/vbjbnEtRuke14Q==',
        hint: 'myhint',
      },
      searchFilter: {
        ...defaultLocation,
        query,
        radius,
        language: '',
        countryCode: '',
        //https://developer.huawei.com/consumer/en/doc/HMS-Plugin-References-V1/locationtype-0000001092540889-V1
        // poiType:[
        //   RNHMSSite.LocationType.GEOCODE,
        //   RNHMSSite.LocationType.ADDRESS,
        //   RNHMSSite.LocationType.ESTABLISHMENT,
        //   RNHMSSite.LocationType.REGIONS,
        //   RNHMSSite.LocationType.CITIES,
        //   RNHMSSite.LocationType.LODGING,
        // ]

        //https://developer.huawei.com/consumer/en/doc/HMS-Plugin-References-V1/hwlocationtype-0000001077362420-V1
        hwPoiType:
         RNHMSSite.HwLocationType.HOTEL_MOTEL,
        // RNHMSSite.HwLocationType.FOUR_STAR_HOTEL,

        strictBounds,
        children: false,
      },
    };

    RNHMSSite.createWidget(params)

      .then(res => {
        navigation.navigate('Hotel', {results: res});
        console.log(JSON.stringify(res));
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  };

  return (
    <ScrollView>
      {/* <View style={[styles.container]}>
        <TextInput
          value={query}
          style={[styles.input, styles.width35]}
          placeholder="query"
          onChangeText={changeInputValue(setQuery)}
        />
        <TextInput
          value={radius ? radius.toString() : null}
          keyboardType="number-pad"
          maxLength={5}
          style={[styles.input, styles.width35]}
          placeholder="radius"
          onChangeText={changeRadiusValue}
        />
        <View style={[styles.switchContainer]}>
          <Text>Strict Bounds</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={strictBounds ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={strictBounds}
          />
        </View>
      </View> */}

      <View style={styles.btn}>
        <TouchableOpacity onPress={createWidget}>
          <Text style={styles.btnText}>Tap to Search Places</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SiteSearch;
