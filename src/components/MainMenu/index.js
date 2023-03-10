import './styles.scss';


import React from 'react'

export default function MainMenu() {
    return (
        <nav className="main">
            <a href="/">Home</a>
            <a href="/posts">Posts</a>
            <a href="/preferences">Preferences</a>
            <a href="/about">About Us</a>

        </nav>

    )
}

