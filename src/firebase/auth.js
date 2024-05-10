import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseconfig";

export const signIn=async(e)=>{
    const provider= await new GoogleAuthProvider();
    const result=signInWithPopup(auth,provider);
    return result;
    
}
export const signOut=async(e)=>{
    return auth.signOut()
}