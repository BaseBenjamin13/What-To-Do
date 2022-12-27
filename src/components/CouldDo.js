import React, { useState } from 'react';
import '../style/CouldDo.css';

import Input from './inputs/Input';
import AddInput from './inputs/AddInput';
import RemoveInput from './inputs/RemoveInput';

function CouldDo({ handleSubmit, doThis }) {

    const [inputs, setInputs] = useState([<Input/>, <Input />]);
    const [couldDos, setCouldDos] = useState([])
    

    const handleChange = (e, index) => {
        e.preventDefault();
        const values = [...couldDos];
        values[index] = e.target.value;
        setCouldDos(values);
    };

    return (
        <div className="coulddo-container">



            <form onSubmit={(e) => handleSubmit(e, couldDos)}>
                {inputs.map((input, i) => {
                    return <Input key={i} value={couldDos[i]} handleChange={handleChange} index={i} />
                })}
                <div className="input-btns-container">
                    <AddInput inputs={inputs} setInputs={setInputs} />
                    <RemoveInput inputs={inputs} setInputs={setInputs} />
                </div>

                <button type="submit" className="submit-btn">What Should I Do</button>

            </form>
        </div>
    )
}

export default CouldDo