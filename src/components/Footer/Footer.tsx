import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";

//svgs
import appleStore from "../../../public/appstore.svg";
import playstore from "../../../public/playstore.svg";

//icons
import { BsLinkedin, BsTwitter, BsFacebook, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-between  items-center'>
      <div className="w-full flex  px-24 py-10 justify-around">
        <div className={` flex flex-col mt-1 justify-left space-y-5`}>
          <Link className="flex justify-left items-center  space-x-2" href='/'>
            <div className="relative w-[15px] h-[15px]">
              <Image
                src={logo}
                alt="TalentSync Logo"
                fill
              />
            </div>
            <div className="text-black font-bold text-base hover:text-grey4">
              <h1>ClearLink.</h1>
            </div>
          </Link>
          <p className="text-[13px] tracking-wider text-[#475467] w-[300px]">ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
        </div>
        <div className={`space-y-3 flex flex-col`}>
          <h3 className={`font-semibold text-[#667085] hover:text-grey1 text-[15px]`}>Products</h3>
          <ul className={`space-y-2 flex flex-col`}>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}> Overview</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Features</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Solutions</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Tutorials</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Pricing</Link>
            </li>
          </ul>
        </div>
        <div className={`space-y-3 flex flex-col`}>
          <h3 className={`font-semibold text-[#667085] hover:text-grey1 text-[15px]`}>Company</h3>
          <ul className={`space-y-2 flex flex-col`}>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>About us</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Careers</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Press</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>News</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={`space-y-3 flex flex-col`}>
          <h3 className={`font-semibold text-[#667085] hover:text-grey1 text-[15px]`}>Resources</h3>
          <ul className={`space-y-2 flex flex-col`}>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Blog</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Events</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Help centre</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Tutorials</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Support</Link>
            </li>
          </ul>
        </div>
        <div className={`space-y-3 flex flex-col`}>
          <h3 className={`font-semibold text-[#667085] hover:text-grey1 text-[15px]`}>Legal</h3>
          <ul className={`space-y-2 flex flex-col`}>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Terms</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Privacy</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Cookies</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Licenses</Link>
            </li>
            <li>
              <Link href='#' className={`cursor-pointer text-base text-[#475467] font-bold hover:text-grey4`}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={`space-y-2 flex flex-col`}>
          <h3 className={`font-semibold text-blue text-[14px]`}>Get the app</h3>
          <div className="flex flex-col">
            <Link href='https://www.apple.com/app-store' target="_blank" className="w-[100px] hover:h-[52px] h-[50px] relative cursor-pointer">
              <Image src={appleStore} alt="Appstore" fill />
            </Link>
            <Link href='https://play.google.com/' target="_blank" className="w-[100px] h-[50px] relative cursor-pointer   hover:h-[52px]">
              <Image src={playstore} alt="Appstore" fill />
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-[#F9FAFB] flex w-full px-24 py-7 justify-between  items-center">
        <div>
          <h3 className="text-sm">All rights reserved. &copy; getlinked Ltd.</h3>
        </div>
        <div className="flex space-x-4">
          <Link href='https://www.linkedin.com/login/' className="text-[#98A2B3] hover:text-grey1 text-[20px]">
            <BsLinkedin />
          </Link>
          <Link href='https://twitter.com/login/' className="text-[#98A2B3] hover:text-grey1 text-[20px]">
            <BsTwitter />
          </Link>
          <Link href='https://www.facebook.com/login/' className="text-[#98A2B3] hover:text-grey1 text-[20px]">
            <BsFacebook />
          </Link>
          <Link href='https://www.instagram.com/accounts/login/' className="text-[#98A2B3] hover:text-grey1 text-[20px]">
            <BsInstagram />
          </Link>
          <Link href='https://github.com/login' className="text-[#98A2B3] hover:text-grey1 text-[20px]">
            <BsGithub />
          </Link>
          <Link href='https://www.youtube.com/account' className="text-[#98A2B3] hover:text-grey1 text-[20px]">
            <BsYoutube />
          </Link>

        </div>

      </div>
    </div>
  )
};

export default Footer;
