import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
        apiKey: "AIzaSyB8t88ZsziHfrbNczHg-suUXClMHfPytM4",
        authDomain: "crwn-db-4a3e5.firebaseapp.com",
        databaseURL: "https://crwn-db-4a3e5.firebaseio.com",
        projectId: "crwn-db-4a3e5",
        storageBucket: "crwn-db-4a3e5.appspot.com",
        messagingSenderId: "102404452029",
        appId: "1:102404452029:web:fee11a429d02f79be2d1d4",
        measurementId: "G-22FZYJ37JP"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
