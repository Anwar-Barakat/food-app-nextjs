"use client";

import { cn } from "@/lib/utils";
import { Cuisine } from "@/models/cuisine";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface CuisineFilterProps {
    cuisines: Cuisine[]
}

export const CuisineFilter = ({ cuisines }: CuisineFilterProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleClick = (cuisine: string) => {
        const currentParams = Object.fromEntries(searchParams.entries());

        if (cuisine === currentParams.cuisine) {
            delete currentParams.cuisine;
        } else {
            currentParams.cuisine = cuisine;
        }

        const href = queryString.stringifyUrl({
            url: `/menu`,
            query: currentParams
        });

        router.push(href);
    }

    return (
        <div className="flex-col gap-2 border-b pb-4 cursor-pointer">
            <h2 className="text-xl font-semibold text-neutral-700">cuisines</h2>
            <div className="flex-col gap-2 mt-2">
                {
                    cuisines.map((cuisine, index) => (

                        <div
                            key={index}
                            className={cn('text-sm font-semibold text-neutral-500   flex items-center gap-2',
                                cuisine.name === searchParams.get('cuisine') && "text-hero"
                            )}
                            onClick={() => handleClick(cuisine.name)}
                        >
                           
                            <p>{cuisine.name}</p>
                            {
                                cuisine.name === searchParams.get('cuisine') && <Check size={20} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
