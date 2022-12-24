import React, { useState } from 'react';

import Input from './Input';

function CouldDo() {

    const inputs = [<Input/>, <Input />];
    const [couldDos, setCouldDos] = useState([])

    return (
        <div>
            <form >
                {inputs.map((input) => { 
                    return input
                })}

            </form>
        </div>
    )
}

export default CouldDo