import React, { useState } from 'react';

import Input from './inputs/Input';
import AddInput from './inputs/AddInput';
import RemoveInput from './inputs/RemoveInput';

function CouldDo() {

    const [inputs, setInputs] = useState([<Input/>, <Input />]);
    const [couldDos, setCouldDos] = useState([])

    return (
        <div>
            <form >
                {inputs.map((input) => { 
                    return input
                })}
                <AddInput inputs={inputs} setInputs={setInputs} />
                <RemoveInput inputs={inputs} setInputs={setInputs} />

            </form>
        </div>
    )
}

export default CouldDo