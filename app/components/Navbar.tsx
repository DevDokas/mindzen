import { Link } from 'expo-router';
import { View, StyleSheet, Image } from 'react-native';

export default function Navbar(): any {
  return (
    <View style={{ flex: 1 }}>
      <Link href="/profile">
        <Image style={styles.image} source={require('../assets/icon.png')} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '1vh'
  },
  image: {
    height: 50
  }
});
