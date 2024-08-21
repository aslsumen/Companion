import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TopPlaces = ({list}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <FlatList
        data={list}
        horizontal
        decelerationRate="normal"
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{marginLeft: 8}}
              onPress={() => navigation.navigate('PlaceDetails', {item})}>
              <View style={styles.card}>
                <View style={styles.imageBox}>
                  <Image source={item.img} style={styles.image} />
                  <Text style={{color: 'black'}}>{item.title}</Text>
                  <Text style={{color: 'black'}}>{item.location.address}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
  },
  imageBox: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});

export default TopPlaces;
