import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../service/Firebase";
import type { User } from "firebase/auth";

export type UserProfile = {
  uid: string;
  email: string | null;
  displayName: string | null;
  createdAt: any; 
  role: "user" | "admin";
};

export async function createUserProfileIfNeeded(user: User , name:string ) {
  const ref = doc(db, "Student_Detail", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    const profile: UserProfile = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName ?? name,
      createdAt: serverTimestamp(),
      role: "user",
    };
    await setDoc(ref, profile);
  }
}
