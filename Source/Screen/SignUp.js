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

const SignUp = ({navigation}) => {
  const [errMsg, setErrMsg] = useState();
  const [fdata, setFdata] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const sendTobackEnd = () => {
    if (
      fdata.name == '' ||
      fdata.email == '' ||
      fdata.password == '' ||
      fdata.cpassword == ''
    ) {
      setErrMsg('Please Fill All The Field Before SignIn...');
      return;
    } else {
      if (fdata.password != fdata.cpassword) {
        console.log(setErrMsg('Password and Confirm Password id not same'));
        return;
      } else {
        fetch('http://10.0.2.2:3000/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'}, // 'application/json' instead of 'application.json'
          body: JSON.stringify(fdata),
        })
          .then(res => res.json())
          .then(data => {
            console.log('================7====================');
            console.log(data);
            console.log('====================================');
            if(data.error){
                setErrMsg(data.error)
            }else{
                Alert('Acount Create Successfully')
            }
            
          });
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.mainChild}>
        <Text style={styles.mainTxt}>SignUp</Text>
        <View style={[styles.mainGrandChild, {marginTop: 20}]}>
          <TextInput
            style={styles.logTxt}
            placeholder="Name"
            placeholderTextColor={'#fff'}
            onChangeText={text => {
              setFdata({...fdata, name: text});
            }}></TextInput>
        </View>
        <View style={[styles.mainGrandChild]}>
          <TextInput
            style={styles.logTxt}
            placeholder="UserName/Email"
            placeholderTextColor={'#fff'}
            onChangeText={text => {
              setFdata({...fdata, email: text});
            }}></TextInput>
        </View>
        <View style={styles.mainGrandChild}>
          <TextInput
            secureTextEntry={true}
            style={styles.logTxt}
            placeholder="Password"
            placeholderTextColor={'#fff'}
            onChangeText={text => {
              setFdata({...fdata, password: text});
            }}></TextInput>
        </View>
        <View style={styles.mainGrandChild}>
          <TextInput
            style={styles.logTxt}
            placeholder="Confirm Password"
            placeholderTextColor={'#fff'}
            onChangeText={text => {
              setFdata({...fdata, cpassword: text});
            }}></TextInput>
        </View>
        {errMsg ? <Text style={styles.errorMsg}>{errMsg}</Text> : null}
        <TouchableOpacity
          style={styles.LoginBtn}
          onPress={() => {
            sendTobackEnd();
          }}>
          <Text style={styles.logbtnTxt}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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
