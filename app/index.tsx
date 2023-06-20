import {
  Link,
  useSegments,
  useRouter,
  useRootNavigationState
} from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import * as color from './config/colorPalette';
import { AuthStore } from './config/store';

export default function Index(): any {
  const segments = useSegments();
  const router = useRouter();

  const navigationState = useRootNavigationState();

  const { user, initialized, isLoggedIn }: any = AuthStore.useState();

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
            <Text>Bem vindo(a) de volta, {user?.displayName}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.main}>
          <Text style={styles.logedOutTitle}>Seja bem vindo!</Text>
          <View style={styles.block}>
            <Text style={styles.logedOutSubtitle}>
              Crie ou acesse a sua conta para continuar.
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => {
                  router.push('/(auth)/pageLogin');
                }}
              >
                <Text style={styles.buttonLabel}>Fazer Login</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  router.push('/(auth)/pageRegister');
                }}
              >
                <Text style={styles.buttonLabel}>Criar Conta</Text>
              </Pressable>
            </View>
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
    marginBottom: 72,
    paddingTop: 130,
    paddingHorizontal: 40,
    gap: 35
  },
  block: {
    gap: 25
  },
  // LogedIn
  logedInTitle: {
    fontSize: 36,
    fontWeight: '600'
  },
  // LogedOut
  logedOutTitle: {
    fontSize: 48
  },
  logedOutSubtitle: {
    fontSize: 24,
    textAlign: 'center'
  },
  // Button
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: color.externalButtons
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
});
