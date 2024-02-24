import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Login = ({navigation}) => {
  const [errMsg, setErrMsg] = useState();
  const [fdata, setFdata] = useState({
    email: '',
    password: '',
  });
  const sendtoBackend = () => {
    console.log(fdata);
    if (fdata.email == '' || fdata.password == '') {
      setErrMsg('Someting Wents Wrong. Try Again..');
    } else {
      // setErrMsg("EveryThing is Good Go a Head")
      fetch('http://10.0.2.2:3000/Login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fdata),
      })
        .then(res => res.json())
        .then(data => {
          console.log('================7====================');
          console.log(data);
          console.log('====================================');
          
          if (data.error) {
            setErrMsg(data.error);
          } else {
            navigation.navigate('Home');
          }
        });
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.mainChild}>
        <Text style={styles.mainTxt}>LogIn</Text>
        {errMsg ? (
          <Text style={{color: '#fff', fontSize: 17, marginTop: 15}}>
            {errMsg}
          </Text>
        ) : null}

        <View style={[styles.mainGrandChild, {marginTop: 60}]}>
          <TextInput
            style={styles.logTxt}
            placeholder="UserName/Email"
            placeholderTextColor={'#fff'}
            onPressIn={()=> setErrMsg(null)}
            onChangeText={text => {
              setFdata({...fdata, email: text});
            }}></TextInput>
        </View>
        <View style={styles.mainGrandChild}>
          <TextInput
            style={styles.logTxt}
            placeholder="Password"
            secureTextEntry={true}
            onPressIn={()=> setErrMsg(null)}
            placeholderTextColor={'#fff'}
            onChangeText={text =>
              setFdata({...fdata, password: text})
            }></TextInput>
        </View>
        <TouchableOpacity
          style={styles.LoginBtn}
          onPress={() => {
            sendtoBackend();
          }}>
          <Text style={styles.logbtnTxt}>Login</Text>
        </TouchableOpacity>
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
    borderColor: '#D6CDA4',
    borderWidth: 1,
  },
  logbtnTxt: {fontSize: 20},
});
