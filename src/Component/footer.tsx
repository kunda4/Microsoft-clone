import React from 'react'
import FooterComponent from './footerComponent'

export default function Footer() {
  return (
    <footer>
        <section className='md:py-12 md:px-20 py-4 px-2 bg-gray-100'>
        <div className='flex md:flex-row flex-col md:justify-start justify-center md:gap-28 gap-4'>
        <FooterComponent  title={'Microsoft Store'}/>
        <FooterComponent  title={'Education'}/>
        <FooterComponent  title={'System'}/>
        <FooterComponent  title={'Business'}/>
        <FooterComponent  title={'Magasine'}/>
        <FooterComponent  title={'Imagination'}/>
         
        </div>
        <div className='flex md:flex-row flex-col justify-between md:pt-20 pt-4'>
            <div className='flex md:flex-row flex-col md:gap-8 gap-2'>
                <h5 className='flex gap-2'>
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40" 
                    alt=""
                    className='w-6 h-6' />
                    <span>English(united state)</span>
                </h5>
                <h5 className='flex gap-2'>
                    <img src="data:image/svg+xml,%3Csvg%20role%3D%22img%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2030%2014%22%20xml%3Aspace%3D%22preserve%22%20height%3D%2216%22%20width%3D%2243%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ctitle%3EYour%20Privacy%20Choices%20Opt-Out%20Icon%3C%2Ftitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M7.4%2012.8h6.8l3.1-11.6H7.4C4.2%201.2%201.6%203.8%201.6%207s2.6%205.8%205.8%205.8z%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bfill%3A%23fff%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M22.6%200H7.4c-3.9%200-7%203.1-7%207s3.1%207%207%207h15.2c3.9%200%207-3.1%207-7s-3.2-7-7-7zm-21%207c0-3.2%202.6-5.8%205.8-5.8h9.9l-3.1%2011.6H7.4c-3.2%200-5.8-2.6-5.8-5.8z%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bfill%3A%2306f%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M24.6%204c.2.2.2.6%200%20.8L22.5%207l2.2%202.2c.2.2.2.6%200%20.8-.2.2-.6.2-.8%200l-2.2-2.2-2.2%202.2c-.2.2-.6.2-.8%200-.2-.2-.2-.6%200-.8L20.8%207l-2.2-2.2c-.2-.2-.2-.6%200-.8.2-.2.6-.2.8%200l2.2%202.2L23.8%204c.2-.2.6-.2.8%200z%22%20style%3D%22fill%3A%23fff%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M12.7%204.1c.2.2.3.6.1.8L8.6%209.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4%207.7c-.2-.2-.2-.6%200-.8.2-.2.6-.2.8%200L8%208.6l3.8-4.5c.2-.2.6-.2.9%200z%22%20style%3D%22fill%3A%2306f%22%3E%3C%2Fpath%3E%0A%20%20%20%20%20%20%20%20%3C%2Fsvg%3E" 
                    alt=""
                    className='w-6 h-6' />
                    <span>Your Privacy Your choice</span>
                </h5>
            </div>
            <div className='flex md:flex-row flex-col md:gap-6 gap-2'>
                <span className='text-sm'>Stemap</span>
                <span className='text-sm'>Microsoft World</span>
                <span className='text-sm'>Privacy</span>
                <span className='text-sm'>Stemap</span>
                <span className='text-sm'>Microsoft World</span>
                <span className='text-sm'>Privacy</span>
                <span className='text-sm'>Stemap</span>
                <span className='text-sm'>Microsoft World</span>
                <span className='text-sm'>Privacy</span>
            </div>
        </div>
        </section>
    </footer>
  )
}
