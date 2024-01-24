/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import Link from 'next/link'
import { Button } from '@/components/Button/Button'

export interface FAQProps {
    question: string,
    answer: string,
    id: number
    className?: string
}

export const FAQData = [
    {
        question: 'How many participants can join a ClearLink video conference?',
        answer: 'ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.',
        id: 1
    },

    {
        question: 'Can I use ClearLink on multiple devices?',
        answer: 'Yes, You can try us for free for 30 days. If You want, we will provide You with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. ',
        id: 2
    },

    {
        question: "Is ClearLink compatible with other video conferencing platforms?",
        answer: "Yes, You can try us for free for 30 days. If You want, we will provide You with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. ",
        id: 3
    },

    {
        question: 'How does ClearLink ensure the security of my video conferences?',
        answer: 'Yes, You can try us for free for 30 days. If You want, we will provide You with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. ',
        id: 4
    },

    {
        question: 'Do I need to download any software to use ClearLink?',
        answer: 'Yes, You can try us for free for 30 days. If You want, we will provide You with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. ',
        id: 5
    },

    {
        question: ' What kind of customer support does ClearLink provide?',
        answer: 'Yes, You can try us for free for 30 days. If You want, we will provide You with a free, personalized 30-minute onboarding call to get you up and running as soon as possible. ',
        id: 6
    },
]

export const FAQlayout: React.FC<FAQProps> = ({ question, answer, className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={`min-h-[50px] flex flex-col w-[500px] p-5 justify-center ${isOpen ? 'bg-[#F9FAFB] shadow-md rounded-md' : 'border-b-[1px] border-[#EAECF0] shadow-sm'}`}>
            <div className={`flex  items-center  justify-between  w-full `}>
                <div className={` font-bold justify-start flex text-base`}>
                    <h3 >
                        {question}
                    </h3>
                </div>
                <div
                    className={` text-base  w-[20px] h-[20px] bg-transparent cursor-pointer text-[#98A2B3] border-[1px] rounded-full  flex justify-end items-center p-1  hover:bg-grey4  ${isOpen ? 'justify-end' : 'justify-end'}`}
                    onClick={toggleOpen}
                >
                    {isOpen ? <><AiOutlineMinus /></> : <><AiOutlinePlus /></>}
                </div>

            </div>
            <div className={`flex  items-center `}>
                {isOpen && <p className={`my-2 text-[13px] w-[415px] font-normal ${className} flex`}>{answer}</p>}
            </div>

        </div>

    )
}
