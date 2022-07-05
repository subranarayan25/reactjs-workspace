// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth,GoogleAuthProvider,signInWithPopup,signInWithRedirect } from "firebase/auth"

//doc=get document instance
import { getFirestore, doc, getDoc,setDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-EtVbCfDGna6l2NoxxWFPKHlzpSuz3Q4",
  authDomain: "fakemart-app.firebaseapp.com",
  projectId: "fakemart-app",
  storageBucket: "fakemart-app.appspot.com",
  messagingSenderId: "543798763600",
  appId: "1:543798763600:web:cf1b081b9ff5f917a27155"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:"select_account"
});

export const auth=getAuth(firebaseApp)
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);

//get an instance of firestore database which directly points to the console in google
export const firestoreDB=getFirestore()

export const createUserDocOutOfAuth=async(userAuth)=>{
    const userDocRef = doc(firestoreDB,'users',userAuth.uid)
    // console.log('userDocRef is:',userDocRef);
    const userSnapshot = await getDoc(userDocRef)
    // console.log(userSnapshot)
    // console.log(userSnapshot.exists())
    if (!userSnapshot.exists()) {
        const {displayName, email}=userAuth;
        const createDt = new Date();
        try {
            await setDoc(userDocRef, {displayName,email,createDt});
        } catch (ex) {
            console.log('error creating the user',ex.message);
        }
    } 
    return userDocRef;
}

