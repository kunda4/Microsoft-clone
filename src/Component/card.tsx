import React from 'react'
import leftIcon from '../assets/leftIcon.svg'
import top from '../assets/top.svg'
import Item from './item'
export default function Card() {
  return (
<section className='md:py-12 md:px-20 py-4 px-1'>
    <div className='flex md:flex-row flex-col justify-center gap-6 py-8'>
<Item/>
<Item/>
<Item content={
    <h5 className='flex gap-2 text-blue-400'>For up to 6 People 
    <span >
        <img src={leftIcon} 
        alt="leftIcon"
        className='h-6 w-6' />
    </span></h5>
}/>
<Item/>
    </div>
    <div className='md:relative md:py-12 py-4'>
        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-MultiCanvas-Microsoft-Copilot-App-3screens:VP5-1596x600" 
        alt="image" 
         />
        <div className='md:absolute flex flex-col md:w-[35%] gap-4 py-6 px-6 md:top-[30%] md:left-20
        '>
            <h1 className='md:text-3xl text-xl font-bold'>Advanced a new error of Work with Copilot</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatibus pariatur obcaecati reiciendis voluptatum 
                doloremque eos voluptas, ex, voluptates dolorem quisquam ad in. 
                Id molestiae quo ducimus enim voluptatem, earum ipsa.</p>
            <button className='bg-blue-600 px-2 py-2 text-white w-32'>learn More</button>
        </div>
    </div>
    <div className='w-full flex justify-end sticky right-0 bottom-2'>
    <div className='flex items-center gap-2 bg-gray-400 w-fit px-2 py-2'>
    <img src={top} 
    alt="back to top"
    className='w-4 h-4' />
    <button>Back to top</button>
    </div> 
    </div>
</section>
  )
}
