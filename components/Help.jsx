import {View, Image, Text, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../public/style';
import LinearGradient from 'react-native-linear-gradient';

const Help = () => {
  return (
    <View style={styles.helpContainer}>
      <View>
        <Text
        style={[{ fontWeight: 'bold' }, { color: 'black' }, {fontSize:18}]}>
          צריך עזרה?
          </Text>
        <Text
          style={[{color: 'blue'}, {fontSize:16}]}
          onPress={() => Linking.openURL('http://google.com')}>
          יצירת קשר עם התמיכה
        </Text>
      </View>
      <TouchableOpacity onPress={() => console.log('Arrow button pressed')}>
        <LinearGradient
          colors={['orange', '#FD017B']}
          start={{x: 1.5, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.arrowContainer}>
          <Image source={require('../public/images/login-button-arrow.png')} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

// const Help = () => {
//     return (
//       <View style={styles.helpContainer}>
//         <View style={styles.helpContent}>
//           <Text>צריך עזרה?</Text>
//           <Text
//             style={{ color: 'blue' }}
//             onPress={() => Linking.openURL('http://google.com')}
//           >
//             יצירת קשר עם התמיכה
//           </Text>
//         </View>
//         <View style={styles.arrowContainer}>
//         <Image
//           source={require("../public/images/login-button-arrow.png")}
//         />
//         </View>
//       </View>
//     );
//   };

export default Help;
