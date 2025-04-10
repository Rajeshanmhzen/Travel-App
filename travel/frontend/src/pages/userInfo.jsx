import React from "react";
import { IoAddCircle } from "react-icons/io5";
import { RiEditBoxFill } from "react-icons/ri";

const userInfo = () => {
  return (
    <>
      <div className="py-5">
        <h2 className="text-4xl font-bold">Account</h2>
        <div>
          <form action="" className="mt-5">
            <div className="flex justify-between h-[52px] mb-5.5">
              <div className="flex flex-col ">
                <label htmlFor="name" className="text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={"Preetam Ganesh"}
                  className="font-semibold"
                />
              </div>
              <div>
                <button className="cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0">
                  <RiEditBoxFill className="text-[16px]" />
                  <span>Change</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between h-[52px] mb-5.5">
              <div className="flex flex-col ">
                <label htmlFor="email" className="text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={"preetamsthings@gamil.com"}
                  className="font-semibold"
                />
              </div>
              <div className="flex gap-2">
                <button className="cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0">
                  <IoAddCircle className="text-[16px]" />
                  <span>Add another email</span>
                </button>
                <button className="cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0">
                  <RiEditBoxFill className="text-[16px]" />
                  <span>Change</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between h-[52px] mb-5.5">
              <div className="flex flex-col">
                <label htmlFor="passsword" className="text-gray-500">
                  Password
                </label>
                <input
                  type="passsword"
                  id="passsword"
                  value={"********"}
                  className="font-semibold"
                />
              </div>
              <div>
                <button className="cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0">
                  <RiEditBoxFill className="text-[16px]" />
                  <span>Change</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between h-[52px] mb-5.5">
              <div className="flex flex-col ">
                <label htmlFor="phone" className="text-gray-500">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={"9*********"}
                  className="font-semibold"
                />
              </div>
              <div>
                <button className="cursor-pointer flex items-center gap-2 text-[16px] px-4 py-2 rounded-lg border md:mt-0">
                  <RiEditBoxFill />
                  <span>Change</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between h-[52px] mb-5.5">
              <div className="flex flex-col ">
                <label htmlFor="address" className="text-gray-500">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={"Preetam Ganesh"}
                  className="font-semibold"
                />
              </div>
              <div>
                <button className="cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0">
                  <RiEditBoxFill className="text-[16px]" />
                  <span>Change</span>
                </button>
              </div>
            </div>
            <div className="flex justify-between h-[52px] mb-5.5">
              <div className="flex flex-col ">
                <label htmlFor="dob" className="text-gray-500">
                  Date of birth
                </label>
                <input
                  type="date"
                  id="dob"
                  value={"09-01-2001"}
                  className="font-semibold"
                />
              </div>
              <div>
                <button className="cursor-pointer flex items-center gap-2 text-[14px] px-4 py-2 rounded-lg border md:mt-0">
                  <RiEditBoxFill className="text-[16px]" />
                  <span>Change</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default userInfo;
