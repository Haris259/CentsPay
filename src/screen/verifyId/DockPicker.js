import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Permissions from 'react-native-permissions';
import PDFScanner from '@woonivers/react-native-document-scanner';
import {useNavigation} from '@react-navigation/native';
const DockPicker = () => { 
  const pdfScannerElement = useRef(null);
  const [data, setData] = useState({});
  const [allowed, setAllowed] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    async function requestCamera() {
      const result = await Permissions.request(
        Platform.OS === 'android'
          ? 'android.permission.CAMERA'
          : 'ios.permission.CAMERA',
      );
      if (result === 'granted') setAllowed(true);
    }
    requestCamera();
    console.log(data);
  }, []);

  // const onNavigate = () => {
  //   setData(data);
  // };

  function handleOnPressRetry() {
    setData({});
  }
  function handleOnPress() {
    pdfScannerElement.current.capture();
  }
  if (!allowed) {
    console.log('You must accept camera permission');
    return (
      <View style={styles.permissions}>
        <Text>You must accept camera permission</Text>
      </View>
    );
  }
  if (data.croppedImage) {
    console.log('data', data);
    return (
      <React.Fragment>
        <Image source={{uri: data.croppedImage}} style={styles.preview} />
        <TouchableOpacity onPress={handleOnPressRetry} style={styles.button}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <PDFScanner
        ref={pdfScannerElement}
        style={styles.scanner}
        onPictureTaken={setData}
        overlayColor="rgba(255,130,0, .3)"
        enableTorch={false}
        // saveOnDevice={true}
        quality={1}
        saturation={1}
        detectionCountBeforeCapture={5}
        detectionRefreshRateInMS={50}
      />
      {/* <TouchableOpacity onPress={handleOnPress} style={styles.button}>
        <Text style={styles.buttonText}>Take picture</Text>
      </TouchableOpacity> */}
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  scanner: {
    flex: 1,
    aspectRatio: undefined,
  },
  button: {
    borderWidth: 1,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 32,
    padding: 10,
  },
  preview: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  permissions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DockPicker;
