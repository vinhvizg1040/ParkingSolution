import React from 'react'
import about_img from '../images/about.jpg'
import quality from '../images/quality.svg'
import callcenter from '../images/call-center-telephone.svg'
import technical_repair from '../images/technical-repair.svg'
import internet_contact from '../images/internet-contact.svg'

function About() {
    return (
        <div className='mx-4 lg:mx-8 my-4'>
            <div className='flex flex-col xl:flex-row'>
                <img className='flex-1 px-2 rounded' src={about_img} alt="" />
                <div className='flex-1 m-4'>
                    <p className='text-3xl font-bold mb-4'><span className='text-[#4e73df]'>ParkingGo</span> Is The Best Place For Your To Visit And Use</p>
                    <p className='text-base text-slate-500 mb-6'>Parking Mobile puts the power to park in your hands. Whether you're looking for a spot now or reserving a spot for later, Parking Mobile has you covered.</p>
                    <div className='flex mt-6'>
                        <div className='grid bg-gray-300 h-11 w-11 place-items-center justify-items-center font-bold mx-2'>
                            <div>01</div>
                        </div>
                        <div className='flex-col flex-1 mx-2'>
                            <div className='font-bold'>Enter Your Zone Number</div>
                            <div className='text-slate-500'>A phone number is required for easy communication</div>
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <div className='grid bg-gray-300 h-11 w-11 place-items-center justify-items-center font-bold mx-2'>
                            <div>02</div>
                        </div>
                        <div className='flex-col flex-1 mx-2'>
                            <div className='font-bold'>Set Your Time</div>
                            <div className='text-slate-500'>Set the parking time you want</div>
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <div className='grid bg-gray-300 h-11 w-11 place-items-center justify-items-center font-bold mx-2'>
                            <div>03</div>
                        </div>
                        <div className='flex-col flex-1 mx-2'>
                            <div className='font-bold'>Select Your Vehicle</div>
                            <div className='text-slate-500'>Select the medium you are using</div>
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <div className='grid bg-gray-300 h-11 w-11 place-items-center justify-items-center font-bold mx-2'>
                            <div>04</div>
                        </div>
                        <div className='flex-col flex-1 mx-2'>
                            <div className='font-bold'>Enter Pay & Go</div>
                            <div className='text-slate-500'>Pay and start the journey</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <h1 className="text-3xl font-bold tracking-tight text-[#0b2154] sm:text-4xl text-center">
                    Services of The Parking App
                </h1>
                <div className='flex flex-col xl:flex-row mt-12 xl:mx-16'>
                    <div className='flex lg:w-1/3'>
                        <div className='h-16 w-16 my-1'>
                            <img src={quality} alt="" />
                        </div>
                        <div className='flex-col flex-1 m-2'>
                            <div className='font-bold text-xl'>Quality 100%</div>
                            <div className='text-slate-500 my-1'>Good quality assurance for users</div>
                        </div>
                    </div>
                    <div className='flex lg:w-1/3'>
                        <div className='h-16 w-16 my-1'>
                            <img src={callcenter} alt="" />
                        </div>
                        <div className='flex-col flex-1 m-2'>
                            <div className='font-bold text-xl'>Professional Staff</div>
                            <div className='text-slate-500 my-1'>24/7 support anytime for users</div>
                        </div>
                    </div>
                    <div className='flex lg:w-1/3'>
                        <div className='h-16 w-16 my-1'>
                            <img src={technical_repair} alt="" />
                        </div>
                        <div className='flex-col flex-1 m-2'>
                            <div className='font-bold text-xl'>Modern Equipment</div>
                            <div className='text-slate-500 my-1'>Changing user needs and wants</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex-col flex lg:flex-row mt-12 lg:mx-4 mx-1'>
                <div className='lg:w-3/5 pt-12'>
                    <h1 className='text-3xl font-bold tracking-tight text-[#39476a] lg:text-4xl'>Contact With ParkingGo</h1>
                    <p className='mt-6 text-slate-500 my-1'>Need to run errands but worried about potentially spreading germs? Available at over 100 sites across Vietnam, ParkMobile offers you a hands-free way to park your car to reduce your chances of being exposed to COVID-19.</p>
                    <button className='bg-blue-500 text-xl text-white font-semibold rounded p-4 mt-6 hover:bg-blue-700'>Contact Us &#10140;</button>
                </div>
                <img className='lg:w-2/5 pt-8 h-96' src={internet_contact} alt="" />
            </div>
        </div>
    )
}

export default About