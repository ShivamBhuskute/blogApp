import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Header } from './components'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (!authStatus) {
      setLoading(false);
      return;
    }
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-white'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  ) : (<>
  <div>Loading</div>
  </>)
}

export default App
