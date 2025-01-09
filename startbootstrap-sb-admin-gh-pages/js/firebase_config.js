
  // firebase_config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Configuration Firebase (mettez votre configuration ici)
const firebaseConfig = {
    apiKey: "AIzaSyAgGnBU-jj4f0k0Xmj2HmV6liL5V4R11ug",
    authDomain: "tpfirebase-75de8.firebaseapp.com",
    projectId: "tpfirebase-75de8",
    storageBucket: "tpfirebase-75de8.firebasestorage.app",
    messagingSenderId: "927455586687",
    appId: "1:927455586687:web:91f9aff30ff69c82b0924a",
    measurementId: "G-MCXWR3PNTJ"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Exporter les instances Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
