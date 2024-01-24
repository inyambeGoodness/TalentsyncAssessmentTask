import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../Button/Button';

//images andd svgs
import avatar from '../../../public/Avatar.png';
import animoji1 from '../../../public/animoji1.png';
import animoji2 from '../../../public/animoji2.png';
import animoji3 from '../../../public/animoji3.png';
import animoji4 from '../../../public/animoji4.png';
import animoji5 from '../../../public/animoji5.png';
import animoji6 from '../../../public/animoji6.png';
import shopify from '../../../public/Shopify.svg';
import coinbase from '../../../public/Coinbase.svg';
import dropbox from '../../../public/Dropbox.svg';
import intercom from '../../../public/Intercom.svg';
import marvel from '../../../public/Marvel.svg';
import automattic from '../../../public/Automattic.svg';
import imgCol from '../../../public/image-collection.png';
import arrow from '../../../public/Hand-drawn arrow.svg';
import bkgSvg from '../../../public/Background pattern.svg';
import ladyAvatar from '../../../public/ladyAvatar.png';
import gallery from '../../../public/gallery.png';
import man from '../../../public/manOnaVideoCall.png'

//icons
import { BiMicrophone } from 'react-icons/bi';
import { FiMonitor, FiMessageCircle, FiSettings } from 'react-icons/fi';
import { BsEmojiSmile, BsSoundwave, BsCalendar } from 'react-icons/bs';
import { RiRobot2Line } from 'react-icons/ri';
import { FaVideo } from 'react-icons/fa';
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCheckCircle } from 'react-icons/ai'
import { LiaUnlockAltSolid } from 'react-icons/lia'
import { FAQData, FAQlayout } from '../FAQDetails/FAQData';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.config({
    force3D: true

})






