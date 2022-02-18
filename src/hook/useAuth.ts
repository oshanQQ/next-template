import {
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  UserCredential
} from "firebase/auth";
import { firebaseAuth } from "~/infra/firebase";
import { useRecoilValue } from "recoil";
import { authState } from "~/state/auth";

export const useAuth = () => {
  const login = (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(firebaseAuth, provider);
  };

  const logout = (): Promise<void> => {
    return signOut(firebaseAuth);
  };

  return {
    auth: useRecoilValue(authState),
    login,
    logout
  };
};
