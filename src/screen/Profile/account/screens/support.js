import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import icon from '../../../../assets/icon';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {data} from '../items/data';
import {Fonts} from '../../../../assets/font/fonts';
import {ArrowBack, Edit} from '../../../../assets/SVG/svg';
import {SvgXml} from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
const Support = ({navigation}) => {
  const [message, setMessage] = useState(data);
  const [displayMessage, setDisplayMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = mesg => {
    setDisplayMessage(mesg);
    setShowMessage(true);
    sheetRef.current.snapTo(2);
  };
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingTop: 10,
        height: 450,
      }}>
      <View style={{alignSelf: 'center'}}>
        <Image source={icon.line} />
      </View>
      <Text
        style={{
          marginTop: 20,
          fontSize: 17,
          lineHeight: 26,
          color: '#222222',
          fontFamily: Fonts.medium,
        }}>
        Please specify your issue
      </Text>
      <View style={{marginTop: 40}}>
        <FlatList
          data={message}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: '#DADADA',
              }}
              onPress={() => handleClick(item.mesg)}>
              <Text
                style={{
                  fontSize: 20,
                  lineHeight: 30,
                  color: '#222222',
                  width: 200,
                  fontFamily: Fonts.medium,
                  marginBottom: 20,
                }}>
                {item.mesg}
              </Text>
              <Image source={icon.arrowLeft} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
  const sheetRef = React.useRef(null);
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
        <View style={{flex: 1, margin: 30}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={ArrowBack} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              lineHeight: 37,
              color: '#2d2d2d',
              width: 250,
              fontFamily: Fonts.semiBold,
              marginTop: 20,
            }}>
            How can we help you, Albion?
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 56,
              height: 56,
              borderWidth: 1,
              borderColor: 'rgba(168, 168, 168, 0.24)',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
            onPress={() => sheetRef.current.snapTo(0)}>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 22,
                fontFamily: Fonts.medium,
                color: showMessage ? '#222222' : '#a8a8a8',
              }}
              numberOfLines={1}
              ellipsizeMode="tail">
              {showMessage ? displayMessage : 'Issue type'}
            </Text>
            <Image source={icon.downGray} />
          </TouchableOpacity>
          <View
            style={{
              marginTop: 50,
              height: 200,
              borderWidth: 1,
              borderColor: 'rgba(168, 168, 168, 0.24)',
              borderRadius: 5,
            }}>
            <TextInput
              style={{
                paddingHorizontal: 20,
                fontSize: 15,
                fontFamily: Fonts.medium,
                lineHeight: 22,
                color: '#222222',
              }}
              placeholderTextColor="#A8A8A8"
              placeholder="Ask your question or describe the issue"
              multiline={true}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 13,
                lineHeight: 17,
                color: '#a8a8a8',
                fontFamily: Fonts.medium,
              }}>
              Email for replies
            </Text>
            <TextInput
              style={{
                marginTop: 5,
                height: 55,
                borderWidth: 1,
                borderColor: 'rgba(168, 168, 168, 0.24)',
                fontSize: 15,
                lineHeight: 22,
                fontWeight: '500',
                fontFamily: Fonts.medium,
                borderRadius: 5,
                color: '#222222',
                paddingHorizontal: 10,
              }}
              keyboardType="email-address"
              multiline={true}

            />
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={{
                height: 55,
                backgroundColor: showMessage
                  ? 'rgba(216, 78, 91, 1)'
                  : '#a8a8a8',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('homeScreen')}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  color: '#ffffff',
                  fontFamily: Fonts.medium,
                }}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
        initialSnap={2}
      />
    </>
  );
};

export default Support;

const styles = StyleSheet.create({});
