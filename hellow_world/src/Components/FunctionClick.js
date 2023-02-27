import React from 'react'

const FunctionClick = (props) => {
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
