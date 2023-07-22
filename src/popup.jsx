import React from 'react'
import { createRoot } from 'react-dom/client'

function Popup() {
    return (
        <div>
            <h1>Hello Extensions</h1>
            <p>This is the React chrome extension boilerplate</p>
        </div>
    )
}

const root = createRoot(document.getElementById('react-target'))
root.render(<Popup />)