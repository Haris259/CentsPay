import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const RrquestDone = () => {
  return (
    <View style={{margin: 30}}>
      <View style={{marginTop: 200}}>
        <Image source={require('../../../assets/icon/accept.png')} />
      </View>
      <Text style={{marginTop: 35, fontSize: 25, fontWeight: '600'}}>
        Request Sent!
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default RrquestDone;
