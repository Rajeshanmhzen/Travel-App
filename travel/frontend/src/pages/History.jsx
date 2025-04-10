import React from 'react'
import { IoIosAirplane } from "react-icons/io";
import { IoBed } from "react-icons/io5";
import TicketHistory from '../components/TicketHistory';
const History = () => {
  return (
    <div>
        <h2 className='text-2xl font-bold'>Ticketes/Booking</h2>
        <div className='h-full bg-gray-100 rounded-md shadow flex p-2  mt-6 gap-4 '>
            <div className=' flex-1 text-center relative  border-b-3 border-blue-300 cursor-pointer'>
            <button className='flex gap-2 items-center justify-center'>
            <IoIosAirplane />
                <button className='text-lg cursor-pointer'>Flights</button>
            </button>
            </div>
            <div className=' flex-1 text-center relative border-s-2 px-5  border-slate-400 cursor-pointer   '>
            <button className=' flex gap-2 items-center justify-center '>
            <IoBed  />
            <button className='text-lg cursor-pointer'>Stays</button>
            </button>
            </div>
        </div>
        <div className='mt-4 py-4'>
        <TicketHistory/>
        </div>
    </div>
  )
}

export default History