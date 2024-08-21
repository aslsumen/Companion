//References:
//https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides/rn-intro-0000001050975015
//https://developer.huawei.com/consumer/en/doc/HMS-Plugin-Guides-V1/introduction-0000001050143001-V1
import {SafeAreaView} from 'react-native';
import styles from '../pages/hotel/Hotel_style';
import HMSMap, {
  HMSMarker,
  MapTypes,
  Gravity,
} from '@hmscore/react-native-hms-map';

const MapKit = ({lat, lng}) => {
  return (
    <SafeAreaView>
      <HMSMap
        style={styles.fullHeight}
        mapType={MapTypes.NORMAL}
        liteMode={false}
        darkMode={false}
        camera={{
          target: {
            latitude: lat,
            longitude: lng,
          },
          zoom: 12,
        }}
        logoPosition={Gravity.TOP | Gravity.START}
        logoPadding={{
          paddingStart: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingEnd: 0,
        }}>
        <HMSMarker
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
        />
      </HMSMap>
    </SafeAreaView>
  );
};

export default MapKit;
