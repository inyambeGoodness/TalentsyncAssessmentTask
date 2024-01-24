import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/Button/Button";
import logo from "../../../public/logo.svg";
import { SlArrowDown } from 'react-icons/sl'


const Navbar = () => {


    return (
        <div className="w-full  p-3 rounded-full bg-grey3 border-[1px] border-grey4 flex justify-center mx-auto items-center">
            <div className="flex w-full justify-between items-center px-10">
                <Link className="flex justify-center items-center  space-x-2" href='/'>
                    <div className="relative w-[20px] h-[25px]">
                        <Image
                            src={logo}
                            alt="TalentSync Logo"
                            fill
                        />
                    </div>
                    <div className="text-black font-bold hover:text-grey4">
                        <h1>ClearLink.</h1>
                    </div>
                </Link>

                <div className={`flex text-grey1 text-base font-bold  justify-around items-center`}>
                    <Link
                        href="#"
                        className={`hover:text-grey4 w-[100px] flex justify-center items-center `}
                    >
                        Products <SlArrowDown className={` text-[10px] ml-1`} />

                    </Link>
                    <Link
                        href="#"
                        className={`hover:text-grey4 w-[100px] flex justify-center items-center `}
                    >
                        Solutions <SlArrowDown className={` text-[10px] ml-1`} />
                    </Link>
                    <Link
                        href="#"
                        className={`hover:text-grey4  w-[100px] flex justify-center items-center `}
                    >
                        Resources <SlArrowDown className={` text-[10px] ml-1`} />
                    </Link>
                    <Link
                        href="#"
                        className={`hover:text-grey4 w-[100px] flex justify-center items-center `}
                    >
                        Pricing <SlArrowDown className={` text-[10px] ml-1`} />
                    </Link>

                </div>

                <div className=" flex justify-around items-center space-x-5">
                    <div className={`flex  items-center rounded-full text-black bg-white border-[#98A2B3] border-[1px] hover:bg-blue2 hover:text-white `}>
                        <Link href="#">
                            <Button btnValue="Talk to sales" />
                        </Link>
                    </div>
                    <div className={`flex  items-center text-white rounded-full hover:bg-blue2 bg-blue `}>
                        <Link href="#">
                            <Button btnValue="Sign up for free" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
