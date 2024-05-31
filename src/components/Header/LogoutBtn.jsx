import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/features/authSlice'
const LogoutBtn = () => {
    const dispatch= useDispatch();
    const logoutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
  return (
    <button>logout</button>
  )
}

export default LogoutBtn
