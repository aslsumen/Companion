import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
  },
  scrollViewContent: {
    padding: 16,
    flex: 1,
  },
  cardContainer: {
    backgroundColor: 'rgba(216, 191, 216, 0.5)',
    padding: 16,
    paddingHorizotal: 10,
    borderRadius: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    margin: 8,
  },
  formatAddress: {
    fontSize: 20,
    textAlign: 'left',
    color: 'black',
  },
  hwPoiTranslatedTypes: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
  },
  phone: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
  },
  websiteUrl: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    textDecorationLine: 'underline',
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 'auto',
  },
  flexRow: {flexDirection: 'row'},
  flexCol: {flexDirection: 'column'},
  flex1: {flex: 1},
  flex2: {flex: 2},
  width30: {width: 30},
  width40: {width: 40},
  width50: {width: 50},
  width100: {width: 100},
  width125: {width: 125},
  height200: {height: 200},
  height250: {height: 250},
  height300: {height: 300},
  height400: {height: 400},
  height450: {height: 450},
  fullHeight: {height: '100%'},
  mapView: {height: 300},
  snapView: {height: 200, backgroundColor: 'yellow'},
  infoWindow: {backgroundColor: 'white', alignSelf: 'baseline'},
  textInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 4,
  },
  textBold: {fontWeight: 'bold'},
  p4: {padding: 4},
  p8: {padding: 8},
  p16: {padding: 16},
  m1: {margin: 1},
  m2: {margin: 2},
  m4: {margin: 4},
  m8: {margin: 8},
  m16: {margin: 16},
});

export default styles;
