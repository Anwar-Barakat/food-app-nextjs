import { CalendarCheck2, Truck, Utensils } from 'lucide-react'
import React from 'react'
import { ServiceCard } from '@/components/service-card'

export const ServiceSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20'>
      <ServiceCard
        title='Fast Delivery'
        description='Get your orders in no time'
        icon={<Truck className='w-8 h-8 text-hero' />}
      />
      <ServiceCard
        title='Quality Food'
        description='We serve the best quality food'
        icon={<Utensils className='w-8 h-8 text-hero' />}
      />
      <ServiceCard
        title='24/7 Support'
        description='We are here to help you anytime'
        icon={<CalendarCheck2 className='w-8 h-8 text-hero' />}
      />
    </div>
  )
}
