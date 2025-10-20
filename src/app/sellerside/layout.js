import { Icon } from '@iconify/react';

export default function SellerLayout({ children }) {
  return (
    <div className="h-[100dvh] w-full bg-white flex text-white">
      <div className="h-full w-[20%] bg-[rgb(50,69,75)] flex flex-col px-1">
        <button className='p-4'><Icon icon="fluent:panel-left-24-filled" width={24} height={24} /></button>
        <button className="flex p-4 hover:bg-[rgba(39, 177, 87, 1)] border-b-1 border-[rgb(58,77,83)] items-center ">
          <Icon icon="oui:app-dashboard" width={24} height={17} className='mr-4' />
          Partners
        </button>
        <button className="flex p-4 hover:bg-[rgb(161, 207, 219)]! border-b-1 border-[rgb(58,77,83)] items-center ">
          <Icon icon="fluent:clipboard-text-edit-20-regular" width={24} height={24} className='mr-4' />
          Contracts
        </button>
        <button className="flex p-4 hover:bg-[rgb(161, 207, 219)]! border-b-1 border-[rgb(58,77,83)] items-center ">
          <Icon icon="ix:box-open" width={24} height={24} className='mr-4'/>
          Orders
        </button>
        <button className="flex p-4 hover:bg-[rgb(161, 207, 219)]! border-b-1 border-[rgb(58,77,83)] items-center ">
          <Icon icon="mdi:chat-outline" width={24} height={24} className='mr-4'/>
          Chats
        </button>
        <button className="flex text-lg p-4 mt-auto items-center font-semibold text-[rgb(191,151,55)] bg-[rgba(39, 177, 87, 0.1)]">
          <Icon icon="gg:profile" width={24} height={24} className='mr-4'/>
          Profile
        </button>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}