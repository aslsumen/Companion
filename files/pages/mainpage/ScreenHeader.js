import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const ScreenHeader = ({maintitle, secondtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>{maintitle}</Text>
      <Text style={styles.secondtitle}>{secondtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  maintitle: {
    fontSize: 30,
    color: 'black',
    fontStyle: 'italic',
  },
  secondtitle: {
    fontSize: 30,
    color: 'black',
    fontStyle: 'italic',
  },
});
export default ScreenHeader;
