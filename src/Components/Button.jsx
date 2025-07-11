import React from 'react'

function Button({ onClick, children }) {

    return (
        <>
            <button className='button' onClick={onClick}>{children}</button>
        </>
    )
}

export default Button