import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Navbar from './components/Navbar';

export default function Layout(): any {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    main: {
      flex: 0
    },
    title: {
      fontSize: 64,
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: 36,
      color: '#38434D'
    }
  });

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Slot />
      </View>
      <Navbar />
    </View>
  );
}
