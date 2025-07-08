import { useState } from 'react'
// import './App.css'
import FriendsList from '../Components/FriendsList'
function App() {

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList />
        </div>
      </div>
    </>
  )
}

export default App
