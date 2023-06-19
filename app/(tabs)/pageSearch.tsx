import { View, Text, StyleSheet } from 'react-native';

export default function SearchPage(): any {
  const styles = StyleSheet.create({
    container: {},
    main: { marginTop: 128, marginBottom: 72 }
  });

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Search</Text>
      </View>
    </View>
  );
}
