import React from 'react'
import login_img from '../images/login-page-img.png'

function Register() {
    return (
        <main className='flex flex-row mx-1 lg:mx-16 lg:my-4 items-center'>
            <div className='w-1/2 hidden lg:block content-center'><img className='m-12' src={login_img} alt="" /></div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register to Parking Go
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                User Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Mail Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className='flex justify-between gap-2'>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                        Full Name
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        autoComplete="fullname"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                        Phone
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="number"
                                        autoComplete="phone"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-8">
                                <label className='className="block text-sm font-medium leading-4 text-gray-900"'>
                                    <input className='h-3 w-3' type="checkbox" name="gender" value="male" />
                                    <span className='ml-4'>Male</span>
                                </label>
                                <label className='className="block text-sm font-medium leading-4 text-gray-900"'>
                                    <input className='h-3 w-3' type="checkbox" name="gender" value="female" />
                                    <span className='ml-4'>Female</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    {/* <p className="mt-10 text-center text-sm text-gray-500">
                            Don't have account?{' '}
                            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Register now!
                            </a>
                        </p> */}
                </div>
            </div>
        </main>
    )
}

export default Register