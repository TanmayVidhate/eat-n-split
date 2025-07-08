import { useState } from 'react'
// import './App.css'
import FriendsList from '../Components/FriendsList'
import FormAddFriend from '../Components/FormAddFriend'
function App() {

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList />
          <FormAddFriend />
        </div>
      </div>
    </>
  )
}

export default App
