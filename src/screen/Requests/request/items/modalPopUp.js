import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Modal, Portal, Provider, Button} from 'react-native-paper';
import {countries} from '../../../data/data';
const ModalPopUp = ({modalVisible, closeModal}) => {
  const [country, setCountry] = useState([]);
  const Country = [
    {
      name: 'Afghanistan',
      code: 'AF',
      capital: 'Kabul',
      region: 'AS',
      currency: {
        code: 'AFN',
        name: 'Afghan afghani',
        symbol: '؋',
      },
      language: {
        code: 'ps',
        name: 'Pashto',
      },
      flag: require('../../../../assets/images/AG.jpg'),
      dialling_code: '+93',
    },
    {
      name: 'Albania',
      code: 'AL',
      capital: 'Tirana',
      region: 'EU',
      currency: {
        code: 'ALL',
        name: 'Albanian lek',
        symbol: 'L',
      },
      language: {
        code: 'sq',
        name: 'Albanian',
      },
      flag: require('../../../../assets/images/BG.jpg'),
      dialling_code: '+355',
    },
  ];
  useEffect(() => {
    setCountry(Country);
  }, []);
  return (
    <Provider>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={closeModal}
          contentContainerStyle={styles.containerStyle}
          style={{flex: 1, alignItems: 'center'}}>
          {country.map(item => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}
              key={item.name}>
              <Image
                source={item.flag}
                style={{
                  height: 32,
                  width: 32,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
              <Text>{item.currency.code}</Text>
            </TouchableOpacity>
          ))}
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ModalPopUp;

const styles = StyleSheet.create({
  containerStyle: {
    // margin: 120,
    width: 139,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    height: 144,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 20,
    borderRadius: 5,
  },
});
