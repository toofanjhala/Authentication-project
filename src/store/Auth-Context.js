import React ,{useState}from 'react'


const Authcontext=React.createContext({
  token:"",
  isLoggein:false,
  login:(token)=>{},
  logout:()=>{}
})

export const AuthContextProvider = (props) => {

  const [token,settoken]=useState(null)

  const isloggedinboolean=!!token

  function loginhandler(token){
    settoken(token)
  }
  function logouthandler(){
    settoken(null)
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