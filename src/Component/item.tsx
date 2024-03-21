import React, { ReactNode } from 'react'

interface itemInterface {
    content?: ReactNode
}

export default function Item({content}:itemInterface) {
  return (
    <div className='border shadow-md'>
    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Test-Surface-Laptop-5-Sandstone-02?wid=406&hei=230&fit=crop" alt="" />
    <div className=' bg-white px-4 py-4 flex flex-col justify-items-end gap-4'>
        <h1 className='text-3xl'>Surface Laptop Studio 2</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Modi sapiente minima, corrupti asperiores recusandae earum 
            distinctio itaque eaque vero, mollitia expedita, quod voluptas? 
            Deserunt sed culpa nesciunt vel, deleniti odit.</p>
        <button className='text-white px-2 w-fit py-2 bg-blue-600'>Surface Laptop Studio 2</button>
    {content}
    </div>
</div>
  )
}
