//handling user registration and user deletion using AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const logStoredUsers = async () => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    console.log('Stored Users:', users);
  } catch (error) {
    console.error('Error fetching users from AsyncStorage:', error);
  }
};

export const deleteUser = async email => {
  try {
    const storedUsers = await AsyncStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const filteredUsers = users.filter(user => user.email !== email);

      await AsyncStorage.setItem('users', JSON.stringify(filteredUsers));
      console.log(`User with email ${email} has been deleted.`);
    }
  } catch (error) {
    console.error('Error deleting user from AsyncStorage:', error);
  }
};
