import React from 'react'

function RemoveInput({ inputs, setInputs }) {

    const removeInput = (e) => {
        e.preventDefault();
        setInputs(inputs.slice(0, -1));
    }

  return (
    <div>
        <button onClick={removeInput}>-</button>
    </div>
  )
}

export default RemoveInput