import React from 'react';
import Input from './Input';

function AddInput({ inputs, setInputs }) {

    const addInput = (e) => {
        e.preventDefault();
        setInputs([...inputs, <Input/>])
    }

  return (
    <div>
        <button onClick={addInput}>+</button>
    </div>
  )
}

export default AddInput