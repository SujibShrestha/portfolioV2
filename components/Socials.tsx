import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { LinkIcon } from 'lucide-react'
import Link from 'next/link'

const Socials = () => {
    const linkedin = <LinkIcon/>
    const socials = [
        {name:"GitHub",src:"/github.png",href:'https://github.com/SujibShrestha'},
        {name:"Linkedn",src:"/linkedin.png",href:"https://www.linkedin.com/in/sujib-shrestha-245868282/"},

    ]
  return (
    <div className='flex
     items-center justify-between'> <Button
     className="p-5 text-lg cursor-pointer hover:bg-chart-2">
            Resume
          </Button>
        <div className='flex items-end  m-2'>
          {socials.map((item, id) => (
            <div
              key={id}
              className='relative group p-2 flex justify-center items-center cursor-pointer'
            >
<Link href={item.href}>
              <Image
                src={item.src}
                width={18}
                height={18}
                alt={item.name}
                className='transition-transform duration-200 group-hover:scale-110'
              />
              <span className='absolute bottom-[-30px] z-10  bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity'>
                {item.name}
              </span></Link>
            </div>
          ))}
        </div>
          </div>
  )
}

export default Socials