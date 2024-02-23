"use client";


import React, { useState } from 'react';
import linkedin from "@/public/in.svg";
import iit from "@/public/iit.svg";
import placeholder from "@/public/profile.svg";
import Image from 'next/image';

interface ProfileProps {
    name: string;
    role: string;
    degree: string;
    linkedinImg?: string;
    iitImg?: string;
    placeholderImg?: string;
    review?: string; // Added review prop
}

const Profile = ({
    name,
    role,
    degree,
    linkedinImg = linkedin,
    iitImg = iit,
    placeholderImg = placeholder,
    review, // Added review prop
}: ProfileProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // Conditional rendering of review based on hover state
    const renderedContent = isHovered ? (
        <div className="review-container pt-6 transition-all delay-300 text-xs lg:text-md  linear duration-300 ">
            {review} {/* Display the review text */}
        </div>
    ) : (
        <div className="dark:bg-[#1C202A] bg-[#E1FFE8] rounded-[20px] flex flex-col ">
            <span className='md:mb-[20px] mb-[10px] font-[400] md:text-[18px] text-[12px] text-[#19B851]'>
                {role}
            </span>
            <span className='pt-[22px] font-[400] md:text-[16px] text-[10px] dark:text-[White] text-[#101010]'>
                {degree}
            </span>
            <div className="flex justify-between pt-[16px]">
                <Image src={iitImg} alt="college" />
                <Image src={linkedinImg} alt='linkedin' />
            </div>
        </div>
    );

    return (
        <div
            className="rounded-[20px] w-[250px] lg:w-[300px] flex flex-col justify-between items-center bg-[#191c1e]"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={placeholderImg}
                alt="placeholder-image"
                className="w-[200px] h-[180px]"
            />
            <div
                className={`dark:bg-[#1C202A] bg-[#E1FFE8] rounded-[20px] flex flex-col py-6 px-10 ${isHovered ? "fixed w-[250px] lg:w-[300px] h-full " : ""
                    }`}
            >
                <span className="name font-[500] md:text-[24px] text-[16px] dark:text-[White] text-[#101010]">
                    {name}
                </span>
                {renderedContent}
            </div>
        </div>
    );
};

export default Profile;
