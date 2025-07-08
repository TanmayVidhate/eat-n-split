import React from 'react'
import Button from './Button';
function Friend({ friend: { id, name, image, balance } }) {
    return (
        <>
            <li>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                {
                    balance < 0 ? <p className='red' >You own {name} {Math.abs(balance)}</p> : balance > 0 ? <p className='green'>{name} own {balance}</p> : balance === 0 ? <p>You and {name} are even</p> : null
                }
                <Button>Select</Button>
            </li>
        </>
    )
}

export default Friend