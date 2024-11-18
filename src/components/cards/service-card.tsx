import React from 'react';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps > = ({ icon, title, description }) => {
  return (
    <Card className='shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4'>
      {icon}
      <CardTitle className='text-lg font-bold text-neutral-700'>{title}</CardTitle>
      <CardDescription className='text-center text-neutral-500'>{description}</CardDescription>
    </Card>
  );
};

