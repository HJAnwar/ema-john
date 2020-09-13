import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebsase.config';

export const initializeLoginFramework = () =>{
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
    
}

export const hendleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, email, photoURL} = res.user;
      const signInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
      }
      return signInUser;
    })
    .catch(error => {
      console.log(error);
      console.log(error.message);
    })
  }
 export const handleFBSignIn = () => {
    const  fbprovider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(fbprovider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      user.success = true;
      return user;
      
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

  }

  export const hendleSignOut = () => {
  return firebase.auth().signOut()
  .then( res  => {
  const signOutUser ={
   
    name: '',
    email: '',
    photo: '', 
    error: '',
    success: ''

  }
  return signOutUser;
  })
  .catch(error => {
    // an error happened
  })
}

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
          .then( res => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            newUserInfo.success = true;
            updateUserName(name);
            return newUserInfo;

          })
          .catch(error => {
           const newUserInfo = {};
           newUserInfo.error = error.message;
           newUserInfo.success = false;
           return newUserInfo;
          
          });
}

export const signInWithEmailAndPassword = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password)
          
          .then( res => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            newUserInfo.success = true;
            return newUserInfo;
          })
          .catch(function(error) {
            
            const newUserInfo = {};
           newUserInfo.error = error.message;
           newUserInfo.success = false;
           return newUserInfo;
          });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
     
    }).then(res =>  {
      console.log('user name updated successfully')
    }).catch(error =>{
      console.log(error)

    });
  }
