import { useRouter } from 'expo-router';
import { useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  Pressable
} from 'react-native';

import * as color from '../config/colorPalette';
import { AuthStore, appSignUp } from '../config/store';

export default function RegisterPage(): any {
  const router = useRouter();
  const emailRef = useRef('');
  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const passwordRef = useRef('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    main: {
      marginTop: 128,
      marginBottom: 72,
      paddingTop: 50,
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
    nameContainer: {
      width: 280
    },
    lastnameContainer: {
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
    loading: {
      width: 200,
      height: 200,
      backgroundColor: '#eee'
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.pageTitle}>Registrar</Text>
        <View style={styles.formContainer}>
          <View style={styles.emailContainer}>
            <Text>Email</Text>
            <TextInput
              style={styles.textInput}
              nativeID="email"
              onChangeText={(text) => {
                emailRef.current = text;
              }}
            />
          </View>
          <View style={styles.nameContainer}>
            <Text>First name</Text>
            <TextInput
              style={styles.textInput}
              nativeID="firstName"
              onChangeText={(text) => {
                firstNameRef.current = text;
              }}
            />
          </View>
          <View style={styles.lastnameContainer}>
            <Text>Last name</Text>
            <TextInput
              style={styles.textInput}
              nativeID="lastName"
              onChangeText={(text) => {
                lastNameRef.current = text;
              }}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Text>Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              nativeID="password"
              onChangeText={(text) => {
                passwordRef.current = text;
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={async () => {
                const resp = await appSignUp(
                  emailRef.current,
                  passwordRef.current,
                  firstNameRef.current + ' ' + lastNameRef.current
                );
                if (resp?.user) {
                  router.replace('/homePage');
                } else {
                  console.log(resp.error);
                  Alert.alert(
                    'Erro ao tentar criar conta',
                    resp.error?.message
                  );
                }
              }}
            >
              <Text style={styles.buttonLabel}>Criar conta</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                AuthStore.update((user) => {
                  user.isLoggedIn = false;
                });
                router.back();
              }}
            >
              <Text style={styles.buttonLabel}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
