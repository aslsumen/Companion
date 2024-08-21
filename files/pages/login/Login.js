import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Login_style';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  const handleLogin = async () => {
    const storedUsers = await AsyncStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const user = users.find(
      user => user.email === form.email && user.password === form.password,
    );
    if (user) {
      navigation.navigate('Mainpage');
    } else {
      Alert.alert('Invalid email or password');
    }
  };

  return (
    <SafeAreaView style={styles.mainpage}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerImg}>
            <Image
              source={require('./companion_logo.png')}
              style={styles.headerImg}
              alt="Logo"
            />
          </View>

          <View>
            <Text numberOfLines={1} style={styles.title}>
              Sign in to Companion
            </Text>
            <Text numberOfLines={1} style={styles.subtitle}>
              Book your dream hotel!
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.inputControl}
                placeholder="jane@example.com"
                value={form.email}
                onChangeText={email => setForm({...form, email})}
              />
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                secureTextEntry
                style={styles.inputControl}
                placeholder="********"
                value={form.password}
                onChangeText={password => setForm({...form, password})}
              />
            </View>
          </View>

          <View style={styles.formLogin}>
            <TouchableOpacity onPress={handleLogin}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.formRegister}>
            <TouchableOpacity
              style={{marginTop: 'auto'}}
              onPress={() => navigation.navigate('Register')}>
              <View style={styles.btn}>
                <Text style={styles.btnText2}>
                  Don't have an account? Sign up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
