import { StyleSheet, Text, View } from 'react-native';

export default function Page(): any {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>My profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
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
