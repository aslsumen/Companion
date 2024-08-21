import React from 'react';
import styles from './Mainpage_style';
import {useNavigation} from '@react-navigation/native';
import ScreenHeader from './ScreenHeader';
import TopPlaces from './TopPlacesCarousel';
import BannerComponent from '../../components/AdsKit';
import {DATA} from '../../Data';
import SiteSearch from '../../components/SiteSearch';
import CompanionBanner from './Companion_banner';

import {SafeAreaView, ScrollView, View} from 'react-native';

const Mainpage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainpage}>
      <CompanionBanner></CompanionBanner>

      <View style={styles.container}>
        <ScreenHeader maintitle="Find Your" secondtitle="Dream Place!" />

        <SiteSearch></SiteSearch>

        <ScrollView showsHorizontalScrollIndicator={false}>
          <TopPlaces list={DATA} />
        </ScrollView>

        <BannerComponent />
      </View>
    </SafeAreaView>
  );
};
export default Mainpage;

// FOR DEV ENV. ONLY
{
  /* <View style={styles.buttonGoBack}>
<TouchableOpacity onPress={() => navigation.navigate('CreateWidget')}>
<Text style={styles.buttonGoBackTxt}>Search</Text>
</TouchableOpacity>
</View> */
}
