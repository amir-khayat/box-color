import React from 'react'

const Box = (props) => {
    const { boxes } = props
    return (
        <div>
            <h1>Box</h1>
            {boxes.map((box, i) => {
                return (
                    <div key={i} style={{ width: '100px', height: '100px', border: '1px solid black', margin: '20px', padding: '20px', backgroundColor: box, display: 'inline-block' }}></div>
                )
            }
            )}
        </div>
    )
}

export default Box