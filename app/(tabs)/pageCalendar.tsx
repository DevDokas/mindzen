import { View, Text, StyleSheet } from 'react-native';

export default function CalendarPage(): any {
  const styles = StyleSheet.create({
    container: {},
    main: {
      marginTop: 128,
      marginBottom: 72
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Calendar</Text>
      </View>
    </View>
  );
}
