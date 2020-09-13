import React, { useState } from 'react';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { hendleGoogleSignIn, initializeLoginFramework, hendleSignOut, handleFBSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';

function Login() {

const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignIn:false,
    newUser: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })

  initializeLoginFramework();      

  const [loggrdInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
 const location = useLocation();
  let { from } = location.state || { form : { pathname: "/"}};

   const googleSignIn = () => {
     hendleGoogleSignIn()
     .then(res => {
      hendleResponse(res, true);

      })
   }

   const fbSignIn = () => {
     handleFBSignIn()
     .then(res => {
      hendleResponse(res, true);

      })
   }
   const signOut = () => {
      hendleSignOut()
      .then(res => {
        hendleResponse(res, false);
      })
   }
   
   const hendleResponse = (res, redirect) => {
    setUser(res)
    setLoggedInUser(res)
    if (redirect) {
      history.replace(from);
    }
   }
  const hendleBlue = (e) => {
     
        let isFieldValid = true;
        if (e.target.name === "email" ) {
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
        if (e.target.name === 'password' ) {
           const isPasswordValid = e.target.value.length > 6;
           const passwordHasNumber = /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber;
        }

     if (isFieldValid){
       const newUserInfo = {...user};
         newUserInfo[e.target.name] = e.target.value;
         setUser(newUserInfo)

        }
      }
      const hendleSubmit = (e) => {
        if (!newUser && user.email && user.password) {
          createUserWithEmailAndPassword(user.name, user.email, user.password)
          .then(res => {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
          })
        }
        
        if (!newUser && user.email && user.password) {
          signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            hendleResponse(res, true);

          })
        }
         e.preventDefault();
      }
          
      
  return (
    <div style={{textAlign:"center"}}>
      {
        user.isSignIn ? <button onClick={signOut}>sign out</button> :
      <button onClick={googleSignIn}>sign in</button>
      }
      <br/>
      <button onClick={fbSignIn}>facebook sign in</button>
      {
        user.isSignIn && <div>
          <p>WellCome, {user.name}</p>
          <p>your email: {user.email}</p>
          <img style={{width:"100px"}} src={user.photo} alt=""/>

        </div>
      }

      <h1>Our Own Authentication</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser"> New user sign-up</label>

      <form onSubmit={hendleSubmit}>
      
      {newUser && <input type="text" name="name" onBlur={hendleBlue} placeholder=" add your name" />}
           
      <br/>
      <input type="text" name="email" onBlur={hendleBlue} placeholder=" add your email" required/>
      <br/>
      <input type="password" name="password" onBlur={hendleBlue} placeholder=" add your password " required id=""/>
      <br/>
      <input type="submit" value={newUser ? 'sign-up' : 'sign-in'}/>
      </form>
      <p style={{color:"red"}}>{user.error}</p>
      {user.success && <p style={{color:"green"}}>User { newUser ? 'created' : 'Logged in'} successfully</p>
}
      
    </div>
  );
};

export default Login;


