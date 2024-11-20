"use client";

import { Product } from "@/models/product";
import { ChevronRight, Home, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface MenuContentProps {
  products: Product[]
}

export const MenuContent = (
  { products }: MenuContentProps
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentParams = Object.fromEntries(searchParams.entries());

  const handleClick = (param: string) => {
    if (currentParams.hasOwnProperty(param)) {
      const newParam = { ...currentParams };
      delete newParam[param];
      const href = queryString.stringifyUrl({
        url: `/menu`,
        query: newParam 
      });
      router.push(href);
    }
  };

  return (
    <div className="flex pt-4 pb-24 flex-col items-start">
      <div className="flex text-neutral-700 text-sm items-center">
        <Link href={`/`} className="flex items-center gap-2">
          <Home size={16} className="w-4 h-4" />
          <span>Main Page</span>
        </Link>
        <ChevronRight size={16} className="w-4 h-4 text-muted-foreground" />
        <Link href={`/menu`} className="flex items-center gap-2">
          <span>Products</span>
        </Link>
        {searchParams.has("category") && (
          <>
            <ChevronRight size={16} className="w-4 h-4 text-muted-foreground" />
            <span>{currentParams.category}</span>
          </>
        )}
      </div>
      <div className="flex mt-8 flex-col items-start">
        {searchParams.get("category") && (
          <h2 className="flex items-center gap-2 text-3xl font-semibold text-neutral-700">
            {searchParams.get("category")}
          </h2>
        )}

        <div className="flex gap-3 my-4">
          {
            currentParams && (
              Object.entries(currentParams).map(([key, value]) => (
                <div key={key}
                  onClick={() => handleClick(key)}
                  className="px-4 py-1 cursor-pointer hover:shadow-md rounded-md bg-emerald-500/10 text-neutral-500 flex items-center gap-1">
                  <span>{value}</span>
                  <X size={16} className="w-4 h-4" />
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}
