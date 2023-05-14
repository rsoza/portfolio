import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmaj8lQudCk6LVSOl77elXH2vgs1OcTTo",
  authDomain: "portfolio-c42a2.firebaseapp.com",
  projectId: "portfolio-c42a2",
  storageBucket: "portfolio-c42a2.appspot.com",
  messagingSenderId: "954007543991",
  appId: "1:954007543991:web:230ffa192ce60724936d32",
  measurementId: "G-2B3NKCM9EB"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig, {
  auth: {
    cookie: {
      sameSite: 'lax',
      secure: true,
    },
  },
});
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authorization
export const auth = getAuth(app);