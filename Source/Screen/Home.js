import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 20}}>Login the mainScreen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#1C6758',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
