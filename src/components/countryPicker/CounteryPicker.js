import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CountryPicker from 'react-native-country-picker-modal';


const CounteryPicker = ({withAlphaFilter,withCallingCode,withCallingCodeButton}) => {

  const init = {
    countryPicker: {
      callingCode: ['1'],
      cca2: 'US',
      name: 'USA',
      callingCode:'+92'
    }
  }
  const [user, setUser] = useState(init)

  return (
    <View>
      <View style={styles.inputBox}>
        <CountryPicker
          countryCode={user.countryPicker.cca2}
          withAlphaFilter={withAlphaFilter}
          withFlagButton={true}
          withCallingCode={withCallingCode}
          withCallingCodeButton={withCallingCodeButton}
          onSelect={value => setUser({ ...user, countryPicker: { ...value } })}
        />
        {user?.countryPicker?.name && (
         
         <Text style={[styles.countryName,{alignSelf:"center",fontSize:15,fontWeight:"500"}]}>{user?.countryPicker?.name}</Text>
       
       )}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  inputBox: {
  
    alignSelf: 'center',
   flexDirection:'row',
   
   

  },
})

export default CounteryPicker
