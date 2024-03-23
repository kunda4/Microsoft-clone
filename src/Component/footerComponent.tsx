import React, { ReactNode } from 'react'

interface titleComp{
    title: ReactNode;
}
export default function FooterComponent({title}: titleComp) {

  return (
    <div className='flex flex-col gap-4'>
    <h4 className='text-xl'>{title}</h4>
    <span className='text-sm'>Surface Laptop 5</span>
    <span className='text-sm'>Surface Laptop 5</span>
    <span className='text-sm'>Surface Laptop 5</span>
    <span className='text-sm'>Surface Laptop 5</span>
    <span className='text-sm'>Surface Laptop 5</span>
    <span className='text-sm'>Surface Laptop 5</span>
    <span className='text-sm'>Surface Laptop 5</span>
    <span className='text-sm'>Surface Laptop 5</span>
</div>
  )
}
