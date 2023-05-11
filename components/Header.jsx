import { View, Image, Text } from 'react-native';
import React from 'react';
import styles from '../public/style';

const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Image source={require('../public/logo.png')} style={styles.clockImage} />
        <Text style={styles.title}>My Timer</Text>
      </View>
    );
  };

  export default Header;