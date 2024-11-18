import React from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export const SpecialChefContent = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20'>
      <Card className='shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30'>
        <Image src={`/images/home/chef1.png`}
          alt="container"
          className='object-contain w-full h-full'
          width={500}
          height={500}
        />
      </Card>
      <Card className='shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30 mt-20'>
        <Image src={`/images/home/chef2.png`}
          alt="container"
          className='object-contain w-full h-full'
          width={500}
          height={500}
        />
      </Card>
      <Card className='shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30'>
        <Image src={`/images/home/chef3.png`}
          alt="container"
          className='object-contain w-full h-full'
          width={500}
          height={500}
        />
      </Card>
    </div>
  )
}
