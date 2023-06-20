import {
  Link,
  useSegments,
  useRouter,
  useRootNavigationState
} from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
      {isLoggedIn ? (
        <View style={styles.main}>
          <View style={styles.block}>
            <Text>Bem vindo(a) de volta!</Text>
          </View>
        </View>
      ) : (
        <View style={styles.main}>
          <View style={styles.block}>
            <Text>Seja bem vindo!</Text>
            <Text>Crie uma conta ou acesse sua conta para continuar!</Text>
            <Link href={'/(auth)/pageLogin'}> Fazer Login</Link>
            <Link href={'/(auth)/pageRegister'}>Criar Conta</Link>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  main: {
    marginTop: 128,
    marginBottom: 72
  },
  block: {}
});
