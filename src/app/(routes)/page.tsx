import getProducts from '@/actions/get-products'
import Container from '@/components/container'
import { HeaderSection } from '@/components/section-header'
import { ProductCard } from '@/components/cards/product-card'
import { ServiceSection } from '@/components/sections/service-content'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SpecialChefContent } from '@/components/sections/special-chef-content'

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({
        isFeatured: true,
    })
    console.log(products)
    return (
        <>
            <Container className='px-4 md:px-12'>
                <section className='grid grid-cols-1 md:grid-cols-2 py-12 pt-16'>
                    <div className='flex flex-col justify-start gap-4'>
                        <p className='px-6 py-1 rounded-full text-neutral-500 border border-gray-300 w-fit'>
                            Hungry?
                        </p>
                        <h2 className='text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4'>
                            Just Come To <span className='block py-4'>foodies and order</span>
                        </h2>
                        <p className='text-base text-center md:text-left text-neutral-500 my-4'>
                            {/* give me description for foodies 20 words */}
                            Foodies is a food blog that shares recipes and cooking tips. Foodies is a food blog that shares recipes and cooking tips.
                        </p>
                        <div className='my-4 flex text-center justify-center gap-6 w-full md:w-auto'>
                            <Link
                                href={'/menu'}
                            >
                                <Button className='px-8  md:px-16 py-4 md:py-6 rounded-full bg-hero
                                    hover:bg-lime-500'>Order Now</Button>
                            </Link>
                            <Link
                                href={'/menu'}
                            >
                                <Button className='px-8  md:px-16 py-4 md:py-6 rounded-full' variant={`outline`}>Explore More</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full relative h-[550px] flex items-center justify-center'>
                        <Image src={`/images/home/food.png`}
                            alt="container"
                            className='object-contain w-full absolute'
                            width={500}
                            height={500}
                        />
                    </div>
                </section>

                <section className='grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12'>
                    {
                        products?.slice(0, 4).map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    }
                </section>

                <section className='flex flex-col items-center justify-center my-12 py-12'>
                    <HeaderSection
                        title="why choose us?"
                        description='Foodies is a food blog that shares recipes and cooking tips. Foodies is a food blog that shares recipes and cooking tips.'
                    />

                    <ServiceSection />
                </section>

                <section className='flex flex-col items-center justify-center my-12 py-12'>
                    <HeaderSection
                        title="our special chefs"
                        description="Our chefs are the best in the world. They have years of experience and have worked in the best restaurants in the world."
                    />

                    <SpecialChefContent />
                </section>
            </Container>
        </>
    )
}

export default HomePage
