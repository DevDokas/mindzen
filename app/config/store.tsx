import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth/react-native';
import { doc, setDoc } from 'firebase/firestore';
import { Store, registerInDevtools } from 'pullstate';

import { FIREBASE_AUTH, FIRESTORE_DB } from './firebaseConfig';

export const AuthStore = new Store({
  isLoggedIn: false,
  isLoading: false,
  initialized: false,
  user: null,
  userName: null,
  userLastname: null
});

const unsub = onAuthStateChanged(FIREBASE_AUTH, (user: any) => {
  console.log('onAuthStateChange', user);
  AuthStore.update((store) => {
    store.user = user;
    store.isLoggedIn = user ? true : false;
    store.isLoading = false;
    store.initialized = true;
  });
});

export const appSignIn = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const resp = await signInWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );
    AuthStore.update((store: any) => {
      store.user = resp.user;
      store.isLoggedIn = resp.user ? true : false;
      store.isLoading = true;
    });
    return { user: FIREBASE_AUTH.currentUser };
  } catch (e) {
    return { error: e };
  }
};

export const appSignOut = async (): Promise<any> => {
  try {
    await signOut(FIREBASE_AUTH);
    AuthStore.update((store) => {
      store.user = null;
      store.isLoggedIn = false;
      store.isLoading = false;
      store.initialized= false
    });
    return { user: null };
  } catch (e) {
    return { error: e };
  }
};

export const appSignUp = async (
  email: string,
  password: string,
  displayName: string
): Promise<any> => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FIREBASE_AUTH,
      email,
      password
    );

    await updateProfile(resp.user, { displayName });

    AuthStore.update((store: any) => {
      store.user = FIREBASE_AUTH.currentUser;
      store.isLoggedIn = true;
      store.initialized = true
    });

    const usersDB = doc(FIRESTORE_DB, 'users', resp.user.uid);
    const splitName: any =  resp.user.displayName?.split(' ')
    const firstName = splitName[0]
    const lastName = splitName[1]

    console.log(firstName)
    console.log(usersDB)

    const addUsers = async (): Promise<any> => {
      setDoc(usersDB, {
        name: firstName,
        lastname: lastName
      }).then(docRef => {console.log('Added', docRef)}).catch(e => console.log(e));
    };
    addUsers()

    return { user: FIREBASE_AUTH.currentUser };
  } catch (e) {
    return { error: e };
  }
};

registerInDevtools({ AuthStore });
