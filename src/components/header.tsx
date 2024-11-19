"use client";

import { cn } from '@/lib/utils'
import React from 'react'
import Container from '@/components/container'
import Link from 'next/link'
import { MainNav } from '@/components/main-nav'
import { UserButton } from '@clerk/nextjs'

interface HeaderProps {
    userId?: string | null
}

export const Header = (
    { userId }: HeaderProps
) => {
    const [isScrolled, setIsScrolled] = React.useState(false)
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll
        )
    }, [])

    return (
        <header className={cn('w-full z-50 transition',
            isScrolled ? 'bg-white shadow-md fixed top-0 left-0' : 'bg-transparent'
        )}>
            <Container className='relative px-4 sm:px-6 lg:px-12 h-16 flex items-center'>
                <Link href='/' className='uppercase flex gap-x-2 font-bold text-neutral-700 md:text-xl'>Foodies</Link>

                <MainNav
                    scrolled={isScrolled}
                />

                {
                    userId ? (
                        <div className='ml-4 flex items-center space-x-4'>
                            <UserButton afterSignOutUrl='/' />
                        </div>
                    ) : (
                        <div className='ml-4 flex items-center space-x-4'>
                            <Link href='/sign-in' className='text-neutral-700 hover:text-neutral-900'>Sign in</Link>
                            <Link href='/sign-up' className='btn btn-primary'>Sign up</Link>
                        </div>
                    )
                }
            </Container>
        </header>
    )
}
