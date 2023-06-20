import { View, Text, StyleSheet } from 'react-native';

import LoginPage from '../(auth)/pageLogin';
import { AuthStore } from '../config/store';

export default function CalendarPage(): any {
  const { user, isLoggedIn } = AuthStore.useState();

  const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    main: {
      marginTop: 128,
      marginBottom: 72
    }
  });

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View style={styles.main}>
          <Text>Calendar</Text>
        </View>
      ) : (
        <LoginPage />
      )}
    </View>
  );
}
