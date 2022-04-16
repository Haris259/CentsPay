import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackBtn from '../../components/button/backBtn'

const Scanner = ({navigation}) => {
  return (
    <View style={{margin:30,flex:1}}>
      <Text>Scanner</Text>
      <View style={{marginLeft: 30}} />
          <BackBtn title="Scan"
           onPress={() => navigation.navigate('ReviewScan')}
            />
    </View>
  )
}

export default Scanner

const styles = StyleSheet.create({})