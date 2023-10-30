
import Link from "next/link"
import {AiOutlineGithub,AiOutlineTwitter,AiOutlineMedium} from "react-icons/ai"
import {RxHamburgerMenu,RxCross2} from 'react-icons/rx'
import styles from './Navbar.module.css'
import { useState } from "react";

export default function Navbar(){
    const [isopen, setIsopen] = useState(false);
    const toggleButten = ()=>{
        setIsopen(true);
    }

    const closeButten = ()=>{
        setIsopen(false);
    }

    const options = [
        {title:"Home" , href:"/home"},
        {title:"About" , href:"/about"},
        {title:"Skills" , href:"/skills"},
        {title:"Contact" , href:"/contact"},
        {title:"Blogs" , href:"/blogs"},
    ]

    return (
        <>
        <div className={`flex w-full sticky bg-white top-0 justify-center items-start pt-5 ${isopen ? "bg-black":""}`}>
            <div className={`flex w-full justify-between items-start text-[black] max-md:px-2` }>
                <div>
                    <h2 className="text-xl font-bold">YASH PATEL</h2>
                </div>
                <div className={styles.options}>
                    {
                        options.map((item)=>{
                            return (<Link href={item.href} key={item.title} className="hover:text-light hover:animate-bounce" >{item.title}</Link>)
                        })
                    }
                    
                </div>
               
                <div className="lg:hidden text-3xl text-[black] items-center flex  cursor-pointer">
                    {
                    isopen ? (
                        <RxCross2 onClick = {closeButten}/>
                    ):(
                    <RxHamburgerMenu onClick={toggleButten}/>)
                    }
                </div>
            </div>
            
        </div>
        <div className="bg-black justify-center items-center text-[black] " >
        {
            isopen && (
                <div className="flex flex-col justify-center items-center py-8 gap-8 bg-black">
                {
                    options.map((item)=>{
                        return (<Link href={item.href} key={item.title} className="">{item.title}</Link>)
                    })
                }
                
            </div>

            )
        }
        
    </div>
    </>
    )
}