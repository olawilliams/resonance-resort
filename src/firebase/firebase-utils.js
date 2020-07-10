import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDVX2z9tmfoOQk-h1E3t9NRw_Bz1QKcHH0",
    authDomain: "resonance-resort.firebaseapp.com",
    databaseURL: "https://resonance-resort.firebaseio.com",
    projectId: "resonance-resort",
    storageBucket: "resonance-resort.appspot.com",
    messagingSenderId: "1061872721301",
    appId: "1:1061872721301:web:d7c78cfc577ed605fbea9c",
    measurementId: "G-SXPGQD9Z8J"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();

 export const googleProvider =  new firebase.auth.GoogleAuthProvider();
      googleProvider.setCustomParameters({
        'login_hint': 'user@example.com'
      });

 export const facebookProvider = new firebase.auth.FacebookAuthProvider();
      facebookProvider.setCustomParameters({
      'display': 'popup'
    });

    export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.collection('users').doc(`${userAuth.uid}`)

      const snapShot = await userRef.get()

      if(!snapShot.exists) {
        try {
          const { name, email, uid } = userAuth;
          const date = new Date();
          userRef.set({
            name,
            email,
            date,
            id: uid,
            ...additionalData
          })
        } catch(error) {
          console.log(error)
        }
      }

      return userRef;
    }


  export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    });

    batch.commit()
  }


  export const getImages = async () => {
    const listImagesRef = storage.ref('images') 

    try {
      const listImages = await listImagesRef.listAll();

     listImages.prefixes.forEach(folderRef => {
        folderRef.listAll()
      })
      
       listImages.items.forEach(itemRef => {
        const url = itemRef.getDownloadURL()
        // console.dir(url)
      

      })
      

      // listRef.listAll().then(function(res) {
      //   res.prefixes.forEach(function(folderRef) {
      //     // All the prefixes under listRef.
      //     // You may call listAll() recursively on them.
      //   });
      //   res.items.forEach(function(itemRef) {
      //     // All the items under listRef.
      //   });
      // }).catch(function(error) {
      //   // Uh-oh, an error occurred!
      // });
}
     catch(error) {
      console.log(error)
    } finally{
      console.log('iam called')
    }
      
  }

  // const pathRef = storage.ref();

  // try {
  //  const imageUrl = await pathRef.child('images').listAll().getDownloadURL();
  //  console.log(imageUrl)
  //   return imageUrl;
  // } catch(error) {
  //   console.log(error)
  
  
  

  