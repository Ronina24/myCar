import { View, TextInput } from 'react-native';
import styles from '../public/style';
import React from 'react';

const InputBox = ({ placeholder, keyboardType }) => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
    );
  };

  export default InputBox;

