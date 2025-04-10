import React from "react";
import { IoCloudUpload } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import CoverPic from "../assets/coverPic.png";
import UserPic from "../assets/image.png";
import { Outlet } from "react-router";

const Account = () => {
  const location = useLocation();

  const tabs = [
    { path: "user_info", label: "Account" },
    { path: "user_history", label: "History" },
    { path: "user_history", label: "Payment methods" },
  ];
  return (
    <>
      <div>
        <div className="min-h-screen w-full  md:px-8 lg:px-24 mt-[135px] bg-[#FAFBFC]">
          <div className="px-5 profile_pic h-[350px] md:h-80 w-full relative">
            <img
              src={CoverPic}
              alt="user cover pic"
              width={"100%"}
              height={"100%"}
              className="w-full h-full"
            />
            <div className="absolute bottom-5 right-14 ">
              <label
                htmlFor="userCoverPic"
                className="cursor-pointer flex gap-2 justify-center items-center py-2 px-4 bg-blue-300 rounded-sm oultine-none border-none"
              >
                <IoCloudUpload />
                <span className="text-[14px] hidden md:flex ">Upload new cover</span>
              </label>
              <input type="file" id="userCoverPic" className=" hidden " />
            </div>
          </div>
          <div className=" w-full min-h-screen px-5">
            <div className="user-info w-full h-[361px] text-center ">
              <div className="user-pic flex flex-col items-center mt-[-90px] mb-5">
                <div>
                  <div className="img relative w-[186px] h-[186px] rounded-full">
                    <img
                      src={UserPic}
                      alt={"user picture"}
                      width={"100%"}
                      height={"100%"}
                    />
                    <div className="bg-blue-500 absolute p-2 rounded-full bottom-8.5 right-9.5 cursor-pointer">
                      <label htmlFor="profilepic" className="cursor-pointer">
                        <MdEdit />
                      </label>
                      <input type="file" id="profilepic" className="hidden" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-2xl">Preetem ganesh</h4>
                  <p className="text-gray-500">preetemsthings@gmail.com</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-md shadow flex p-2">
                {tabs.map((tab, index) => (
                  <div
                    key={tab.path}
                    className={`flex-1 text-center relative ${
                      index > 0 ? "border-l border-gray-300" : ""
                    }`}
                  >
                    <Link
                      to={tab.path}
                      className={`block py-3 px-4 font-medium rounded-md transition-colors duration-200 ${
                        location.pathname === tab.path
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {tab.label}
                    </Link>
                    {location.pathname === tab.path && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] h-0.5 bg-blue-600 rounded-t-md" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
