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

export const createUserProfileDocument = async (userAuth, additionalData) => {

        if (!userAuth) return;
      
      
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
      
      
        const snapShot = await userRef.get();
      
      
      
        if (!snapShot.exists) {
      
          const { displayName, email } = userAuth;
      
          const createdAt = new Date();
      
          try {
      
            await userRef.set({
      
              displayName,
      
              email,
      
              createdAt,
      
              ...additionalData
      
            });
      
          } catch (error) {
      
            console.log('error creating user', error.message);
      
          }
      
        }
      
      
      
        return userRef;
      
      };
      

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
