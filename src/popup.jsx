import React from 'react'
import { createRoot } from 'react-dom/client'

function Popup() {
    const OpenGoogleOnTab = () => {
        // This allows us to use the Chrome Tabs API.
        // https://developer.chrome.com/docs/extensions/reference/tabs/ For more information.
        chrome.tabs.create({
            url: "https://www.google.com/"
        })
    }

    return (
        <div>
            <h1>Hello Extensions</h1>
            <p>This is the React chrome extension boilerplate</p>
            <span>Go to <a href="" onClick={OpenGoogleOnTab}>https://www.google.com/</a> and look if it's work!</span>
        </div>
    )
}

const root = createRoot(document.getElementById('react-target'))
root.render(<Popup />)