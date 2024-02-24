import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Verification = ({navigation, route}) => {
    const {userdata} = route.params;
  const [errMsg, setErrMsg] = useState();
  const [FCode, setFcode] = useState('XXXX');
  const [acutalCode, setactualCode] = useState(null);
  useEffect(() => {
    
    setactualCode(userdata[0]?.VerificationCode);
    //console.log("acutalCodeFromBackEnd",userdata);
  }, []);

  const sendTobackEnd = () => {
    console.log('************************************');
    console.log(' acutalCodeFromBackEnd', acutalCode);
    console.log('user Enter the code', FCode);
    console.log('************************************');
    const NFcode = parseInt(FCode);
    if (NFcode === '' || NFcode === 'XXXX') {
      setErrMsg('Something Went Wrong');
      console.log('please enter the code');
      return;
    } else if (NFcode === acutalCode) {
      setErrMsg('User Verified');
      console.log('you entered the correct code');
      const fdata = {
        email: userdata[0]?.email,
        password: userdata[0]?.password,
        name: userdata[0]?.name,
      };
      fetch('http://10.0.2.2:3000/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, // 'application/json' instead of 'application.json'
        body: JSON.stringify(fdata),
      })
        .then(res => res.json()) // first we convert data to json Formate then we ues data
        .then(data => {
          console.log('================700====================');
          console.log(data);
          console.log('====================================');
          if (data.error == 'invalid Credentials') {
            setErrMsg('invalid Credentials');
          } else if (data.message === 'User Register SuccessFully') {
            Alert.alert(data.message);
            // navigation.navigate('Home')
            navigation.navigate('Login');
          }
        });
    } else if (NFcode !== acutalCode) {
      setErrMsg('Code MisMatched');
      console.log('Error', typeof NFcode);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.mainChild}>
        <Text style={styles.mainTxt}>Verificaton</Text>
        <View style={[styles.mainGrandChild, {marginTop: 20}]}>
          <TextInput
            style={styles.logTxt}
            placeholder="Enter Code Here"
            placeholderTextColor={'#fff'}
            onPressIn={() => setErrMsg(null)}
            onChangeText={text => {
              setFcode(text);
            }}></TextInput>
        </View>

        {errMsg ? <Text style={styles.errorMsg}>{errMsg}</Text> : null}
        <TouchableOpacity
          style={styles.LoginBtn}
          onPress={() => {
            sendTobackEnd();
          }}>
          <Text style={styles.logbtnTxt}>Verify Code</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Verification;

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
  errorMsg: {color: '#D6CDA4', fontSize: windowWidth / 25, marginTop: '5%'},
});
