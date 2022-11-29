import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import icon from '../../assets/icon';
import PrimaryButton from '../../components/button/primaryButton';
import FileViewer from 'react-native-file-viewer';
import DocumentPicker from 'react-native-document-picker';
import {Fonts} from '../../assets/font/fonts';
import {globalStyles} from '../../common/styles';
import {colors} from '../../common/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path, Rect, G, Defs, ClipPath} from 'react-native-svg';
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
      <View style={{flexDirection: 'row', marginHorizontal: 10}}>
        <TouchableOpacity
          style={{marginTop: 8}}
          onPress={() => navigation.goBack()}>
          <Image source={icon.arrowBack} />
        </TouchableOpacity>
        <Text style={[globalStyles.h3Black, {marginHorizontal: 10}]}>
          Verify your Identity
        </Text>
      </View>

      <View style={{flex: 1, margin: 10}}>
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
            {/* <Image source={icon.accept} style={{height: 22, width: 22}} />
             */}
            <View style={{paddingTop: 15}}>
              <Svg
                width="23"
                height="22"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_1381_2874)">
                  <Path
                    d="M40.098 0C18.0417 0 0.0986328 17.9431 0.0986328 40.0001C0.0986328 62.0564 18.0417 80.0002 40.098 80.0002C62.1536 80.0002 80.0967 62.0564 80.0967 40.0001C80.0967 17.9431 62.1536 0 40.098 0ZM40.098 76.739C19.8406 76.739 3.35981 60.2569 3.35981 40.0001C3.35981 19.7426 19.8406 3.26118 40.098 3.26118C60.3548 3.26118 76.8355 19.7426 76.8355 40.0001C76.8355 60.2569 60.3548 76.739 40.098 76.739Z"
                    fill="#D84E5B"
                  />
                  <Path
                    d="M60.7567 24.0498L32.3153 52.4906L19.4399 39.6158C18.8031 38.9791 17.7713 38.9791 17.1338 39.6158C16.4971 40.2526 16.4971 41.2844 17.1338 41.9219L31.1623 55.9496C31.4806 56.268 31.898 56.4268 32.3153 56.4268C32.7326 56.4268 33.1499 56.268 33.4683 55.9496L63.0627 26.3559C63.6995 25.7191 63.6995 24.6866 63.0627 24.0498C62.4259 23.4131 61.3935 23.4131 60.7567 24.0498Z"
                    fill="#D84E5B"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_1381_2874">
                    <Rect width="80" height="80" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            </View>
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
           <View style={{}}>
              <Svg
                width="23"
                height="22"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_1381_2874)">
                  <Path
                    d="M40.098 0C18.0417 0 0.0986328 17.9431 0.0986328 40.0001C0.0986328 62.0564 18.0417 80.0002 40.098 80.0002C62.1536 80.0002 80.0967 62.0564 80.0967 40.0001C80.0967 17.9431 62.1536 0 40.098 0ZM40.098 76.739C19.8406 76.739 3.35981 60.2569 3.35981 40.0001C3.35981 19.7426 19.8406 3.26118 40.098 3.26118C60.3548 3.26118 76.8355 19.7426 76.8355 40.0001C76.8355 60.2569 60.3548 76.739 40.098 76.739Z"
                    fill="#D84E5B"
                  />
                  <Path
                    d="M60.7567 24.0498L32.3153 52.4906L19.4399 39.6158C18.8031 38.9791 17.7713 38.9791 17.1338 39.6158C16.4971 40.2526 16.4971 41.2844 17.1338 41.9219L31.1623 55.9496C31.4806 56.268 31.898 56.4268 32.3153 56.4268C32.7326 56.4268 33.1499 56.268 33.4683 55.9496L63.0627 26.3559C63.6995 25.7191 63.6995 24.6866 63.0627 24.0498C62.4259 23.4131 61.3935 23.4131 60.7567 24.0498Z"
                    fill="#D84E5B"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_1381_2874">
                    <Rect width="80" height="80" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            </View>
            {/* <Image source={icon.accept} style={{height: 22, width: 22}} /> */}
            <Text
              style={[globalStyles.blackText, {width: 270, marginLeft: 10}]}>
              Show the full ducument (all four corners should be visible).
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <View style={{}}>
              <Svg
                width="23"
                height="22"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_1381_2874)">
                  <Path
                    d="M40.098 0C18.0417 0 0.0986328 17.9431 0.0986328 40.0001C0.0986328 62.0564 18.0417 80.0002 40.098 80.0002C62.1536 80.0002 80.0967 62.0564 80.0967 40.0001C80.0967 17.9431 62.1536 0 40.098 0ZM40.098 76.739C19.8406 76.739 3.35981 60.2569 3.35981 40.0001C3.35981 19.7426 19.8406 3.26118 40.098 3.26118C60.3548 3.26118 76.8355 19.7426 76.8355 40.0001C76.8355 60.2569 60.3548 76.739 40.098 76.739Z"
                    fill="#D84E5B"
                  />
                  <Path
                    d="M60.7567 24.0498L32.3153 52.4906L19.4399 39.6158C18.8031 38.9791 17.7713 38.9791 17.1338 39.6158C16.4971 40.2526 16.4971 41.2844 17.1338 41.9219L31.1623 55.9496C31.4806 56.268 31.898 56.4268 32.3153 56.4268C32.7326 56.4268 33.1499 56.268 33.4683 55.9496L63.0627 26.3559C63.6995 25.7191 63.6995 24.6866 63.0627 24.0498C62.4259 23.4131 61.3935 23.4131 60.7567 24.0498Z"
                    fill="#D84E5B"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_1381_2874">
                    <Rect width="80" height="80" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            </View>
            {/* <Image source={icon.accept} style={{height: 22, width: 22}} /> */}
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
    </SafeAreaView>
  );
};

export default VerifyId2;

const styles = StyleSheet.create({});
