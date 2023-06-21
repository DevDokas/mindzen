import { useRouter } from 'expo-router';
import { useRef, useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert
} from 'react-native';

import Loading from '../components/Loading';
import * as color from '../config/colorPalette';
import { appSignIn } from '../config/store';

export default function LoginPage(): any {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const animationRef = useRef(null);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    main: {
      marginTop: 128,
      marginBottom: 72,
      paddingTop: 100,
      gap: 35
    },
    pageTitle: {
      fontSize: 48
    },
    formContainer: {
      flexDirection: 'column',
      gap: 20
    },
    emailContainer: {
      width: 280
    },
    passwordContainer: {
      width: 280
    },
    textInput: {
      borderBottomWidth: 1,
      borderBottomColor: '#141414',
      fontSize: 18,
      width: '100%'
    },
    buttonContainer: {
      flexDirection: 'column',
      gap: 15
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
    },
    loadingContainer: {
      position: 'absolute',
      backgroundColor: 'red'
    },
    loading: { width: 200, height: 200, backgroundColor: '#eee' }
  });

  console.log(isLoading);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Loading />
          </View>
        ) : null}
        <Text style={styles.pageTitle}>Login</Text>
        <View style={styles.formContainer}>
          <View style={styles.emailContainer}>
            <Text>Email</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => {
                emailRef.current = text;
              }}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Text>Senha</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={(text) => {
                passwordRef.current = text;
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={async () => {
                setIsLoading(true);
                const resp = await appSignIn(
                  emailRef.current,
                  passwordRef.current
                );
                if (resp?.user) {
                  setIsLoading(false);
                  router.replace('/(tabs)/pageHome');
                } else {
                  setIsLoading(false);
                  console.log(resp.error);
                  Alert.alert('Login error: ', resp.error?.message);
                }
              }}
            >
              <Text style={styles.buttonLabel}>Login</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                router.push('/(auth)/pageRegister');
              }}
            >
              <Text style={styles.buttonLabel}>Cadastrar-se</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
