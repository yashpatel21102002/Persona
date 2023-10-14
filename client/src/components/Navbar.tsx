
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
        <div className={`flex w-full justify-center items-start pt-5 ${isopen ? "bg-black":""}`}>
            <div className={`flex w-full justify-between items-start px-10 text-white max-md:px-2` }>
                <div>
                    <h2 className="text-xl font-bold">YASH PATEL</h2>
                </div>
                <div className={styles.options}>
                    {
                        options.map((item)=>{
                            return (<Link href={item.href} key={item.title} className="">{item.title}</Link>)
                        })
                    }
                    
                </div>
                <div className="max-lg:hidden flex text-3xl items-center gap-3 text-white">
                    <Link href="" className="bg-black"><AiOutlineGithub/></Link>
                    <Link href="" className="bg-black"><AiOutlineTwitter/></Link>
                    <Link href="" className="bg-black"><AiOutlineMedium/></Link>


                </div>
                <div className="lg:hidden text-3xl text-white items-center flex  cursor-pointer">
                    {
                    isopen ? (
                        <RxCross2 onClick = {closeButten}/>
                    ):(
                    <RxHamburgerMenu onClick={toggleButten}/>)
                    }
                </div>
            </div>
            
        </div>
        <div className="bg-light justify-center items-center text-white">
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
        {
            isopen && (
        <div className=" flex text-3xl items-center gap-3 text-white">
                    <Link href="" className="bg-black"><AiOutlineGithub/></Link>
                    <Link href="" className="bg-black"><AiOutlineTwitter/></Link>
                    <Link href="" className="bg-black"><AiOutlineMedium/></Link>


        </div>)
    }
    </div>
    </>
    )
}