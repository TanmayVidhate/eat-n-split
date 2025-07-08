import React from 'react'

function Friend({ friend: { id, name, image, balance } }) {
    return (
        <>
            <li>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                {
                    balance < 0 ? <p className='red' >You own {name} {Math.abs(balance)}</p> : balance > 0 ? <p className='green'>{name} own {balance}</p> : balance === 0 ? <p>You and {name} are even</p> : null
                }
                <button className='button'>Select</button>
            </li>
        </>
    )
}

export default Friend