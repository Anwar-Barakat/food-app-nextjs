import { cn } from '@/lib/utils';
import React from 'react'

interface MenuSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const FilterContainer = ({ children, className }: MenuSidebarProps) => {
    return (
        <div className={cn('flex-col gap-4',
            className)}>
            {children}
        </div>
    )
}