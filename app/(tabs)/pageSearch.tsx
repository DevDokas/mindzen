import { View, Text, StyleSheet } from 'react-native';

import LoginPage from '../(auth)/pageLogin';
import { AuthStore } from '../config/store';

export default function SearchPage(): any {
  const { isLoggedIn } = AuthStore.useState();
  const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center' },
    main: { marginTop: 128, marginBottom: 72 }
  });

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View style={styles.main}>
          <Text>Search</Text>
        </View>
      ) : (
        <LoginPage />
      )}
    </View>
  );
}
