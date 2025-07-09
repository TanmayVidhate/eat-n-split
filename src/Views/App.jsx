import { useState } from 'react'
// import './App.css'
import FriendsList from '../Components/FriendsList'
import FormAddFriend from '../Components/FormAddFriend'
import Button from '../Components/Button'
import FormBillSplit from "../Components/FormBillSplit"

import initialFriends from "../../public/data"

function App() {
  const [friends,setFriends] = useState(initialFriends) //lifting up state 
  const [isOpenFormAddFriend , setIsOpenFormAddFriend] = useState(false)
  

  const handleFormOpen = () => {
    setIsOpenFormAddFriend((isOpenFormAddFriend) =>!isOpenFormAddFriend 
  )}

  const handleAddNewFriend = (newFriend) =>{
    setFriends((friends) => [...friends, newFriend])
    setIsOpenFormAddFriend(false) // after data add in list then from hide
  }

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList friends={friends} />
          {
            isOpenFormAddFriend ? <FormAddFriend onAddNewFriend = {handleAddNewFriend} /> : <p>{""}</p>
          }
          
          <Button onClick = {() => handleFormOpen()} >{isOpenFormAddFriend ? "close" : "Add friend"}</Button>
        </div>
      <FormBillSplit/>
      </div>
    </>
  )
}

export default App
