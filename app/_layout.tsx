import { Slot } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './components/Navbar';

export default function Layout(): any {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
      <View style={styles.main}>
        <Slot />
      </View>
      <Navbar />
    </View>
  );
}

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  main: {
    flex: 1
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
