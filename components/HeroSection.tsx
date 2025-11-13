

import { MapPin } from "lucide-react"
import Image from "next/image"
import Socials from "./Socials"
import profile from "../public/profile.png"


const HeroSection = () => {
  
  return (
   <section className="mx-auto w-full flex lg:justify-center items-center gap-5 lg:gap-40 max-lg:flex-col">
      <section className="bg-background p-5  border border-accent-foreground rounded-lg">
        <Image src={profile} alt="Profile" width={200} height={200}  className="rounded-lg" />
      </section>
      <section className="card max-sm:mt-5 ">
        <h1 className="text-2xl font-semibold">Hi, I'm <span className="text-chart-2 glow-animate">Sujib</span> Shrestha</h1>
        <p className="text-sm flex font-extralight text-gray-500 "><MapPin className="w-4 h-4 mt-0.5 mr-0.5"/> Based in Nepal</p>
        <hr className="my-3 bg-gray-900" />
        <p className="w-100 font-light">I build, I learn, and I bring ideas to life. <br />Driven by curiosity and creativity, I’m an aspiring developer who loves turning challenges into opportunities to grow.</p>
          <hr className="my-3 bg-gray-900" />
        <div className="mt-5">
         <Socials/>
        </div>
      </section>
   </section>
  )
}

export default HeroSection