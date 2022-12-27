import React, { useState } from 'react';
import '../style/CouldDo.css';

import Input from './inputs/Input';
import AddInput from './inputs/AddInput';
import RemoveInput from './inputs/RemoveInput';

function CouldDo() {

    const [inputs, setInputs] = useState([<Input/>, <Input />]);
    const [couldDos, setCouldDos] = useState([])
    const [doThis, setDoThis] = useState()

    const handleChange = (e, index) => {
        e.preventDefault();
        const values = [...couldDos];
        values[index] = e.target.value;
        setCouldDos(values);
        console.log(couldDos);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const randomIndex = Math.floor(Math.random() * couldDos.length);
        await setDoThis(couldDos[randomIndex]);
        console.log(doThis);
    }

    return (
        <div className="coulddo-container">
            <form onSubmit={handleSubmit}>
                {inputs.map((input, i) => {
                    return <Input value={couldDos[i]} handleChange={handleChange} index={i} />
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