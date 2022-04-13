import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC2m22fSKQHQGrHovrp1CxRSNumrISfK60',
  authDomain: 'blog-14d78.firebaseapp.com',
  projectId: 'blog-14d78',
  storageBucket: 'blog-14d78.appspot.com',
  messagingSenderId: '659398076545',
  appId: '1:659398076545:web:507a7196cddc07a07fc580'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth: any = getAuth();
