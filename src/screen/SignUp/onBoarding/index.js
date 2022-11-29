// import {StyleSheet, Text, View, Image} from 'react-native';
// import React, {Component} from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import PrimaryButton from '../../../components/button/primaryButton';
// import icon from '../../../assets/icon';
// import {globalStyles} from '../../../common/styles';
// import SVGImg from '../../../assets/images/logoSvg.svg';
// import {Fonts} from '../../../assets/font/fonts';
// import {SvgXml} from 'react-native-svg';
// import {logo} from '../../../assets/SVG/svg';

// const OnBoarding = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={[
//           '#edb494',
//           '#ed9981', 
//         ]}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 1}}
//         locations={[1, 0.6, 0.9]}
//         style={{flex: 1}}>
//         <View style={styles.logoContainer}>
//           <SvgXml xml={logo} width={210} height={92} />
//           <Text style={[globalStyles.onBoardHeading, {marginTop: 10}]}>
//             Money Transfers
//           </Text>
//         </View>
//         <View style={styles.btnContainer}>
//           <PrimaryButton
//             title="GET STARTED"
//             onPress={() => navigation.navigate('pinCode')}
//           />
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   logoContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btnContainer: {
//     marginBottom: 40,
//     marginHorizontal: 20,
//   },
// });
// export default OnBoarding;

import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Entypo from 'react-native-vector-icons/Entypo';

MapboxGL.setAccessToken('pk.eyJ1IjoibXJzZWlmMTIzIiwiYSI6ImNsOHR4YWJoZjA4a3czbmxpd3AyZ3BuZ2wifQ.2mPFM1A0sl85l6WedH3wEQ');

const App = () => {
  const [curr_latitude, set_curr_latitude] = useState('32');
  const [curr_longitude, set_curr_longitude] = useState('72');
  const [selected_latitude, set_selected_latitude] = useState('31');
  const [selected_longitude, set_selected_longitude] = useState('62');
  const [selected_address, set_selected_address] = useState(false);
  const mapref = useRef(null);
    useEffect(()=>{
    const constructor=async()=>{
      if (Platform.OS=='android') {
        const isGranted = await MapboxGL.requestAndroidLocationPermissions();
       console.log(isGranted)
      }
        }
        constructor()
  },[])
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} >
         <MapboxGL.Camera
            zoomLevel={18}
            animationMode={'flyTo'}
            animationDuration={11}
            centerCoordinate={[curr_longitude,curr_latitude]}
            followUserLocation={true}
          />
          <MapboxGL.PointAnnotation id={'hello123'} coordinate={[curr_longitude, curr_latitude]}>
            <View>
              <Text>fghkgjc</Text>
            </View>
          </MapboxGL.PointAnnotation>
          <MapboxGL.PointAnnotation id={'hello'} coordinate={[selected_longitude, selected_latitude]}>
            <View>
              <Text>fghkgjc</Text>
            </View>
          </MapboxGL.PointAnnotation >
        </MapboxGL.MapView>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});