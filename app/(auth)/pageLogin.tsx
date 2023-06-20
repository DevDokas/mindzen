import { Link, useRouter } from 'expo-router';
import { useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

import { appSignIn } from '../config/store';

export default function LoginPage(): any {
  const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const styles = StyleSheet.create({
    container: {},
    main: {
      marginTop: 128,
      marginBottom: 72
    }
  });

  return (
    <View>
      <View style={styles.main}>
        <Text>Login</Text>
        <Text>Email</Text>
        <TextInput
          onChangeText={(text) => {
            emailRef.current = text;
          }}
        />
        <Text>Senha</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => {
            passwordRef.current = text;
          }}
        />
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
        <Link href={'/(auth)/pageRegister'}>Criar conta</Link>
      </View>
    </View>
  );
}
