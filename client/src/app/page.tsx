"use client"
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Links from "@/components/Links";

export default function Home(){
  return(
    //outside screen // main screen
    <div className="w-[100vw] h-[400vh] bg-dark-green flex justify-center">
    {/* inner container */}
      <div className="w-[80%] max-lg:w-[100%] h-[100vh] flex flex-col justify-start max-lg:px-1">

        <Navbar/>
        <Profile/>
        <Links/>
        <Skills/>

      </div>
    </div>
  )
}