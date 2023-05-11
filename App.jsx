import React from 'react';
import { View, Text } from 'react-native';
import styles from './public/style';
import Header from './components/Header';
import InputBox from './components/InputBox';
import Help from './components/Help';


const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={{ marginTop: '20%', paddingHorizontal: 40 }}>
        להתחברות לאפליקצית טיימר, נא הזינו את המייל ומספר הטלפון שלכם
      </Text>
      <InputBox placeholder="הקלד אימייל" keyboardType="email-address" />
      <InputBox placeholder="הקלד מספר" keyboardType="phone-pad" />
      <Help />
    </View>
 
  );
};

export default App;