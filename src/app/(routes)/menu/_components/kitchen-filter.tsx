"use client";

import { cn } from "@/lib/utils";
import { Kitchen } from "@/models/kitchen";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface KitchenFilterProps {
    kitchens: Kitchen[]
}

export const KitchenFilter = ({ kitchens }: KitchenFilterProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleClick = (kitchen: string) => {
        const currentParams = Object.fromEntries(searchParams.entries());

        if (kitchen === currentParams.kitchen) {
            delete currentParams.kitchen;
        } else {
            currentParams.kitchen = kitchen;
        }

        const href = queryString.stringifyUrl({
            url: `/menu`,
            query: currentParams
        });

        router.push(href);
    }

    return (
        <div className="flex-col gap-2 border-b pb-4 cursor-pointer">
            <h2 className="text-xl font-semibold text-neutral-700">Kitchens</h2>
            <div className="flex-col gap-2 mt-2">
                {
                    kitchens.map((kitchen, index) => (

                        <div
                            key={index}
                            className={cn('text-sm font-semibold text-neutral-500   flex items-center gap-2',
                                kitchen.name === searchParams.get('kitchen') && "text-hero"
                            )}
                            onClick={() => handleClick(kitchen.name)}
                        >
                           
                            <p>{kitchen.name}</p>
                            {
                                kitchen.name === searchParams.get('kitchen') && <Check size={20} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
