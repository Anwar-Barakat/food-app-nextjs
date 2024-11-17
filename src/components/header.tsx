"use client";

import { cn } from '@/lib/utils'
import React from 'react'
import Container from '@/components/container'
import Link from 'next/link'
import { MainNav } from '@/components/main-nav'
import { UserButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"


interface HeaderProps {
    userId?: string | null
}

export const Header = (
    { userId }: HeaderProps
) => {
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={cn('w-full z-50 transition',
            scrolled ? 'fixed top-0 left-0 bg-white shadow-md' : 'bg-transparent'
        )}>
            <Container className='relative px-4 sm:px-6 lg:px-12 h-16 flex items-center'>
                <Link href='/' className='uppercase flex gap-x-2 font-bold text-neutral-700 md:text-xl'>Foodies</Link>
               
               <MainNav 
                    scrolled={scrolled}
                    className='hidden md:flex flex-1 justify-center'
               />
               
            {
                userId ? (
                    <div className='ml-4 flex items-center space-x-4'>
                        <UserButton afterSignOutUrl='/'/>
                    </div>
                ):(
                    <div className='ml-4 flex items-center space-x-4'>
                        <Link href='/sign-in'>
                            <Button variant={`outline`}>
                                Sign In
                            </Button>
                        </Link>
                        <Link href='/sign-up'>
                            <Button className='bg-lime-500 text-white hover:bg-lime-600'>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                )
            } 
            </Container>
        </header>
    )
}
