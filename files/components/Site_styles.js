import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    padding: 10,
    width: '100%',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#aaa',
  },
  width35: {
    width: '35%',
  },

  container: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
  },

  switchContainer: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnContainer: {
    marginTop: 10,
  },
  btn: {
    backgroundColor: 'thistle',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
});
