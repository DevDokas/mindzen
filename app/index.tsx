import {
  Link,
  useSegments,
  useRouter,
  useRootNavigationState
} from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { AuthStore } from './config/store';

export default function Index(): any {
  const segments = useSegments();
  const router = useRouter();

  const navigationState = useRootNavigationState();

  const { initialized, isLoggedIn } = AuthStore.useState();

  useEffect(() => {
    if (!navigationState?.key || !initialized) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (!isLoggedIn && !inAuthGroup) {
      router.replace('/pageLogin');
    } else if (isLoggedIn) {
      router.replace('/(tabs)/pageHome');
    }
  }, [segments, navigationState?.key, initialized]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {!navigationState?.key ? <Text>Loading</Text> : <></>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center'
  },
  main: {
    marginTop: 128,
    marginBottom: 72
  }
});
