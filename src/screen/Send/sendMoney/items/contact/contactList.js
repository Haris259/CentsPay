import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  title: 'Contacts',
  message: 'This app would like to view your contacts.',
  buttonPositive: 'Please accept bare mortal',
});
import Contact from './contact';
const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
      console.log(contacts);
    });
  }, []);
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };
  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
    />
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
export default ContactsList;
