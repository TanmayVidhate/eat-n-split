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
  const [showfriends,setShowFrinds] = useState(null)
  
  
  const handleFormOpen = () => {
    setIsOpenFormAddFriend((isOpenFormAddFriend) =>!isOpenFormAddFriend 
  )}

  const handleAddNewFriend = (newFriend) =>{
    setFriends((friends) => [...friends, newFriend])
    setIsOpenFormAddFriend(false) // after data add in list then from hide
  }

  const handleSelectFriend = (friend) =>{
    setShowFrinds((curr) => curr?.id === friend?.id ? null : friend)
    setIsOpenFormAddFriend(false)
  }


  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList friends={friends} onSelectedFriend = {handleSelectFriend} showfriends={showfriends?.id} />
          {
            isOpenFormAddFriend && <FormAddFriend onAddNewFriend = {handleAddNewFriend} /> 
          }
          
          <Button onClick = {() => handleFormOpen()} >{isOpenFormAddFriend ? "close" : "Add friend"}</Button>
        </div>
          {
            showfriends?.id && <FormBillSplit friend={showfriends} /> 
          }
      </div>
    </>
  )
}

export default App
