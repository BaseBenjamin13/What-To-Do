import React, { useState } from 'react';
import '../style/CouldDo.css';

import Input from './inputs/Input';
import AddInput from './inputs/AddInput';
import RemoveInput from './inputs/RemoveInput';

function CouldDo() {

    const [inputs, setInputs] = useState([<Input/>, <Input />]);
    const [couldDos, setCouldDos] = useState([])

    return (
        <div className="coulddo-container">
            <form >
                {inputs.map((input) => { 
                    return input
                })}
                <div className="input-btns-container">
                    <AddInput inputs={inputs} setInputs={setInputs} />
                    <RemoveInput inputs={inputs} setInputs={setInputs} />
                </div>

            </form>
        </div>
    )
}

export default CouldDo