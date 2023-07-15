'use client'
import SideScroll from '@/components/SideScroll'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ReactTyped from 'react-typed'

export default function Home() {
    return (
        <>
            <div className='h-full flex flex-col'>
                <SideScroll className='bg-green-500 shadow border-b-2 border-white' />
                <div className='bg-gradient-to-b from-green-500 to-green-700 flex-1 p-12 lg:p-24 space-y-24'>
                    <div className='max-w-4xl mx-auto flex flex-col md:flex-row gap-12'>
                        <motion.img initial={{ translateY: '-10px' }} animate={{ translateY: ['-10px', '10px', '-10px'] }} transition={{ repeat: Infinity, duration: 4 }} className='w-full lg:w-48 pixelated' src="/logo.png" alt="" />
                        <div className='window w-full font-gamer-bold text-white drop-shadow-lg space-y-6'>

                            <ReactTyped
                                strings={['ser, wot if i told u PepeDicks is da next big thing huh? what if u faded me and u missed it? or what if u know what happen? what if est laborum aliquip nulla cupidatat qui commodo dolore consectetur est? what if..?']}
                                typeSpeed={40}
                            />
                        </div>
                    </div>

                    {/* <div className='max-w-4xl mx-auto'>
                        <p className='font-gamer-bold '>
                            Collect em' all!
                        </p>
                    </div> */}

                    <div className='max-w-4xl mx-auto grid grid-cols-2 gap-6'>
                        <div className='font-gamer-bold bg-gray-400 p-3 text-black border-emboss'>Mint</div>
                        <div className='font-gamer-bold bg-gray-400 p-3 text-black border-emboss'>Twitter</div>
                        <div className='font-gamer-bold bg-gray-400 p-3 text-black border-emboss'>Discord</div>
                    </div>
                </div>
                <SideScroll className='bg-green-700 shadow border-t-2 border-white' direction="right" />
            </div>
        </>
    )
}
