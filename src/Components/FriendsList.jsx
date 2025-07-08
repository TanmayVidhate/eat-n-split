import React from 'react'
import initialFriends from "../../public/data"

import Friend from './Friend'
function FriendsList() {
    const peoples = initialFriends; 
  return (
    <>
        <ul>
            {
                peoples.map((friend) => 
                    <Friend friend = {friend} key={friend.id}/>
                )
            }
        </ul>
    </>
  )
}

export default FriendsList