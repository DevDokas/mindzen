import { Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function LoginPage(): any {
  const styles = StyleSheet.create({
    container: {},
    main: { marginTop: 128, marginBottom: 72 },
    text: {}
  });

  return (
    <View>
      <View style={styles.main}>
        <Text>Login</Text>
        <Link href="/(auth)/pageRegister"> Clique aqui </Link>
      </View>
    </View>
  );
}
