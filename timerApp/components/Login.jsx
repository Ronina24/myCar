import React from 'react';
import styles from './public/style';
import Header from './components/Header';
import InputBox from './components/InputBox';
import Help from './components/Help';
import { View, Image, Text, TextInput, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './public/style';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Header />
      </TouchableOpacity>
      <Text style={{ marginTop: '10%', paddingHorizontal: 40 }}>
        להתחברות לאפליקצית אמדוקס, נא הזינו את מספר הטלפון והמייל שלכם
      </Text>
      <InputBox placeholder="הקלד אימייל" keyboardType="email-address" />
      <InputBox placeholder="הקלד מספר" keyboardType="phone-pad" />
      <Help />
    </View>
  );
};

export default LoginScreen;
