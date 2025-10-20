'use client';
import { IoAddCircleSharp } from "react-icons/io5";
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useState } from "react";
import GalleryWindow from "./gallerywindow";

export default function Gallery(){
    const[window,showWindow] = useState('');
    return(
        <div className="flex flex-col h-[220px]">
            <button className="ml-auto mt-1" onClick={()=>{showWindow("gallerywindow")}}><IoAddCircleSharp className="w-[30px] h-[30px] text-[rgb(58,77,83)]"/></button>
            <div className="flex my-1 w-[100%] justify-between">
                <div className="relative group h-[170px] w-[200px]">
                    <Image src="/PHOTO-2025-10-15-11-01-47.jpg" alt="interior image" fill className="rounded-lg"/>
                    <button className='absolute top-1 right-1 hidden group-hover:block'><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='ml-auto text-white bg-black rounded-sm'/></button>
                </div>
                <div className="relative group h-[170px] w-[200px]">
                    <Image src="/PHOTO-2025-10-15-11-01-47.jpg" alt="interior image" fill className="rounded-lg"/>
                    <button className='absolute top-1 right-1 hidden group-hover:block'><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='ml-auto text-white bg-black rounded-sm'/></button>
                </div>
                <div className="relative group h-[170px] w-[200px]">
                    <Image src="/PHOTO-2025-10-15-11-01-47.jpg" alt="interior image" fill className="rounded-lg"/>
                    <button className='absolute top-1 right-1 hidden group-hover:block'><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='ml-auto text-white bg-black rounded-sm'/></button>
                </div>
                <div className="relative group h-[170px] w-[200px]">
                    <Image src="/PHOTO-2025-10-15-11-01-47.jpg" alt="interior image" fill className="rounded-lg"/>
                    <button className='absolute top-1 right-1 hidden group-hover:block'><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='ml-auto text-white bg-black rounded-sm'/></button>
                </div>
            </div>
            {window==="gallerywindow" && <GalleryWindow showWindow={showWindow}/>}
        </div>
    )
}