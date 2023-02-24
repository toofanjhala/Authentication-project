import classes from './ProfileForm.module.css';
import React,{useRef,useContext} from 'react';
import Authcontext from '../../store/Auth-Context';

const ProfileForm = () => {

  const ctx=useContext(Authcontext)

const newpasswordref=useRef("")
function submitHandler(event){
 event.preventDefault()
 
 const enterednewpasswrd=newpasswordref.current.value

 fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDI-gNhpFiP3Qu0SyCNBU_4XU1ghwSXVnw",
  {
    method: "POST",
    body: JSON.stringify({
      idToken: ctx.token,
      password: enterednewpasswrd,
      returnSecureToken: false
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    console.log(res)
    alert("password change successfully")
  })


}

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' min-length="7" ref={newpasswordref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
