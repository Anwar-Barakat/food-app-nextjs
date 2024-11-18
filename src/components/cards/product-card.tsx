"use client";

import { Product } from "@/models/product";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, HeartCrackIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";

interface ProductContentProps {
  product: Product
}

export const ProductCard = ({ product }: ProductContentProps) => {
  const [isLiked, setIsLiked] = React.useState(false)

  const isLikedIcon = isLiked ? Heart : HeartCrackIcon

  return (
    <Card className='w-full  max-h-[340px] rounded-md bg-white shadow-lg flex flex-col items-center justify-center relative py-6 md:pt-24'>
      <div className="absolute -top-[4%] md:-top-[20%] overflow-hidden w-24 md:w-40 h-24 md:h-40 rounded-full bg-hero flex flex-col-reverse justify-center p-1 md:p-2">
        <div className="w-full h-full rounded-full bg-white relative">
          <Image src={product.images[0].url}
            alt={product.name}
            width={150}
            className="w-full h-full object-contain"
            height={150} />
        </div>
      </div>

      <Link href={`/menu/${product.id}`} className="w-full px-2 text-center">
        <CardTitle className='text-lg font-bold text-neutral-700 my-4'>{product.name}</CardTitle>
      </Link>
      <div className="w-full flex items-center justify-center gap-2 flex-wrap px-2 mt-4">
        {
          product.cuisine && (
            <div className="rounded-md bg-emerald-500/10  px-2 py-[2px] text-[9px] font-normal capitalize whitespace-nowrap">
              {product.cuisine}
            </div>
          )
        }
        {
          product.category && (
            <div className="rounded-md bg-lime-500/10  px-2 py-[2px] text-[9px] font-normal capitalize whitespace-nowrap">
              {product.category}
            </div>
          )
        }
        {
          product.kitchen && (
            <div className="rounded-md bg-rose-500/10  px-2 py-[2px] text-[9px] font-normal capitalize whitespace-nowrap">
              {product.kitchen}
            </div>
          )
        }
        {
          product.size && (
            <div className="rounded-md bg-cyan-500/10  px-2 py-[2px] text-[9px] font-normal capitalize whitespace-nowrap">
              {product.size}
            </div>
          )
        }
      </div>

      <CardDescription className="text-center px-2 my-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, sapiente?
      </CardDescription>

      <div className="w-full flex items-center px-2 mt-4 gap-3">
        <Button className='px-4 py-2 rounded-full font-bold text-muted-foreground' variant={`outline`}>
          AED {product.price}
        </Button>
        <Link href={`/menu/${product.id}`}>
          <Button className='px-4 py-2 rounded-full bg-hero hover:bg-lime-500'>
            Order Now
          </Button>
        </Link>
      </div>

      <Button className="absolute top-4 right-0 rounded-tl-none rounded-tr-md rounded-bl-none rounded-br-md p-2 px-3" variant={`outline`}
        onClick={() => {}}
      >
        <ShoppingCartIcon className="w-4 h-4" />
      </Button>

      <Button className="absolute top-4 left-0 rounded-tl-md rounded-tr-none rounded-bl-md rounded-br-none p-2 px-3" variant={`outline`}
        onClick={() => setIsLiked(!isLiked)}
      >
        {React.createElement(isLikedIcon, { className: 'w-4 h-4' })}
      </Button>
    </Card>
  )
}
