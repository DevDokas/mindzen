import { useRouter, useSegments } from 'expo-router';
import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext(null);

export function useAuth(): any {
  return React.useContext(AuthContext);
}

function useProtectedRoute(user: any): void {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (!user && !inAuthGroup) {
      router.replace('/screens/pageLogin');
    } else if (user && inAuthGroup) {
      router.replace('/screens/pageProfile');
    }
  }, [user, segments]);
}

export function Provider(props: any): any {
  const [user, setAuth] = useState<any>(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (): any | null => {
          setAuth({});
        },
        signOut: (): any | null => {
          setAuth(null);
        },
        user
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
