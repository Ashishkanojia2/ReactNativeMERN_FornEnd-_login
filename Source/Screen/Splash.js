import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Splash = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.mainChild}>
        <Text style={styles.mainTxt}>BROTHER</Text>
        <TouchableOpacity
          style={[styles.mainGrandChild, {marginTop: 100}]}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logTxt}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainGrandChild}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.logTxt}>SignUp</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#1C6758',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainChild: {
    backgroundColor: '#3D8361',
    height: windowHeight / 1.7,
    width: windowWidth / 1.2,
    borderRadius: 10,
    alignItems: 'center',
  },
  mainTxt: {
    fontSize: windowWidth / 7,
    color: '#EEF2E6',
    fontWeight: 'bold',
    marginTop: '3%',
  },
  mainGrandChild: {
    backgroundColor: '#D6CDA4',
    height: '10%',
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  logTxt: {fontSize: windowWidth / 20, color: '#1C6758', fontWeight: '700'},
});
