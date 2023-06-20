import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth/react-native';
import { Store, registerInDevtools } from 'pullstate';

import { FIREBASE_AUTH } from './firebaseConfig';

export const AuthStore = new Store({
  isLoggedIn: false,
  isLoading: false,
  initialized: false,
  user: null
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
    });

    return { user: FIREBASE_AUTH.currentUser };
  } catch (e) {
    return { error: e };
  }
};

registerInDevtools({ AuthStore });
