import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const CompanionBanner = ({}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.companion}> COMPANION </Text>
    </View>
  );
};
export default CompanionBanner;

const styles = StyleSheet.create({
  companion: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 'auto',
  },
  titleContainer: {
    backgroundColor: 'thistle',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
  },
});