export const Herosection = () => {
    return (
        <div className=' px-24 mt-20 flex relative justify-between'>
            <div className='absolute top-[-5rem] z-0'>
                <div className='relative w-[1000px] h-[600px]'>
                    <Image src={bkgSvg} fill alt="hero" />
                </div>
            </div>
            <div className='w-1/2 flex flex-col space-y-5 z-50'>
                <div className='flex flex-col space-y-2'>
                    <h1 className={`text-black font-extrabold text-[50px] leading-[4rem]`}>Uniting the world, <br />one video call at a time</h1>
                    <h2 className='font-bold text-grey1 text-base w-4/5'>Experience the future of communication with ClearLink – where crystal-clear video conferencing meets <br /> unparalleled simplicity.</h2>
                </div>
                <div className='flex items-center space-x-5'>
                    <div className={`flex w-[160px] h-[50px] p-1 justify-center items-center text-white rounded-full hover:bg-blue2 bg-blue `}>
                        <Link href="#">
                            <Button btnValue="Start your free trial" className='' />
                        </Link>
                    </div>
                    <div className='flex space-x-2 items-center h-[40px]'>
                        <div className='text-blue text-sm '>
                            <h1><RiRobot2Line /></h1>
                        </div>
                        <div>
                            <h1 className={`font-light text-blue text-sm`}>Discover AI assistant</h1>
                        </div>
                    </div>
                </div>
                <div className='flex items-center space-x-3 '>
                    <div className='relative w-[180px] h-[30px]'>
                        <Image src={avatar} fill alt="hero" />
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                            <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                            <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                            <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                            <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                            <h1 className='ml-2 font-bold text-[11px]'>5.0</h1>
                        </div>
                        <div>
                            <p className='font-extrabold text-[11px]'>from 3,000+ reviews</p>
                        </div>


                    </div>
                </div>

            </div>

            <div className='bg-[#EFF8FF] border-[1.4px] rounded-lg space-y-5 border-[#B2DDFF] px-4 py-6 flex flex-col w-[450px] min-h-[350px] shadow-lg'>
                <div className='flex flex-wrap justify-between items-center '>
                    <div className='w-1/3 flex justify-center h-[140px] '>
                        <div className='relative w-[130px] h-[120px] hover:w-[135px] hover:h-[125px]'>
                            <Image src={animoji1} fill alt="hero" />
                        </div>
                    </div>
                    <div className='w-1/3 flex justify-center h-[140px] '>
                        <div className='relative w-[130px] h-[120px] hover:w-[135px] hover:h-[125px]'>
                            <Image src={animoji2} fill alt="hero" />
                        </div>
                    </div>
                    <div className='w-1/3 flex justify-center  h-[140px] '>
                        <div className='relative w-[130px] h-[120px] hover:w-[135px] hover:h-[125px]'>
                            <Image src={animoji3} fill alt="hero" />
                        </div>
                    </div>
                    <div className='w-1/3 flex justify-center  h-[140px] '>
                        <div className='relative w-[130px] h-[120px] hover:w-[135px] hover:h-[125px]'>
                            <Image src={animoji4} fill alt="hero" />
                        </div>
                    </div>
                    <div className='w-1/3 flex justify-center  h-[140px] '>
                        <div className='relative w-[130px] h-[120px] hover:w-[135px] hover:h-[125px]'>
                            <Image src={animoji5} fill alt="hero" />
                        </div>
                    </div>
                    <div className='w-1/3 flex justify-center  h-[140px] '>
                        <div className='relative w-[130px] h-[120px] hover:w-[135px] hover:h-[125px]'>
                            <Image src={animoji6} fill alt="hero" />
                        </div>
                    </div>
                </div>

                <div className='flex w-full justify-center items-center z-50 '>
                    <div className='flex w-4/6 justify-between items-center'>
                        <div className={`text-[#B2DDFF] text-[15px] border-[1px] p-1 flex justify-center items-center hover:bg-blue2 bg-white w-[30px] h-[30px] rounded-full`}>
                            <BiMicrophone />
                        </div>
                        <div className={`text-[#B2DDFF] text-[12px] border-[1px] p-1 flex justify-center items-center hover:bg-blue2 bg-white w-[30px] h-[30px] rounded-full`}>
                            <FaVideo />
                        </div>
                        <div className={`text-[#B2DDFF] text-[15px] border-[1px] p-1 flex justify-center items-center hover:bg-blue2 bg-white w-[30px] h-[30px] rounded-full`}>
                            <FiMonitor />
                        </div>
                        <div className={`text-[#B2DDFF] text-[15px] border-[1px] p-1 flex justify-center items-center hover:bg-blue2 bg-white w-[30px] h-[30px] rounded-full`}>
                            <BsEmojiSmile />
                        </div>
                        <div className={`text-[#B2DDFF] text-[15px] border-[1px] p-1 flex justify-center items-center hover:bg-blue2 bg-white w-[30px] h-[30px] rounded-full`}>
                            <FiMessageCircle />
                        </div>
                        <div className={`text-[#B2DDFF] text-[15px] border-[1px] p-1 flex justify-center items-center hover:bg-blue2 bg-white w-[30px] h-[30px] rounded-full`}>
                            <FiSettings />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export const Sponsors = () => {
    return (
        <div className='w-full px-24 flex flex-col justify-center items-center space-y-9'>
            <div className='font-bold text-grey'>
                <h1>Join 1,500+ companies already video conferencing the ClearLink way</h1>
            </div>
            <div className='flex w-full justify-between items-center'>
                <div className='relative w-[100px] h-[20px] flex items-center justify-center cursor-pointer'>
                    <Image src={shopify} fill alt="hero" />
                </div>
                <div className='relative w-[100px] h-[20px] flex items-center justify-center cursor-pointer'>
                    <Image src={coinbase} fill alt="hero" />
                </div>
                <div className='relative w-[100px] h-[20px] flex items-center justify-center cursor-pointer'>
                    <Image src={dropbox} fill alt="hero" />
                </div>
                <div className='relative w-[100px] h-[20px] flex items-center justify-center cursor-pointer'>
                    <Image src={intercom} fill alt="hero" />
                </div>
                <div className='relative w-[100px] h-[20px] flex items-center justify-center cursor-pointer'>
                    <Image src={marvel} fill alt="hero" />
                </div>
                <div className='relative w-[100px] h-[20px] flex items-center justify-center cursor-pointer'>
                    <Image src={automattic} fill alt="hero" />
                </div>
            </div>

        </div>

    )
}

export const Advantages = () => {
    useEffect(() => {
        const main = gsap.timeline({
            scrollTrigger: {
                trigger: '#advantage',
                start: 'top 60%',
                // end: 'bottom 60%',
                toggleActions: "play none none reverse",
            }
        });

        main.fromTo(".arrow", { duration: 2, opacity: 0, scale: 0.3, ease: "back", x: 400, delay: .5 }, { duration: 1.5, opacity: 1, scale: 1, ease: "back", x: 0, delay: .5 });
    }, []);


    return (
        <div className='relative px-24 space-y-16' id='advantage'>
            <div className='space-y-1'>
                <h2 className='font-extrabold text-blue text-base'>The ClearLink Advantage</h2>
                <h1 className='font-extrabold text-[37px]'>Why choose ClearLink?</h1>
                <h3 className='w-[550px] mt-5'>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</h3>
            </div>
            <div className='flex w-full justify-between items-center'>
                <div className='w-[600px] flex flex-wrap justify-between items-center'>
                    <div className='w-1/2 justify-center h-[160px] '>
                        <div className='w-[300px] h-[140px] flex flex-col'>
                            <div className='mb-3'>
                                <div className={`text-[#175CD3] text-[12px] border-[1px] border-[#EAECF0] p-1 flex justify-center items-center hover:bg-blue2 bg-[#F9FAFB] w-[30px] h-[30px] rounded-full`}>
                                    <FaVideo />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold tracking-wider text-[16px]'>Crystal-clear HD video</h1>
                                <p className='text-base w-[280px]'>No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[300px] h-[160px] flex flex-col'>
                        <div className='mb-3'>
                            <div className={`text-[#175CD3] text-[12px] border-[1px] border-[#EAECF0] p-1 flex justify-center items-center hover:bg-blue2 bg-[#F9FAFB] w-[30px] h-[30px] rounded-full`}>
                                <BsSoundwave />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-bold tracking-wider text-[16px]'>Noise-canceling audio</h1>
                            <p className='text-base w-[280px]'>Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</p>
                        </div>
                    </div>
                    <div className='w-[300px] h-[160px] flex flex-col'>
                        <div className='mb-3'>
                            <div className={`text-[#175CD3] text-[12px] border-[1px] border-[#EAECF0] p-1 flex justify-center items-center hover:bg-blue2 bg-[#F9FAFB] w-[30px] h-[30px] rounded-full`}>
                                <BsCalendar />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-bold tracking-wider text-[16px]'>Scheduling made easy</h1>
                            <p className='text-base w-[280px]'>{`Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.`}</p>
                        </div>
                    </div>
                    <div className='w-[300px] h-[160px] flex flex-col'>
                        <div className='mb-3'>
                            <div className={`text-[#175CD3] text-[14px] border-[1px] border-[#EAECF0] p-1 flex justify-center items-center hover:bg-blue2 bg-[#F9FAFB] w-[30px] h-[30px] rounded-full`}>
                                <LiaUnlockAltSolid />
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-bold tracking-wider text-[16px]'>Bank-grade security</h1>
                            <p className='text-base w-[280px]'>Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
                        </div>
                    </div>
                </div>

                <div className='w-[450px] flex justify-center items-center'>
                    <div className='relative w-[400px] h-[340px]'>
                        <Image src={imgCol} fill alt="hero" />
                    </div>
                </div>
            </div>
            <div className='absolute arrow right-[16.4rem] top-[-6rem]'>
                <div className='relative  w-[230px] h-[300px]'>
                    <Image src={arrow} fill alt="hero" />
                </div>
            </div>
        </div >

    )
}

export const Showcase = () => {
    return (
        <div className='w-full flex px-24 py-14 justify-between bg-[#F9FAFB] items-center' id='showcase'>
            <div className='w-[500px] space-y-10'>
                <div className='relative w-[80px] h-[20px] flex items-center justify-center cursor-pointer'>
                    <Image src={shopify} fill alt="hero" />
                </div>
                <div className='space-y-10'>
                    <div className='flex items-center'>
                        <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                        <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                        <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                        <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                        <AiFillStar className={`text-[#FE9B07] text-[15px]`} />
                    </div>
                    <div>
                        <p className='text-xl font-extrabold leading-normal'>ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</p>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center'>
                    <div className='flex justify-start space-x-3 items-center h-[50px]'>
                        <div className='w-[35px] h-[35px] relative'>
                            <Image src={ladyAvatar} fill alt="hero" />
                        </div>
                        <div>
                            <h1 className='text-[12px] font-bold'>Sarah Thompson</h1>
                            <h2 className='text-[10px] font-normal'>Project Manager, Shopify</h2>
                        </div>
                    </div>
                    <div className='flex space-x-5 justify-start items-center'>
                        <div className='text-blue hover:bg-blue2 hover:text-white flex justify-center items-center w-[35px] h-[35px] bg-transparent border-[1px] border-[#D1E9FF] rounded-full'>
                            <h1><AiOutlineArrowLeft /></h1>
                        </div>
                        <div className='text-blue hover:bg-blue2 hover:text-white flex justify-center items-center w-[35px] h-[35px] bg-transparent border-[1px] border-[#D1E9FF] rounded-full'>
                            <h1><AiOutlineArrowRight /></h1>
                        </div>

                    </div>
                </div>
            </div>


            <div className='w-[500px] h-[400px] flex justify-center items-center'>
                <div className='w-[400px] h-[350px] relative hover:w-[405px] hover:h-[355px]'>
                    <Image src={gallery} fill alt="hero" />
                </div>
            </div>

        </div>

    )
}

export const Faq = () => {
    useEffect(() => {
        const main = gsap.timeline({
            scrollTrigger: {
                trigger: '#faq',
                start: 'top 60%',
                // end: 'bottom 60%',
                toggleActions: "play none none reverse",
            }
        });
        main.fromTo(".faq", { duration: 1.5, opacity: 0, scale: 0.3, ease: "back", y: -100, rotate: 180, delay: .5, stagger: 0.5 }, { opacity: 1, scale: 1, ease: "back", y: 0, rotate: 0, delay: .5, stagger: 0.5 });

    }, []);
    return (
        <div className='w-full flex px-24 justify-between bg-transparent ' id='faq'>
            <div className='w-1/2'>
                <h2 className='text-base text-blue font-bold tracking-wider'>Support</h2>
                <h1 className='font-extrabold text-2xl'>FAQs</h1>
                <p className='font-light w-4/5 text-sm text-[#667085]'>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please <span>chat to our friendly team</span>.</p>
            </div>
            <div className='w-1/2 p-3 flex justify-center'>
                <div className={` flex flex-col  space-y-1 `}>
                    {FAQData.map((item, id) => (
                        <div key={id} className={`faq p-2`}>
                            <FAQlayout question={item.question} answer={item.answer} id={0} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Freetrial = () => {
    useEffect(() => {
        const main = gsap.timeline({
            scrollTrigger: {
                trigger: '#trial',
                start: 'top 60%',
                // end: 'bottom 60%',
                toggleActions: "play none none reverse",
            }
        });
        main.fromTo(".check", { duration: 1.5, opacity: 0, scale: 0.3, ease: "back", y: -100, rotate: 180, delay: .5, stagger: 0.5 }, { opacity: 1, scale: 1, ease: "bounce.out", y: 0, rotate: 0, delay: .5, stagger: 0.7 });
    }, []);

    return (
        <div className='w-full flex pl-24 py-14 justify-between  items-center' id='trial'>
            <div className='w-[500px] flex justify-start'>
                <div className='w-[400px] flex flex-col space-y-10'>
                    <div className='w-full text-xl font-extrabold'>
                        <h1>Ready to clear the path to perfect communication?</h1>
                    </div>
                    <div className='flex justify-start items-start flex-col space-y-5'>
                        <div className='flex justify-start items-center space-x-2'>
                            <div className='check'>
                                <AiOutlineCheckCircle className={`text-[#175CD3] text-sm`} />
                            </div>
                            <h2 className='text-base'>30 days free trial</h2>
                        </div>
                        <div className='flex justify-start items-center space-x-2'>
                            <div className='check'>
                                <AiOutlineCheckCircle className={`text-[#175CD3] text-sm`} />
                            </div>
                            <h2 className='text-base'>Cancel at any time</h2>
                        </div>
                        <div className='flex justify-start items-center space-x-2'>
                            <div className='check'>
                                <AiOutlineCheckCircle className={`text-[#175CD3] text-sm`} />
                            </div>
                            <h2 className='text-base'>Access to all features</h2>
                        </div>
                        <div className='flex justify-start items-center space-x-2'>
                            <div className='check'>
                                <AiOutlineCheckCircle className={`text-[#175CD3] text-sm`} />
                            </div>
                            <h2 className='text-base'>Peronalized onboarding</h2>
                        </div>
                    </div>
                    <div className=" flex justify-start items-center space-x-5">
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
            <div className='w-[700px] flex justify-start'>
                <div className='relative w-[700px] h-[420px] rounded-tl-lg border-t-8 border-l-8 border-[black]'>
                    <Image src={man} fill alt="hero" />
                </div>
            </div>
        </div>
    )
}