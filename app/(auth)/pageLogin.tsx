import { Link, useRouter } from 'expo-router';
import { useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

import { appSignIn } from '../config/store';

export default function LoginPage(): any {
  const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    main: {
      marginTop: 128,
      marginBottom: 72,
      paddingTop: 150
    },
    pageTitle: {
      fontSize: 48
    },
    textInput: {
      borderBottomWidth: 1,
      borderBottomColor: '#141414',
      fontSize: 18
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.pageTitle}>Login</Text>
        <View>
          <Text>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              emailRef.current = text;
            }}
          />
        </View>
        <View>
          <Text>Senha</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            onChangeText={(text) => {
              passwordRef.current = text;
            }}
          />
        </View>
        <Button
          title="Login"
          onPress={async () => {
            const resp = await appSignIn(emailRef.current, passwordRef.current);
            if (resp?.user) {
              router.replace('/(tabs)/pageHome');
            } else {
              console.log(resp.error);
              Alert.alert('Login error: ', resp.error?.message);
            }
          }}
        />
        <Button
          title="Cadastrar-se"
          onPress={() => {
            router.push('/(auth)/pageRegister');
          }}
        />
      </View>
    </View>
  );
}
