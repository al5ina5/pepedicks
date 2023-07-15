import React from "react";
import Marquee from "react-fast-marquee";
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface SideScrollProps {
    // children: string
    className?: string
    direction?: "left" | "right" | "up" | "down"
}

export default function SideScroll({ className, direction }: SideScrollProps) {
    return (<div className={classNames("w-full py-3", className)}>
        <Marquee {...{ direction }}>
            {new Array(60).fill(60).map((_, index) => {
                return <><motion.img initial={{ rotate: '-10deg' }} animate={{ rotate: ['-10deg', '10deg', '-10deg'] }} transition={{ repeat: Infinity }} className='h-20 md:h-24 pixelated mr-6' src={`/previews/${index}.png`} alt="" /></>
            })}
        </Marquee>
    </div>);
}

