import {BsTwitter} from 'react-icons/bs'
import {AiFillMediumSquare , AiOutlineGithub,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {SiCodechef,SiLeetcode,SiCodeforces} from 'react-icons/si'
import { RxVercelLogo } from 'react-icons/rx'
import Link from 'next/link'


export default function Links(){
    return (
        <div className="mt-24 max-lg:mt-8">
             {/* <h1 className="text-2xl flex font-medium max-lg:text-lg text-white justify-center items-center">Important Links</h1> */}
            <div className="w-full bg-light max-lg:h-auto h-[120px] flex flex-col gap-5 items-center text-white pb-4 justify-center">
                <h1 className="text-2xl font-medium max-lg:text-lg">Socials</h1>
                <div className="grid gap-7 grid-cols-9 max-lg:grid-cols-4 max-md:grid-cols-3">
                    <Link href="https://twitter.com/NicePerson2110" target="_blank" className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-white ">
                        <BsTwitter />
                        <span className='text-sm font-md'>Twitter</span>

                    </Link>
                    <Link className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-white " href="https://github.com/yashpatel21102002/yashpatel21102002.git" target='_blank'>
                        <AiOutlineGithub />
                        <span className='text-sm font-md'>Github</span>

                    </Link>
                    <Link className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-white "
                    href="https://medium.com/@niceperson2110" target="_blank">
                        <AiFillMediumSquare />
                        <span className='text-sm font-md'>Medium</span>

                    </Link>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-white ">
                        <AiFillLinkedin />
                        <span className='text-sm font-md'>Linkedin</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-white ">
                        <AiFillInstagram />
                        <span className='text-sm font-md'>Instagram</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-white ">
                        <SiCodechef
                         />
                        <span className='text-sm font-md'>Codechef</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-white ">
                        <SiCodeforces />
                        <span className='text-sm font-md'>Codeforces</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-white ">
                        <SiLeetcode />
                        <span className='text-sm font-md'>Leetcode</span>

                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl cursor-pointer hover:text-white ">
                        <RxVercelLogo />
                        <span className='text-sm font-md'>Vercel</span>

                    </div>
                </div>

            </div>

        </div>
    )
}