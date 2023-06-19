import * as ImagePicker from 'expo-image-picker';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image
} from 'react-native';

import LoginPage from '../(auth)/pageLogin';
import { FIRESTORE_DB, firebase } from '../config/firebaseConfig';

export default function ProfilePage(): any {
  const [isLoged, setIsLoged] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>();
  const [userLastname, setUserLastname] = useState<string>();
  const [userBirthday, setUserBirthday] = useState<string>();
  const [userPhoto, setUserPhoto] = useState<any>(null);
  const [userPhotoSelected, setUserPhotoSelected] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  // Image Picker

  const pickImage = async (): Promise<any> => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão de acesso à galeria negada!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    // console.log(result);

    const source = result.assets?.pop();

    setUserPhoto(source);

    if (source !== null) {
      setUserPhotoSelected(true);
    }
  };
  console.log(userPhoto);

  const uploadImage = async (): Promise<any> => {
    setUploading(true);
    const response = await fetch(userPhoto.uri);
    const blob = await response.blob();
    const filename =
      'user:' + userPhoto.uri.substring(userPhoto.uri.lastIndexOf('/') + 1);
    const ref = firebase.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
    Alert.alert('Foto enviada');
    setUserPhoto(null);
  };
  //

  const usersDB = collection(FIRESTORE_DB, 'users');
  //
  useEffect(() => {
    const subscribers = onSnapshot(usersDB, {
      next: (snapshot) => {}
    });
  }, [usersDB]);
  //

  const addUsers = async (): Promise<any> => {
    const doc = addDoc(usersDB, {
      name: userName,
      lastname: userLastname
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    main: {
      marginTop: 128,
      marginBottom: 72
    },
    title: {
      fontSize: 64,
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: 36,
      color: '#38434D'
    }
  });

  return (
    <View style={styles.container}>
      {isLoged ? (
        <View style={styles.main}>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.subtitle}>My profile</Text>
          {/* Nome */}
          <TextInput
            placeholder="Nome"
            onChangeText={(text: string) => {
              setUserName(text);
            }}
            value={userName}
          />
          {/* Sobrenome */}
          <TextInput
            placeholder="Sobrenome"
            onChangeText={(text: string) => {
              setUserLastname(text);
            }}
            value={userLastname}
          />
          <Button
            onPress={() => addUsers()}
            title="Adicionar usuário"
            disabled={userName === '' && userLastname === ''}
          />
          <Button onPress={() => pickImage()} title="Selecionar imagem" />
          {userPhoto && (
            <Image
              source={{ uri: userPhoto.uri }}
              style={{ width: 300, height: 300 }}
            />
          )}
          <Button onPress={() => uploadImage()} title="Upload da imagem" />
        </View>
      ) : (
        <LoginPage />
      )}
    </View>
  );
}
