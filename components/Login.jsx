import React from 'react';
import styles from '../public/style.js';
import Header from './Header.jsx';
import InputBox from './InputBox';
import Help from './Help';
import { View, Text, TouchableOpacity } from 'react-native';


const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Header />
      </TouchableOpacity>
      <Text>
        להתחברות לאפליקצית אמדוקס, נא הזינו את מספר הטלפון והמייל שלכם
      </Text>
      <InputBox placeholder="הקלד אימייל" keyboardType="email-address" imageSource={require("../public/images/callSquare.png")} />
      <InputBox placeholder="הקלד מספר" keyboardType="phone-pad" imageSource={require("../public/images/messageSquare.png")} />
      <Help />
    </View>
  );
};

export default LoginScreen;
