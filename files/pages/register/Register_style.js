import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainpage: {
    flex: 1,
    backgroundColor: 'lavender',
  },
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    //marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#929292',
    //marginBottom: 6,
    textAlign: 'center',
  },
  input: {
    marginBottom: 7,
  },

  inputLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#222',
    marginBottom: 3,
    textAlign: 'left',
  },
  inputControl: {
    height: 44,
    fontSize: 15,
    fontWeight: '500',
    backgroundColor: '#fff',
    //paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    color: '#222',
    //marginBottom: 6,
    //textAlign: 'left',
  },

  formLogin: {
    marginVertical: 30,
  },
  formRegister: {
    marginVertical: 10,
  },

  btn: {
    backgroundColor: 'thistle',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  warning: {
    color: 'red',
    fontSize: 14,
  },
});

export default styles;
