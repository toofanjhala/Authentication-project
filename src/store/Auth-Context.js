import React ,{useState}from 'react'
import { useHistory } from 'react-router-dom'


const Authcontext=React.createContext({
  token:"",
  isLoggein:false,
  login:(token)=>{},
  logout:()=>{}
})

export const AuthContextProvider = (props) => {

  const history=useHistory()

  const [token,settoken]=useState(null)

  const isloggedinboolean=!!token

  function loginhandler(token){
    settoken(token)
  }
  function logouthandler(){
    settoken(null)
    history.replace("/auth")

  }

  const contextValue={
    token:token,
    isLoggein:isloggedinboolean,
    login:loginhandler,
    logout:logouthandler
  }
  
  
return(
<Authcontext.Provider value={contextValue}>
  {props.children}
</Authcontext.Provider>
   
  )
}

export default Authcontext;