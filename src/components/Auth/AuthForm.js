import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';



const AuthForm = () => {
  const emailref = useRef("")
  const passwordref = useRef("")
  const [isLogin, setIsLogin] = useState(true);
  const [request, setrequest] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  function submithandler(event) {
    setrequest(true)
    event.preventDefault();

    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;



    let url;

    if (isLogin) {

      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDI-gNhpFiP3Qu0SyCNBU_4XU1ghwSXVnw"

    }
    else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDI-gNhpFiP3Qu0SyCNBU_4XU1ghwSXVnw"
    }
    fetch(url,
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredemail,
          password: enteredpassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        setrequest(false)
        if (res.ok) {
          return res.json()
        }
        else {
          return res.json().then((data) => {

            let error = "Authentication failed"
            throw new Error(error)

          })
        }

      }).then((data) => {
        console.log(data)
      })
      .catch((Err) => {
        alert(Err.message)
      })
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailref} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordref}
          />
        </div>
        <div className={classes.actions}>
          {request ? <p> Request sending</p> : <button onClick={submithandler}>Login</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >

            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>

        </div>
      </form>
    </section>
  );
};



export default AuthForm;
