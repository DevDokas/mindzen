import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import { FIREBASE_AUTH } from '../config/firebaseConfig';
import { AuthStore, appSignOut } from '../config/store';

export default function HomePage(): any {
  const router = useRouter();

  const { user }: any = AuthStore.useState();

  const styles = StyleSheet.create({
    container: {},
    main: {
      marginTop: 128,
      marginBottom: 72
    }
  });

  console.log();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>{user?.displayName}</Text>
        <Button
          onPress={async () => {
            const resp = await appSignOut();
            if (!resp?.error) {
              router.replace('/(auth)/pageLogin');
            } else {
              console.log(resp.error);
              Alert.alert('Logout Error: ', resp.error?.message);
            }
          }}
          title="LOGOUT"
        />
      </View>
    </View>
  );
}
