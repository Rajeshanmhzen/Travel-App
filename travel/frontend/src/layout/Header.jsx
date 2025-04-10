
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

        
            <nav className="bg-white shadow-md w-full fixed top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-2">
                        <img src={"./logo/logo.png"} alt="Logo" className=" " />
                        {/* <span className="text-xl font-bold text-black">AtlasXplore</span> */}
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                        <Link to={"/"} className="hover:text-blue-500">Home</Link>
                        <Link to={"/flights"} className="hover:text-blue-500">Flights</Link>
                        <Link to={"/hotels"} className="hover:text-blue-500">Hotels</Link>
                        <Link to={"/stories"} className="hover:text-blue-500">Stories</Link>
                        <Link to={"/help"} className="hover:text-blue-500">Help</Link>

                    </div>

                    {/* Login & Register Buttons */}
                    <div className="hidden md:flex space-x-4">
                       <Link to={'/login'}>
                       <button className="px-4 py-1 border border-black rounded-md text-black">Login</button> 
                       </Link> 

                       <Link to={'/register'}>
                        <button className="px-4 py-1 bg-[#203553] text-white rounded-md">Register</button>
                       </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => {
                            const menu = document.getElementById("mobile-menu");
                            if (menu) menu.classList.toggle("hidden");
                        }}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md py-2 px-4 space-y-2">
                    <Link to={"/"} className="block py-2 text-gray-700 hover:text-blue-500">Home</Link>
                    <Link to={"/flights"} className="block py-2 text-gray-700 hover:text-blue-500">Flights</Link>
                    <Link to={"/hotels"} className="block py-2 text-gray-700 hover:text-blue-500">Hotels</Link>
                    <Link to={"/stories"} className="block py-2 text-gray-700 hover:text-blue-500">Stories</Link>
                    <Link to={"/help"} className="block py-2 text-gray-700 hover:text-blue-500">Help</Link>

                    <div className="flex flex-col gap-2 mt-2">
                        <button className="px-4 py-2 border border-gray-300 rounded-md">Log In</button>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Register</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
