import React from "react";
import Button from "./Button";
import { FiChevronRight } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { IoTime } from "react-icons/io5";
import { FaDoorClosed } from "react-icons/fa6";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import dubai_airbus from "../assets/dubai_airbus.png"

const TicketHistory = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <div>
        {arr.map((_, index) => {
          return (
            <div key={index} className=" w-full h-36 shadow-sm mt-5 flex items-center justify-between px-6">
              <div className="flex gap-8 ">
                    <div className="w-20 h-20">
                    <img src={dubai_airbus} alt="flight air logo" width={100} height={100}  />
                    </div>
                    <div className="flex" >
                        <div className="flex border-e-2 pe-5 border-slate-500">
                            <p >
                               <span className="text-slate-500">Newark(EWR)</span> 
                                <br/>
                                <strong className="text-xl">12:00pm</strong>
                            </p>
                            <p className="">
                            {/* <FaMinus/> */}
                            -
                            </p>
                            <p>
                            <span className="text-slate-500">Newark(EWR)</span> 
                                <br/>
                                <strong className="text-xl">6:00pm</strong>
                            </p>
                        </div>
                        <div  className="ms-6 flex gap-5">
                            <div>
                           <div className="flex items-center">
                            <Button icons={<SlCalender/>} hasBorder={false} variant={"green"}/>
                           <p className="text-[12px] ms-2">
                               <span className="text-slate-500">Date</span> 
                                <br/>
                                <strong className="text-sm">12-11-22</strong>
                            </p>
                           </div>
                           <div className="flex items-center">
                            <Button icons={<IoTime/>} hasBorder={false} variant={"green"}/>
                           <p className="text-[12px] ms-2">
                               <span className="text-slate-500">Flight time</span> 
                                <br/>
                                <strong className="text-sm">Newark(EWR)</strong>
                            </p>
                           </div>
                        </div>
                        <div>
                           <div className="flex items-center">
                            <Button icons={<FaDoorClosed/>} hasBorder={false} variant={"blue"}/>
                           <p className="text-[12px] ms-2">
                               <span className="text-slate-500">Gate</span> 
                                <br/>
                                <strong className="text-sm">A12</strong>
                            </p>
                           </div>
                           <div className="flex items-center">
                            <Button icons={<MdOutlineAirlineSeatReclineNormal/>} hasBorder={false} variant={"blue"}/>
                           <p className="text-[12px] ms-2">
                               <span className="text-slate-500">Seat no.</span> 
                                <br/>
                                <strong className="text-sm">128</strong>
                            </p>
                           </div>
                        </div>
                        </div>
                    </div>
              </div>
              <div className="flex gap-3">
                <Button value="Download Ticket" hasBorder={false} />
                <Button
                  icons={<FiChevronRight />}
                  hasBorder={true}
                  hasBackground={false}
                  variant={"secondary"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TicketHistory;
