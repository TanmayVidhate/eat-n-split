import { useState } from 'react'
import Button from './Button'
 import { ToastContainer, toast } from 'react-toastify';

function FormAddFriend({onAddNewFriend}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")

  const handleFriendAddData = (e) => {

    e.preventDefault();

    if (!name || !image) {
      toast.error("Please Enter Name and Image 💀")
      return null
    }

    const id = Date.now() % 100
    let newData = { id, name, image: `${image}=${id}`, balance: 0 }
    onAddNewFriend(newData)
    
    setName("")
    setImage("https://i.pravatar.cc/48")
  }

  return (
    <>
      <form className='form-add-friend' onSubmit={handleFriendAddData}>
        <label>👩🏻‍🤝‍👩🏻 Friend Name</label>
        <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />

        <label>📸 Img URL</label>
        <input type='text' value={image} onChange={(e) => { setImage(e.target.value) }} />

        <Button>Add</Button>
      </form>
      <ToastContainer/>
    </>
  )
}

export default FormAddFriend