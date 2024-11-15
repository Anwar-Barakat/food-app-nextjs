import { cn } from '@/lib/utils'
import React from 'react'

import containerImage from '/images/home/hero.svg'
import Image from 'next/image'

interface ContainerProps {
    className?: string
    children: React.ReactNode
}

const Container = ({
    className,
    children,
}: ContainerProps) => {
    return (
        <div className={cn("max-max max-h-7xl", className)}>
            <Image src={`/images/home/hero.svg`} alt="container"
                className='absolute -z-10 top-0 right-0 w-full md:w-[60%]'
                width={500}
                height={500}
                />
            {children}
        </div>
    )
}

export default Container
