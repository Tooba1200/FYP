import { Icon } from '@iconify/react';

export default function GalleryWindow({showWindow}){
    return(
        <>
            <div className='w-full h-full fixed inset-0 backdrop-blur-sm bg-opacity-30 z-10'></div>
            <div className="bg-[rgb(50,69,75)] z-20 flex flex-col rounded-lg w-[30%] aspect-16/9 p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h2 className="font-bold text-white">Add Factory Image</h2>
                <button className='absolute top-3 right-2' onClick={()=>showWindow('')}><Icon icon="fluent-emoji-high-contrast:cross-mark-button" width={18} height={18} className='text-white bg-black rounded-sm'/></button>
                <div className="border-1 w-[30%] aspect-square bg-white m-auto grid place-items-center rounded-md text-[12px]">upload image</div>
                <button className='px-2 rounded-md ml-auto bg-white'>Done</button>
            </div>
        </>
    );
}