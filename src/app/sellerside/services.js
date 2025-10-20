'use client';
import { IoAddCircleSharp } from "react-icons/io5";
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useState } from "react";
import ServicesWindow from "./serviceswindow";

export default function Services(){
    const[window,showWindow] = useState('');
    return(
        <div className="flex flex-col h-[220px]">
            <button className="ml-auto mt-1 " onClick={()=>{showWindow("serviceswindow")}}><IoAddCircleSharp className="w-[30px] h-[30px] text-[rgb(58,77,83)]"/></button>
            <div className="flex justify-between my-1">
                <div className="flex flex-col gap-2 bg-white rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.3)] group relative pb-2">
                    <Image src="/PHOTO-2025-10-14-20-33-23.jpg" alt="services" width={200} height={200} className="rounded-lg"/>
                    <h4 className="font-bold text-[18px] ml-1">Knitting</h4>
                    <span className="text-[12px] ml-1">Rs. 150 per kg</span>
                    <button className='absolute top-1 right-1 hidden group-hover:block'><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='ml-auto text-white bg-black rounded-sm'/></button>
                </div>
                <div className="flex flex-col gap-2 bg-white rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.3)] group relative pb-2">
                    <Image src="/PHOTO-2025-10-14-20-33-23.jpg" alt="services" width={200} height={200} className="rounded-lg"/>
                    <h4 className="font-bold text-[18px] ml-1">Knitting</h4>
                    <span className="text-[12px] ml-1">Rs. 150 per kg</span>
                    <button className='absolute top-1 right-1 hidden group-hover:block'><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='ml-auto text-white bg-black rounded-sm'/></button>
                </div>
                <div className="flex flex-col gap-2 bg-white rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.3)] group relative pb-2">
                    <Image src="/PHOTO-2025-10-14-20-33-23.jpg" alt="services" width={200} height={200} className="rounded-lg"/>
                    <h4 className="font-bold text-[18px] ml-1">Knitting</h4>
                    <span className="text-[12px] ml-1">Rs. 150 per kg</span>
                    <button className='absolute top-1 right-1 hidden group-hover:block'><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='ml-auto text-white bg-black rounded-sm'/></button>
                </div>
                <div className="flex flex-col gap-2 bg-white rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.3)] group relative pb-2">
                    <Image src="/PHOTO-2025-10-14-20-33-23.jpg" alt="services" width={200} height={200} className="rounded-lg"/>
                    <h4 className="font-bold text-[18px] ml-1">Knitting</h4>
                    <span className="text-[12px] ml-1">Rs. 150 per kg</span>
                    <button className='absolute top-1 right-1 hidden group-hover:block'><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='ml-auto text-white bg-black rounded-sm'/></button>
                </div>
            </div>
            {window==="serviceswindow" && <ServicesWindow showWindow={showWindow}/>}
        </div>
    )
}