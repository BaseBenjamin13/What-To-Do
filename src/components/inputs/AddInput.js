import React from 'react';
import Input from './Input';

function AddInput({ inputs, setInputs }) {

    const addInput = (e) => {
        e.preventDefault();
        setInputs([...inputs, <Input/>])
    }

  return (
    <div>
        <button className="add-input-btn" onClick={addInput}>+</button>
    </div>
  )
}

export default AddInput