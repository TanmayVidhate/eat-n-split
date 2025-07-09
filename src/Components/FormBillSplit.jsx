import React from 'react'
import Button from './Button'

function FormBillSplit({ friend }) {
  return (
    <>
        <form className='form-split-bill'>
            <h2>Split a bill with {friend.name}</h2>
            
            <label>💳 Bill value</label>
            <input type='text'/>

            <label>🤵 Your expense</label>
            <input type='text'/>

            <label>🤵 {friend.name}'S expense</label>
            <input type='text' disabled/>

            <label>💲 Who is Paying the bill</label>
            <select>
                <option>You</option>
                <option>Friend {friend.name}</option>
            </select>
            <Button>Split bill</Button>
        </form>
    </>
  )
}

export default FormBillSplit