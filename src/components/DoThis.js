import React from 'react'

function DoThis({ doThis }) {
  return (
    <div>
        {doThis ?
            <div>
                <h1>{doThis}</h1>
            </div>
        : null }
    </div>
  )
}

export default DoThis