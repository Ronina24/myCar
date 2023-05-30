import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  login: {
    paddingHorizontal: 40,
    color: 'black',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row-reverse',
  },

  inputWrapper: {
    marginTop: height * 0.03,
    width: width * 0.8,
    borderWidth: 0.5,
    borderRadius: 3,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    height: height * 0.06,
    shadowColor: '#DCDCDC',
    elevation: 1
  },

  callImage: {
    width: 20,
    height: 20,
    marginRight: 10,
    
  },
  helpContainer: {
    marginTop: height * 0.05,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  arrowContainer: {
    height: height * 0.09,
    width: height * 0.09,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

  carLogo: {
    marginTop: height * 0.05,
    width: '75%'
  },


});

export default styles;
