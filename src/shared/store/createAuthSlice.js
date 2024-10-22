import { GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { auth } from '../firebase'

export const createAuthSlice = (set) => ({
  userId: null,
  userName: null,
  email: null,
  photoURL: null,
  isLogin: false,
  stsTokenManager: null,
  action: {
    loginWithGoogle: async () => {
      const provider = new GoogleAuthProvider();
      setPersistence(auth, browserSessionPersistence);
      const responseSignIn = await signInWithPopup(auth, provider);
      const { user } = responseSignIn;

      set({
        isLogin: true,
        userId: user.uid,
        userName: user.displayName,
        photoURL: user.photoURL,
      })
    },
    logout: () => set({
      isLogin: false,
      userId: null,
      userName: null,
    }),
  }
});
