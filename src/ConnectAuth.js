import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWzfT9V_qH_uUR8_UBeXzsir6kj-hCCqY",
  authDomain: "fir-auth-ag.firebaseapp.com",
  projectId: "fir-auth-ag",
  storageBucket: "fir-auth-ag.appspot.com",
  messagingSenderId: "75626817932",
  appId: "1:75626817932:web:b8dba9b84a2f6c12368ea9",
};

export const app = initializeApp(firebaseConfig);
