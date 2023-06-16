import { Link } from 'expo-router';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Home(): any {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href="/profile">Perfil</Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24
  },
  main: {},
  title: {
    fontSize: 64,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D'
  }
});
