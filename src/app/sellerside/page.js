'use client';
import Image from 'next/image';
import { MdLocationOn } from "react-icons/md";
import { Icon } from '@iconify/react';
import Services from './services';
import Gallery from './gallery';
import AboutUS from './about';
import { useState } from 'react';

export default function SellerPage() {
  const[clickButton, showClickedButton] = useState('services');
  return (
    <div className="h-[100dvh] bg-white text-black overflow-y-scroll z-0">
      <div className='bg-white p-1 mb-3'>
        <Image src="/PHOTO-2025-09-30-21-49-13.jpg" alt="Logo" width={100} height={100}/>
      </div>
      <div className="m-auto relative h-[350px] mx-2 my-3">
        <Image src="/PHOTO-2025-10-14-20-33-23.jpg" alt="Logo" fill className="w-full rounded-lg"/>
      </div>
      <div className='bg-white m-2 rounded-lg p-2 shadow-[0_0_8px_rgba(0,0,0,0.3)]'>
        <div className='flex items-center'>
          <Image src="/PHOTO-2025-10-14-20-33-23.jpg" alt='logo' width={120} height={120} className='border-1 border-black rounded-lg mr-4'/>
          <div className='flex flex-col'>
            <div>
              <h2 className='font-bold'>Brooklyn Textile International Pvt ltd</h2>
              <p className='flex items-center text-[12px]'><MdLocationOn/>Chak-196 Dry Port Road</p>
            </div>
            <div className='flex gap-3 mt-2'>
              <div className='flex flex-col items-center p-2 rounded-lg w-[60%] h-[40%] bg-[rgb(217,217,217)]'>
                <span><Icon icon="carbon:industry" width={24} height={17}/></span>
                <span className='text-[12px] font-bold'>Industry</span>
                <span className='text-[10px]'>Metal Manufacturing</span>
              </div>
              <div className='flex flex-col items-center p-2 rounded-lg w-[60%] h-[40%] bg-[rgb(217,217,217)]'>
                <span><Icon icon="streamline-ultimate:coding-apps-website-network-globe" width={24} height={17}/></span>
                <span className='text-[12px] font-bold'>Website</span>
                <span className='text-[10px]'>www.google.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white m-2 rounded-lg p-2 shadow-[0_0_8px_rgba(0,0,0,0.3)]'>
        <div className='w-[60%] flex justify-between'>
          <button className={`p-2 hover:border-b-1 border-b-black ${clickButton==="services"?"text-black border-b-black border-b-1":"text-[rgb(134,134,134)]"}`} onClick={()=>{showClickedButton('services')}}>Services</button>
          <button className={`p-2 hover:border-b-1 border-b-black ${clickButton==="about"?"text-black border-b-1 border-b-black":"text-[rgb(134,134,134)]"}`} onClick={()=>{showClickedButton('about')}}>About Us</button>
          <button className='py-2 text-[rgb(134,134,134)]'>Reviews</button>
          <button className={`p-2 hover:border-b-1 border-b-black ${clickButton==="gallery"?"text-black border-b-1 border-b-black":"text-[rgb(134,134,134)]"}`} onClick={()=>{showClickedButton('gallery')}}>Gallery</button>
        </div>
        <hr className='text-[rgb(239,239,239)]'/>
        {clickButton==='services' && <Services/>}
        {clickButton==='about' && <AboutUS/>}
        {clickButton==='gallery' && <Gallery/>}
      </div>
      <span className='m-2 pb-2 text-[rgb(37,80,157)] underline'>Switch to Buyer Account</span>
    </div>
  );
}