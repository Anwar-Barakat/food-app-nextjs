import React from 'react'

interface HeaderSectionProps {
    title: string;
    description: string;
}

export const HeaderSection = (
    { title, description }: HeaderSectionProps
) => {
    return (
        <>
            <h2 className='text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4'>
                {title}
            </h2>
            <p className='w-full text-center md:max-w-[560px] text-base text-neutral-500 my-2'>
                {description}
            </p>
        </>
    )
}
