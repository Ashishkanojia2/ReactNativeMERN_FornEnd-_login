import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Login = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.mainChild}>
        <Text style={styles.mainTxt}>LogIn</Text>

        <View style={[styles.mainGrandChild, {marginTop: 100}]}>
          <TextInput
            style={styles.logTxt}
            placeholder="UserName/Email"
            placeholderTextColor={'#fff'}></TextInput>
        </View>
        <View style={styles.mainGrandChild}>
          <TextInput
            style={styles.logTxt}
            placeholder="Password"
            placeholderTextColor={'#fff'}></TextInput>
        </View>
        <TouchableOpacity style={styles.LoginBtn}><Text style={styles.logbtnTxt}>Login</Text></TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
  LoginBtn: {
    backgroundColor: '#1C6758',
    height: '10%',
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    borderColor:"#D6CDA4",
    borderWidth:1
  },logbtnTxt:{fontSize:20}
});
