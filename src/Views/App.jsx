import { useState } from 'react'
// import './App.css'
import FriendsList from '../Components/FriendsList'
import FormAddFriend from '../Components/FormAddFriend'
import Button from '../Components/Button'
import FormBillSplit from "../Components/FormBillSplit"
function App() {

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList />
          <FormAddFriend />
          <Button>Add friend</Button>
        </div>
      <FormBillSplit/>
      </div>
    </>
  )
}

export default App
