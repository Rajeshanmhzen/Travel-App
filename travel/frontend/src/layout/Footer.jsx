import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div className="mt-10">

                <h1 className='text-center text-2xl'>Explore the world with AtlasXplore</h1>
                <h1 className='mt-3 text-center text-blue-500'>Discover new places and experiences</h1>


                <div className="bg-[#CCDCF3] rounded-lg px-25 py-10 mt-5">


                    <div className=" text-[44px] leading-14">
                        <h1>Join</h1>
                        <h1>AtlasXplore</h1>
                    </div>

                    <div className="mt-10">
                        <h1 className='text-lg font-bold text-[20px] text-gray-700'>The Travel</h1>
                        <h1 className='text-sm text-gray-700 text-[16px] '>Get inspired! Receive travel discounts, tips and behind the scenes stories.</h1>
                    </div>

                    <div className="mt-3">
                        <input type="email" className="input w-100 px-3 py-3 bg-white rounded-sm" placeholder="Your Email Address" />
                        <button className='bg-[#112211] px-2 py-3 text-white rounded-sm ms-4'>Subscribe</button>
                    </div>
                </div>

                <div className=" py-4 flex justify-evenly">
                    <div className="col-2">

                        <div className="flex">
                            <img src={"./logo/logos_flight.png"} alt="logo" className='me-2' />
                            <span className='text-lg'>AtlasXplore</span>
                        </div>

                        <div className="mt-5 flex justify-evenly">
                            <FaFacebook />
                            <FaYoutube/>    
                            <FaInstagram/>
                            <FaTwitter/>

                        </div>
                    </div>

                    <div className="col-2 leading-12">
                        <Link className='text-md'>Our Destinations</Link><br />
                        <Link className='text-md'>Maldives</Link><br />
                        <Link className='text-md'>Alaska</Link><br />
                        <Link className='text-md'>New Zealand</Link>    
                    </div>

                    <div className="col-2 leading-12">
                        <Link className='text-md'>Our Activities</Link><br />
                        <Link className='text-md'>Northern Lights</Link><br />
                        <Link className='text-md'>Crusing & Sailing</Link><br />
                        <Link className='text-md'>Paragliding</Link>    
                    </div>

                    <div className="col-2 leading-12">
                        <Link className='text-md'>Travel Blogs</Link><br />
                        <Link className='text-md'>Maldives Tour</Link><br />
                        <Link className='text-md'>USA Tour</Link><br />
                        <Link className='text-md'>New Zealand Guide</Link>    
                    </div>

                    <div className="col-2 leading-12">
                        <Link className='text-md'>About Us</Link><br />
                        <Link className='text-md'>Our Stories</Link><br />
                        <Link className='text-md'>Work With Us</Link><br />
                    </div>

                    <div className="col-2 leading-12">
                        <Link className='text-md'>Contact Us</Link><br />
                        <Link className='text-md'>+977- 98765543210</Link><br />
                        <Link className='text-md'>atlasxplore@gmail.com</Link><br />
                    </div>




                </div>

            </div>

        </>
    )
}

export default Footer
