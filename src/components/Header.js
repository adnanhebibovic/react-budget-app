import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>Budget app</h1>
            <ul>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/expenses">Create</NavLink>
                </li>
                <li>
                    <NavLink to="/help">Help</NavLink>
                </li>
            </ul>
        </header>
    )
}