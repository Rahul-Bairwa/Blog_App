import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Protected({children, authentication = true }){
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true)
  const authStatus= useSelector(state=>state.auth.status)
  
  useEffect(()=>{
    // TODO: make it more easy to understand
    // if(authStatus===true){
    //   navigate("/")
    // }else if(authStatus===false){
    //   navigate("/login")
    // }
    
    if(authentication && authStatus !==authentication){
navigate("/login")
    }else if(
      !authentication && authStatus !==authentication){
        navigate('/')
      }
},[authStatus,navigate,authentication])
  return (
    <div>Protected</div >
  )
}

export default Protected