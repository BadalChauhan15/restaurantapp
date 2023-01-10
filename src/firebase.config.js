import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDSATUCOC_FkvMHVSyXe9_61cajCPewLwM",
    authDomain: "restaurantapp-6fa92.firebaseapp.com",
    databaseURL: "https://restaurantapp-6fa92-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-6fa92",
    storageBucket: "restaurantapp-6fa92.appspot.com",
    messagingSenderId: "510857714394",
    appId: "1:510857714394:web:ee0acee6fd0910a9cc63e3"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };