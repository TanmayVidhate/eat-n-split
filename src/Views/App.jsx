import { useState } from 'react'
// import './App.css'
import FriendsList from '../Components/FriendsList'
import FormAddFriend from '../Components/FormAddFriend'
import Button from '../Components/Button'
import FormBillSplit from "../Components/FormBillSplit"
function App() {
  const [isOpenFormAddFriend , setIsOpenFormAddFriend] = useState(false)

  const handleFormOpen = () => {
    setIsOpenFormAddFriend((isOpenFormAddFriend) =>!isOpenFormAddFriend 
  )
    
  }

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList />
          {
            isOpenFormAddFriend ? <FormAddFriend /> : <p>{""}</p>
          }
          
          <Button onClick = {() => handleFormOpen()} >Add friend</Button>
        </div>
      <FormBillSplit/>
      </div>
    </>
  )
}

export default App
