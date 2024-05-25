import './App.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { Footer, Header } from './components'
import { login, logout } from './store/features/authSlice'
const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then(() => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(()=>setLoading(false))
  }, [])
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400 flex-wrap">
      <div className="w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
