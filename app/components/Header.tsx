import { View, Text, StyleSheet } from 'react-native';

import * as color from '../config/colorPalette';
import { AuthStore } from '../config/store';

export default function Header(): any {
  const { user, isLoggedIn }: any = AuthStore.useState();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      height: 128,
      width: '100%',
      top: 0,
      left: 0
    },
    main: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      height: 128,
      width: '100%',
      backgroundColor: color.navBackgroundColor
    }
  });

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View style={styles.main}>
          <View style={styles.bar}>
            <Text>{user?.displayName}</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}
