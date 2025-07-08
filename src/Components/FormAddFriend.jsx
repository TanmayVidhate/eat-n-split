import React from 'react'
import Button from './Button'

function FormAddFriend() {
  return (
    <>
        <form className='form-add-friend'>
            <label>👩🏻‍🤝‍👩🏻Friend Name</label>
            <input type='text'/>

            <label>📸 Img URL</label>
            <input type='text'/>

            <Button>Add</Button>
        </form>
    </>
  )
}

export default FormAddFriend