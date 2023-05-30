import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from '../public/style';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../public/images/logoMyCar.png')}
        style={styles.carLogo}
        resizeMode="contain"
      />
    </View>
  );
};

export default Header;
