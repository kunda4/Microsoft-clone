import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between px-16 py-4 overflow-y-hidden'>
        <ul className='flex gap-6 text-sm items-center'>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" 
            alt="Microsoft logo"
            className='w-24 h-6'/>
            <li className='hover:underline cursor-pointer'>Microsoft 365</li>
            <li className='hover:underline cursor-pointer'>Teams</li>
            <li className='hover:underline cursor-pointer'>Copilot</li>
            <li className='hover:underline cursor-pointer'>Windows</li>
            <li className='hover:underline cursor-pointer'>Surface</li>
            <li className='hover:underline cursor-pointer'>Surface</li>
            <li className='hover:underline cursor-pointer'>Xbox</li>
            <li className='hover:underline cursor-pointer'>Deals</li>
            <li className='hover:underline cursor-pointer'>Small business</li>
            <li className='hover:underline cursor-pointer'>Support</li>
        </ul>
        <div className='flex gap-6 text-sm'>
        <h5 className='flex gap-2 items-center hover:underline'>All Microsoft <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        </span></h5>
        <h5 className='flex gap-2 items-center hover:underline'>Search<span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </span></h5>
        <h5 className='flex gap-2 items-center hover:underline'>carts <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        </span></h5>
        <h5 className='flex gap-2 items-center'>Sign in <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 border border-gray-500 rounded-full text-gray-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
        </span></h5>
        </div>
    </nav>
  )
}
