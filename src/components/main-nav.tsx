"use client";

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React from 'react'

interface MainNavProps {
  className?: string
  scrolled?: boolean
}

export const MainNav = (
  { className
    , scrolled
  }: MainNavProps
) => {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/'
    },
    {
      href: '/menu',
      label: 'Menu',
      active: pathname === '/menu'
    },
    {
      href: '/orders',
      label: 'Orders',
      active: pathname === '/orders'
    },
    {
      href: '/about',
      label: 'About',
      active: pathname === '/about'
    },
    {
      href: '/contact',
      label: 'Contact',
      active: pathname === '/contact'
    },

  ];
  return (
    <div className='ml-auto'>
      <nav className={cn('flex items-center space-x-4 lg:space-x-12 pl-6',
        className
      )}>

        {routes.map((route, index) => (
          <Link key={route.href}
            href={route.href}
            className={cn('text-neutral-700 hover:text-neutral-900 hover:text-primary',
              route.active ? `${scrolled ? 'text-hero' : 'text-neutral-900 dark:text-white'
                }` : 
                `${scrolled ? 'text-black' : 'text-neutral-700 dark:text-white'
                }`
                )}>
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
