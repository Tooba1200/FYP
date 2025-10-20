import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function ServicesWindow({showWindow}){
    const[service,setService] = useState('');
    const[price,setPrice] = useState('');
    return(
        <>
            <div className='w-full h-full fixed inset-0 backdrop-blur-sm bg-opacity-30 z-10'></div>
            <div className="bg-[rgb(50,69,75)] z-20 flex flex-col rounded-lg w-[30%] aspect-16/9 p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className="font-bold text-white">Add Services</h2>
                <button className='absolute top-3 right-2' onClick={()=>showWindow('')}><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='text-white bg-black rounded-sm'/></button>
                <div className='flex gap-4 m-auto h-[45%]'>
                    <div className="border-1 w-[40%] aspect-square bg-white grid place-items-center rounded-md text-[8px] px-1">upload image</div>
                    <div className='flex flex-col gap-2'>
                        <input className='border-b-1 border-white outline-none text-white' type='text' value={service} onChange={(e)=>{setService(e.target.value)}}/>
                        <input className='border-b-1 border-white outline-none text-white' type='numbers' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                    </div>
                </div>
                <button className='px-2 rounded-md ml-auto bg-white'>Done</button>
            </div>
        </>
    );
}