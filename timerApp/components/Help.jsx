import { View, Image, Text, Linking } from 'react-native';
import React from 'react';
import styles from '../public/style';

const Help = () => {
    return (
      <View style={styles.helpContainer}>
        <View style={styles.helpContent}>
          <Text>צריך עזרה?</Text>
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://google.com')}
          >
            יצירת קשר עם התמיכה
          </Text>
        </View>
        <View style={styles.arrowContainer}>
        <Image
          source={require("../public/images/login-button-arrow.png")}
        />
        </View>
      </View>
    );
  };

  export default Help;

  