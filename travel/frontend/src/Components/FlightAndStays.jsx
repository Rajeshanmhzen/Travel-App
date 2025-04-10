// import React from 'react'
// import { Link } from 'react-router-dom'
// import { IoAirplane } from "react-icons/io5";
// import { IoBed } from "react-icons/io5";

// const FlightAndStays = () => {
//     return (
//         <>
//             <div className="rounded-2xl bg-[#8DD3BB26] px-5 py-6 relative">
//                 {/* <div className="flex col-4">
//                     <div className="px-4 py-3 border-e-1">
//                         <Link className='flex'><IoAirplane className='mt-1 me-2'/>Flights</Link>
//                     </div>
//                     <div className="px-2 py-3">
//                     <Link className='flex ms-3'><IoBed className='mt-1 me-2'/>Stays</Link>

//                     </div>
//                 </div> */}
//                 {/* name of each tab group should be unique */}
//                 {/* name of each tab group should be unique */}
//                 {/* name of each tab group should be unique */}
//                 {/* name of each tab group should be unique */}


//                 <div className="tabs tabs-lift">
//                     <label className="tab">
//                         <input type="radio" name="my_tabs_4" />
//                         <IoAirplane className='mt-1 me-2' />
//                         Flights
//                     </label>
//                     <div className="tab-content bg-base-100 border-base-300 p-6">
//                         <div className="flex justify-evenly mt-8">
//                             <input type="text" placeholder='New York - Kathmandu' className='bg-white px-2 py-3 border w-72  border-[gray] rounded-sm col-4' />
//                             <input type="text" placeholder='One Way' className='bg-white px-2 py-3 border w-40  border-[gray] rounded-sm col-2' />
//                             <input type="text" placeholder='23 March 25' className='bg-white px-2 py-3 border w-72  border-[gray] rounded-sm col-4' />
//                             <input type="text" placeholder='1 Passenger, Economy' className='bg-white px-2 py-3 border w-72  border-[gray] rounded-sm col-4' />
//                         </div>
//                     </div>

//                     <label className="tab">
//                         <input type="radio" name="my_tabs_4" defaultChecked />
//                         <IoBed className='mt-1 me-2' />
//                         Stay
//                     </label>
//                     <div className="tab-content bg-base-100 border-base-300 p-6">
//                         <div className="flex justify-evenly mt-8">
//                             <label className="input validator ">
//                                 <IoBed className='text-gray-600 mt-1'/>
//                                 <input type="input" required placeholder="New York Hotel" title="Only letters, numbers or dash" />
//                             </label>
                            



//                             <input type="date" className="input"/>            
//                             <input type="date" className="input"/>            

                            
//                             <select value={"1 Room, 2 Guest"}>
//                                 <option value="" className='border border-gray-700'></option>
//                             </select>
//                         </div>
//                     </div>


//                 </div>




//             </div>

//         </>
//     )
// }

// export default FlightAndStays




import { useState } from "react"
import { IoAirplane } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function FlightAndStays() {
  const [activeTab, setActiveTab] = useState("flights")
  const [fromTo, setFromTo] = useState("New York- Kathmandu")
  const [showRoomsDropdown, setShowRoomsDropdown] = useState(false)

  const swapLocations = () => {
    const [from, to] = fromTo.split("-").map((item) => item.trim())
    setFromTo(`${to}- ${from}`)
  }

  return (
    <div className="w-290 mx-auto bg- rounded-lg shadow-md overflow-hidden">
      {/* Tabs */}
      <div className="w-full h-14 bg-gray-100 flex">
        <button
          onClick={() => setActiveTab("flights")}
          className={`flex items-center gap-2 px-4 h-full ${
            activeTab === "flights" ? "bg-white border-b-2 border-blue-500" : "hover:bg-gray-200"
          }`}
        >
         
          <IoAirplane/>
          <span className="font-medium">Flights</span>
        </button>
        <button
          onClick={() => setActiveTab("stays")}
          className={`flex items-center gap-2 px-4 h-full ${
            activeTab === "stays" ? "bg-white border-b-2 border-blue-500" : "hover:bg-gray-200"
          }`}
        >
          <IoBed/>
          <span className="font-medium">Stays</span>
        </button>
      </div>

      {/* Flights Content */}
      {activeTab === "flights" && (
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* From - To */}
            <div className="relative">
              <p className="text-sm text-gray-500 mb-1">From - To</p>
              <div className="relative">
                <input
                  type="text"
                  value={fromTo}
                  onChange={(e) => setFromTo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                />
                <button
                  onClick={swapLocations}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10h10" />
                    <path d="M7 14h10" />
                    <path d="m17 10-3-3 3 3Z" />
                    <path d="m7 14 3 3-3-3Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Trip */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Trip</p>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                <option>One way</option>
                <option>Round trip</option>
                <option>Multi-city</option>
              </select>
            </div>

            {/* Depart- Return */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Depart- Return</p>
              <input
                type="text"
                defaultValue="07 March 25"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Passenger - Class */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Passenger - Class</p>
              <input
                type="text"
                defaultValue="1 Passenger, Economy"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end items-center gap-4 mt-4">
            <button className="text-blue-500 hover:text-blue-700">+ Add Promo Code</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
            <FaTelegramPlane className="me-2" />
              Show Flights
            </button>
          </div>
        </div>
      )}

      {/* Stays Content */}
      {activeTab === "stays" && (
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Enter Destination */}
            <div className="relative">
              <p className="text-sm text-gray-500 mb-1">Enter Destination</p>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="New York Hotel"
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <IoBed/>
                </div>
              </div>
            </div>

            {/* Check In */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Check In</p>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="Fri 05/25"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
              </div>
            </div>

            {/* Check Out */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Check Out</p>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="Sun 05/27"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
                
              </div>
            </div>

            {/* Rooms & Guests */}
            <div className="relative">
              <p className="text-sm text-gray-500 mb-1">Rooms & Guests</p>
              <div className="relative">
                <button
                  onClick={() => setShowRoomsDropdown(!showRoomsDropdown)}
                  className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-left flex justify-between items-center"
                >
                  <span>1 room, 2 guests</span>
                </button>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                <FaUser/>
                </div>
                {showRoomsDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    <div className="py-1">
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => setShowRoomsDropdown(false)}
                      >
                        1 room, 1 guest
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100 bg-gray-50"
                        onClick={() => setShowRoomsDropdown(false)}
                      >
                        1 room, 2 guests
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => setShowRoomsDropdown(false)}
                      >
                        1 room, 3 guests
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        onClick={() => setShowRoomsDropdown(false)}
                      >
                        2 rooms, 4 guests
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center gap-4 mt-4">
            <button className="text-blue-500 hover:text-blue-700">+ Add Promo Code</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
            <FaTelegramPlane className="me-2"/>
              Show Hotels
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

