import React from 'react'
import location_icon from '../images/location-pin-.svg'
import phone_icon from '../images/phone.svg'
import mail_icon from '../images/mail-open.svg'

function Footer() {
  return (
    <div className='w-full p-8 bg-black text-white'>
      <div className='flex-col flex lg:flex-row lg:mx-16 pl-4'>
        <div className='flex lg:w-1/3'>
          <div className='flex-col flex-1 m-2'>
            <div className='font-bold text-xl pb-2'>Links</div>
            <div className='m-1'>&#10148; Why ParkingGo ?</div>
            <div className='m-1'>&#10148; User Manual</div>
            <div className='m-1'>&#10148; Privacy Policy</div>
            <div className='m-1'>&#10148; Mobile App</div>
          </div>
        </div>
        <div className='flex lg:w-1/3'>
          <div className='flex-col flex-1 m-2'>
            <div className='font-bold text-xl pb-2'>Opening Hours</div>
            <div className='m-1'>Monday - Friday:</div>
            <div className='m-1 pb-2'>07.00 AM - 12.00 PM</div>
            <div className='m-1'>Saturday - Sunday:</div>
            <div className='m-1'>07.00 AM - 10.30 PM</div>
          </div>
        </div>
        <div className='flex lg:w-1/3'>
          <div className='flex-col flex-1 m-2'>
            <div className='font-bold text-xl pb-2'>Address</div>
            <div className='my-1 flex'><img className='h-6' src={location_icon} alt="" /><p>590 Cach Mang Thang 8 Street, Ward 11, District 3, Ho Chi Minh City, Vietnam</p></div>
            <div className='my-1 flex'><img className='h-6' src={phone_icon} alt="" /><p>+098 157 89 20</p></div>
            <div className='my-1 flex'><img className='h-6' src={mail_icon} alt="" /><p>fptaptech@edu.com.vn</p></div>
          </div>
        </div>
      </div>
      <div className='my-8 h-px bg-slate-400'></div>
      <div className="m-2 mt-4">© ParkingGo, All Right Reserved. Designed By T1.2008.A0
        Distributed By: FPT Aptech</div>
    </div>
  )
}

export default Footer