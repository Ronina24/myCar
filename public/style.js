import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    height: height
  },

  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: height * 0.1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  clockImage: {
    width: '15%',
    height: '70%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: height * 0.04,
    color: 'black',
    flex: 1,
    textAlign: 'center',
  },

  inputContainer: {
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.2,
  },

  input: {
    textAlign: 'right',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
  },

  helpContainer: {
    marginTop: height * 0.3,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  arrowContainer: {
    backgroundColor: 'purple',
    borderRadius: 100,
    padding: '5%'
  }

});

export default styles;
