import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainpage: {
    flex: 1,
    backgroundColor: 'lavender',
  },
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 'auto',
  },
  headerImg: {
    width: '100%',
    height: '80%',
    bottom: '5%',
    left: '5%',
    right: '5%',
    position: 'absolute',
    borderRadius: 8,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonGoBack: {
    backgroundColor: 'thistle',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 15,
  },
  buttonGoBackTxt: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
});

export default styles;
