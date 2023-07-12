import React from 'react'
import { render } from 'react-dom'

function Popup() {
    return (
        <div>
            <h1>Hello Extensions</h1>
            <p>This is the React chrome extension boilerplate</p>
        </div>
    )
}

render(<Popup />, document.getElementById('react-target'))