import Link from 'next/link';
import Image from 'next/image';
import {GithubIcon} from 'lucide-react'

import googleIcon from '@/public/google.svg'


const LoginPage = () => {
    return (
        <div className="px-6 py-10 mt-24 rounded bg-black/80 mtLmt-0 md:max-w-sm md:px-14">
            <form>
                <h1 className="text-2xl font-semibold text-white ">Login</h1>
                <div className="mt-5 space-y-4">
                    <input type="email" name="email" placeholder="Email" className="bg-[#333] placeholder:text-xs  placeholder:text-gray-400 w-full inline-block outline-none ring-0 focus:ring-1 focus:ring-gray-300 focus:outline-none text-gray-300 rounded  border-none"/>
                <button type="submit"  className='w-full bg-[#e50914] rounded p-2 text-white duration-300 hover:contrast-110'>Login</button>
                </div>

            </form>


            <div className='mt-4 text-sm text-gray-200'>
                New to netflix? <Link href='/sign-up'  className='text-white duration-200 hover:underline'>Sign Up Now</Link>
            </div>


            <hr className='my-4'/>


            <div className='flex items-center justify-center w-full gap-3 '>
                <button className=''><GithubIcon className='w-6 h-6 text-white'/></button>
                <button className='w-8 h-8 text-white'>
                    <Image src={googleIcon} alt="google icon"/>
                </button>
            </div>


        </div>
    )
}

export default LoginPage
