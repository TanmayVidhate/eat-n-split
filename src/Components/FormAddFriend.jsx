import  { useState } from 'react'
import Button from './Button'

function FormAddFriend() {
  const [name,setName] = useState("")
  const [img,setImg] = useState("")

  
  return (
    <>
        <form className='form-add-friend'>
            <label>👩🏻‍🤝‍👩🏻 Friend Name</label>
            <input type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>

            <label>📸 Img URL</label>
            <input type='text' value={img} onChange={(e) => {setImg(e.target.value)}}/>

            <Button>Add</Button>
        </form>
    </>
  )
}

export default FormAddFriend