import React from 'react'

function Input({value, handleChange, index}) {
  return (
    <div>
        <div>
            <label htmlFor="coulddo">Could Do: </label>
            <input type="text" id="coulddo" value={value || ''} 
                onChange={(e) => handleChange(e, index)}
            />
        </div>
    </div>
  )
}

export default Input