import React, { useState } from 'react';

function CouldDo() {

    const [couldDos, setCouldDos] = useState([])

    return (
        <div>
            <form >
                <label htmlFor="coulddo">Could Do: </label>
                <input type="text" id="coulddo"></input>
                <br></br>

            </form>
        </div>
    )
}

export default CouldDo