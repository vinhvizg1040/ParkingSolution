import React from 'react'
import Navbar from '../components/Navbar'
import Register from '../components/Register'

function RegisterPage() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <Register/>
        </div>
    )
}

export default RegisterPage