import React from 'react'

function Input({value, onChange, index}) {
  return (
    <div>
        <div>
            <label htmlFor="coulddo">Could Do: </label>
            <input type="text" id="coulddo" value={value || ''} 
                onChange={(e) => onChange(e, index)}
            />
        </div>
    </div>
  )
}

export default Input