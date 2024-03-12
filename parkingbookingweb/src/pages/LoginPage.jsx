import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

function LoginPage() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <Login/>
        </div>
    )
}

export default LoginPage