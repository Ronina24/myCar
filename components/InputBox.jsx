import { View, TextInput, Image } from 'react-native';
import styles from '../public/style';
import React from 'react';

const InputBox = ({ placeholder, keyboardType, imageSource }) => {
  return (
      <View style={styles.inputWrapper}>
      <Image source={imageSource} style={styles.callImage} />
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
  );
};

  export default InputBox;

