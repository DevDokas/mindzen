import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import * as color from '../config/colorPalette';

export default function Loading(): any {
  return (
    <View style={styles.animationContainer}>
      <Spinner visible={true} color={color.loadingAnimation} size={124} />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    opacity: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    flex: 1
  },
  spinnerTextStyle: {
    color: color.loadingText,
    fontSize: 36
  }
});
