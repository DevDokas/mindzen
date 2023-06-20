import { Stack, useRouter } from 'expo-router';
import { useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';

import { AuthStore, appSignUp } from '../config/store';

export default function RegisterPage(): any {
  const router = useRouter();
  const emailRef = useRef('');
  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const passwordRef = useRef('');

  const styles = StyleSheet.create({
    container: {},
    main: { marginTop: 128, marginBottom: 72 },
    text: {}
  });

  return (
    <View>
      <Stack.Screen
        options={{ title: 'Criar conta', headerLeft: () => <></> }}
      />
      <View style={styles.main}>
        <Text>Email</Text>
        <TextInput
          placeholder="email"
          nativeID="email"
          onChangeText={(text) => {
            emailRef.current = text;
          }}
        />
        <Text>First name</Text>
        <TextInput
          placeholder="firstName"
          nativeID="firstName"
          onChangeText={(text) => {
            firstNameRef.current = text;
          }}
        />
        <Text>Last name</Text>
        <TextInput
          placeholder="lastName"
          nativeID="lastName"
          onChangeText={(text) => {
            lastNameRef.current = text;
          }}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          nativeID="password"
          onChangeText={(text) => {
            passwordRef.current = text;
          }}
        />
        <Text
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
              Alert.alert('Erro ao tentar criar conta', resp.error?.message);
            }
          }}
        >
          Criar conta
        </Text>
        <Text
          onPress={() => {
            AuthStore.update((user) => {
              user.isLoggedIn = false;
            });
            router.back();
          }}
        >
          Cancelar
        </Text>
      </View>
    </View>
  );
}
