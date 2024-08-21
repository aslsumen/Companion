import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deleteUser} from '../../storageUtils';
import styles from './Register_style';
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

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const passwordsMatch = form.password === form.confirmPassword;
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!passwordsMatch) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const userExists = users.find(user => user.email === form.email);
      if (userExists) {
        Alert.alert('User with this email already exists');
        return;
      }

      users.push({
        name: form.name,
        surname: form.surname,
        email: form.email,
        password: form.password,
      });

      await AsyncStorage.setItem('users', JSON.stringify(users));

      Alert.alert('Registration successful', 'You can now log in', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]);
    } catch (error) {
      console.error('Error saving user to AsyncStorage:', error);
    }
  };

  const handleDeleteUser = async () => {
    if (form.email) {
      await deleteUser(form.email);
      Alert.alert(`User with email ${form.email} has been deleted.`);
    } else {
      Alert.alert('Please enter an email to delete the user.');
    }
  };

  return (
    <SafeAreaView style={styles.mainpage}>
      <ScrollView>
        <View style={styles.container}>
          <Text>{'\n'}</Text>
          <View style={styles.headerImg}>
            <Image
              source={require('./companion_logo.png')}
              style={styles.headerImg}
              alt="Logo"
            />
          </View>

          <View>
            <Text numberOfLines={1} style={styles.title}>
              Register to Companion
            </Text>
            <Text numberOfLines={1} style={styles.subtitle}>
              Book your dream hotel!
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                autoCapitalize="words"
                autoCorrect={false}
                style={styles.inputControl}
                placeholder="Jane"
                value={form.name}
                onChangeText={name => setForm({...form, name})}
              />
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Surname</Text>
              <TextInput
                autoCapitalize="words"
                autoCorrect={false}
                style={styles.inputControl}
                placeholder="Doe"
                value={form.surname}
                onChangeText={surname => setForm({...form, surname})}
              />
            </View>
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

          <View>
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

            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                  secureTextEntry
                  style={styles.inputControl}
                  placeholder="********"
                  value={form.confirmPassword}
                  onChangeText={confirmPassword =>
                    setForm({...form, confirmPassword})
                  }
                />
              </View>
            </View>

            {!passwordsMatch && (
              <Text style={styles.warning}>Passwords do not match</Text>
            )}
          </View>

          <View style={styles.formRegister}>
            <TouchableOpacity onPress={handleRegister}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign up</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.formRegister}>
            <TouchableOpacity
              style={{marginTop: 'auto'}}
              onPress={() => navigation.navigate('Login')}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>
                  Already have an account? Sign in
                </Text>
              </View>
            </TouchableOpacity>

            {/*
            ONLY FOR ADMIN TO TEST */}
            {/* <View> 
              <Text></Text>
              <Button title="Log Stored Users" onPress={logStoredUsers} />
              <Text></Text>
              <Button title="Delete User" onPress={handleDeleteUser} />
            </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
