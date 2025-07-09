import React from 'react'
import Button from './Button';
function Friend({ friend,onSelectedFriend, d }) {

    const isSelected = d == friend.id

    return (
        <>
            <li className={isSelected ? 'selected' : ''}>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>
                {
                    friend.balance < 0 ? <p className='red' >You own {friend.name} {Math.abs(friend.balance)}</p> : friend.balance > 0 ? <p className='green'>{friend.name} own {friend.balance}</p> : friend.balance === 0 ? <p>You and {friend.name} are even</p> : null
                }
                <Button onClick={() =>onSelectedFriend(friend)}>{!isSelected ? "Select" : "Close"}</Button>
            </li>
        </>
    )
}

export default Friend