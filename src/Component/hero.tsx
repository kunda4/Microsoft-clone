import React from 'react'
import pause from'../assets/pause.svg'
import leftIcon from'../assets/leftIcon.svg'
import rightIcon from'../assets/rightIcon.svg'
import circle1 from'../assets/circle1.svg'
import circle2 from'../assets/circle2.svg'
import { heroLinks } from '../../utils/heroLinks'
export default function HeroPage() {


    const heroLinkItems = heroLinks.map((item) => (
        <p key={item.imageUrl} className='flex flex-col gap-4 items-center'>
        <img src={item.imageUrl} 
        alt="Shop surface devices"
        className='w-12 h-12' />
        <span className='text-blue-600 underline'>{item.title}</span>
    </p>
    
    ))
  return (
    <>
    <div className='md:relative mx-1'>
        <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Event-March-21-2024:VP5-1920x600" 
        alt="" 
         />
        <div className='md:absolute relative flex flex-col md:w-[40%] gap-4 py-6 px-6 md:top-[30%] md:left-20
        '>
            <h1 className='md:text-4xl text-xl'>Advanced a new error of Work with Copilot</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatibus pariatur obcaecati reiciendis voluptatum 
                doloremque eos voluptas, ex, voluptates dolorem quisquam ad in. 
                Id molestiae quo ducimus enim voluptatem, earum ipsa.</p>
            <button className='bg-blue-600 px-2 py-2 text-white w-32'>learn More</button>
        </div>
    </div>
    <section>
        <div className='flex md:gap-4 gap-2 justify-center py-8'>
        <img src={pause} alt="pause icon" className='h-6 w-6'/>
        <img src={leftIcon} alt="leftIcon" className='h-6 w-6'/>
        <img src={circle1} alt="circle icon" className='h-6 w-6'/>
        <img src={circle2} alt="circle icon" className='h-6 w-6'/>
        <img src={rightIcon} alt="right icon" className='h-6 w-6'/>
        </div>

        <div className='flex md:flex-row flex-col justify-center md:gap-20 gap-4'>
            {heroLinkItems}
        </div>
    </section>
    </>

  )
}
