import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../service/Firebase";
import { createUserProfileIfNeeded } from "./users";

export async function signupWithEmail(email: string, password: string , name : string) {
  const cred = await createUserWithEmailAndPassword(auth, email, password );
  await updateProfile(cred.user , {
    displayName : name
  })
  await createUserProfileIfNeeded(cred.user , name); 
  return cred.user;
}

export async function loginWithEmail(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function loginWithGoogle() {
  const cred = await signInWithPopup(auth, googleProvider);
  await createUserProfileIfNeeded(cred.user , "");
  return cred.user;
}

export function logout() {
  return signOut(auth);
}

export function resetPassword(email: string) {
  return sendPasswordResetEmail(auth, email);
}
