
import Friend from './Friend'
function FriendsList({ friends, onSelectedFriend, showfriends }) {
    const d = showfriends
    
    return (
        <>
            <ul>
                {
                    friends.map((friend) =>
                        <Friend friend={friend} key={friend.id} onSelectedFriend={onSelectedFriend} d={d} />
                    )
                }
            </ul>
        </>
    )
}

export default FriendsList