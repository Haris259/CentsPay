import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import icon from '../../assets/icon';
import PrimaryButton from '../../components/button/primaryButton';
import FileViewer from 'react-native-file-viewer';
import DocumentPicker from 'react-native-document-picker';
import {Fonts} from '../../assets/font/fonts';
import {globalStyles} from '../../common/styles';
import {colors} from '../../common/colors';
const VerifyId2 = ({navigation}) => {
  const [snap, setSnap] = useState('');
  const selectOneFile = async () => {
    // To Select File
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.images],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      setSnap(res[0].uri);
      if (res) {
        console.log('dekhao', res);
        let uri = res[0].uri;
        if (Platform.OS === 'ios') {
          // Remove 'file://' from file path for FileViewer
          uri = res.uri.replace('file://', '');
        }
        console.log('gandu:', uri);
        navigation.navigate('ReviewScan', {
          uri,
        });
        FileViewer.open(uri)
          .then(() => {
            // Do whatever you want

            console.log('Success');
          })
          .catch(_err => {
            // Do whatever you want
            console.log(_err, 'jvjvj');
          });
      }
    } catch (err) {
      // Handling Exception
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <View style={{flex: 1, margin: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icon.arrowBack} />
        </TouchableOpacity>
        <Text style={[globalStyles.h3Black, {marginTop: 20}]}>
          Verify your Identity
        </Text>
        <Text style={[globalStyles.blackText, {marginTop: 20}]}>
          To keep your money safe, we need to verify your identify. This a legal
          requirement that helps us to keep your account secure.
        </Text>
        <Text style={[globalStyles.blackText, {marginTop: 20}]}>
          We accept photos/scans of a driving license, passport, national ID
          card or residence permit issued in the European Economic Area (EEA) or
          Switzerland.
        </Text>
        <Text style={[globalStyles.blackText, {marginTop: 20}]}>
          Follow this tips to make sure your documents are accepted:
        </Text>
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={icon.accept} style={{height: 22, width: 22}} />
            <Text
              style={[
                globalStyles.blackText,
                {marginTop: 20, width: 270, marginLeft: 10},
              ]}>
              Submit a valid, current photo ID with an expiry date.
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image source={icon.accept} style={{height: 22, width: 22}} />
            <Text
              style={[globalStyles.blackText, {width: 270, marginLeft: 10}]}>
              Show the full ducument (all four corners should be visible).
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image source={icon.accept} style={{height: 22, width: 22}} />
            <Text
              style={[globalStyles.blackText, {width: 270, marginLeft: 10}]}>
              Use a colour image that is clear and easy to read.
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}} />
        <View
          style={{flex: 2, justifyContent: 'flex-end', alignItems: 'center'}}>
          <View style={{width: 340}}>
            <PrimaryButton
              title="Use Camera"
              onPress={() => navigation.navigate('passport')}
            />
          </View>
          <TouchableOpacity
            onPress={selectOneFile}
            style={{
              width: 340,
              height: 54,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderRadius: 50,
              borderColor: colors.red,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                color: colors.red,
                fontFamily: Fonts.medium,
              }}>
              Upload Document
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VerifyId2;

const styles = StyleSheet.create({});
