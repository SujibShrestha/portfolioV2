import Image from 'next/image'
import React from 'react'

const Tech = () => {
  const tech = [{name:"NextJS",src:"/nextjs.png"},
    {name:"ReactJS",src:"/react.png"},
  {name:"NodeJS",src:"/nodejs.png"},
  {name:"TailwindCSS",src:"/tailwindcss.png"},
  {name:"Html5",src:"/html.svg"},
  {name:"MySql",src:"/mysql.png"},
  {name:"CSS3",src:"/css.svg"},
  {name:"Postgres",src:"/postgres.svg"},
  {name:"Supabase",src:"/supabase.png"},
  {name:"Neon",src:"/neon.png"},
  {name:"MongoDb",src:"/mongodb.png"},
  {name:"TypeScript",src:"/ts.png"},
  ]
  return (
    <section  className='my-10 flex items-center justify-center   w-full'>
<section className='bg-card rounded-lg border border-gray-500 md:w-[80vh] w-full p-5'>

<h1 className='text-2xl'>Technologies</h1>
<div className='grid grid-cols-7 gap-3 m-2'>
  {tech.map((item, id) => (
    <div
      key={id}
      className='relative group h-15 w-15 p-2 flex justify-center items-center cursor-pointer'
    >
      <Image
        src={item.src}
        width={40}
        height={40}
        alt={item.name}
        className='transition-transform duration-200 group-hover:scale-110'
      />
      <span className='absolute bottom-[-30px] z-10  bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity'>
        {item.name}
      </span>
    </div>
  ))}
</div>

</section>
    </section>  
  )
}

export default Tech