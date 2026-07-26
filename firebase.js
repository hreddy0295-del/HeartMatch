
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4Kt8vtK5-ri2lHzcCBIHppufkdv34fsk",
  authDomain: "heart-match-matrimony.firebaseapp.com",
  projectId: "heart-match-matrimony",
  storageBucket: "heart-match-matrimony.firebasestorage.app",
  messagingSenderId: "107208388464",
  appId: "1:107208388464:web:2170fb1413d3281b0469b5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
