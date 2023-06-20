import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function LoginPage(): any {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
            setEmail(text);
          }}
        />
        <Text>Senha</Text>
        <TextInput
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Link href={'/(auth)/pageRegister'}>Criar conta</Link>
      </View>
    </View>
  );
}
