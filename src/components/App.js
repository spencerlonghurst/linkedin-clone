import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import Notifications from './Notifications/Notifications';
import Messaging from './Messaging/Messaging';
import Jobs from './Jobs/Jobs';
import MyNetwork from './My-Network/MyNetwork'
import NavBar from './Nav/NavBar';
import './App.css'
import useLocalStorageState from 'use-local-storage-state';

function App() {
  const [theme, setTheme] = useLocalStorageState('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <Router>

      <div className='main_app'  data-theme={theme}>
          <NavBar />
        <Routes>
          <Route path='/notifications' element={<Notifications />}/>
          <Route path='/messaging' element={<Messaging />}/>
          <Route path='/jobs' element={<Jobs />}/>
          <Route path='/mynetwork' element={<MyNetwork />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>

    </Router>
  )
}

export default App