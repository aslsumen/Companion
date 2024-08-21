import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const PlaceDetails = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={item.img} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.location.address}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.buttonGoBackContainer}
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.buttonGoBack}>
          <Text style={styles.buttonGoBackTxt}>Go Back</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender',
  },
  scrollViewContent: {
    padding: 16,
    paddingBottom: 80,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
  },
  address: {
    fontSize: 16,
    color: 'black',
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: 'black',
  },
  buttonGoBackContainer: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    padding: 16,
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
  },
  buttonGoBackTxt: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
});

export default PlaceDetails;
