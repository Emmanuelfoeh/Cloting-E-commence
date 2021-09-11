import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs, getDoc, setDoc } from "firebase/firestore";

const Config = {
  apiKey: "AIzaSyDCb4oWAqP_P8myHSSDJsjF18LtiIFcFi4",
  authDomain: "clothing-shop-18582.firebaseapp.com",
  projectId: "clothing-shop-18582",
  storageBucket: "clothing-shop-18582.appspot.com",
  messagingSenderId: "112013633944",
  appId: "1:112013633944:web:856daf8fdbe5aba108a3ed",
  measurementId: "G-JL7QBVNLZ7",
};

const app = initializeApp(Config);

export const auth = getAuth();
export const firestore = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const docRef = doc(firestore, `users/${userAuth.uid}`);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return docRef;
};

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
