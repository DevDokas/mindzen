import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import * as color from '../config/colorPalette';

export default function Loading(): any {
  return (
    <View style={styles.animationContainer}>
      <View style={styles.main}>
        <LottieView
          autoPlay
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#eee'
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('../assets/LoadingAnimation.json')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    justifyContent: 'center',
    flex: 1
  },
  main: {},
  spinnerTextStyle: {
    color: color.loadingText,
    fontSize: 36
  }
});

/* <Spinner
visible={true}
color={color.loadingAnimation}
textContent={'Loading...'}
textStyle={styles.spinnerTextStyle}
/> */
