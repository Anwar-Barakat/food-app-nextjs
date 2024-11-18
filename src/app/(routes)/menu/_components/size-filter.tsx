"use client";

import { cn } from "@/lib/utils";
import { Size } from "@/models/size";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface SizeFilterProps {
    sizes: Size[]
}

export const SizeFilter = ({ sizes }: SizeFilterProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleClick = (size: string) => {
        const currentParams = Object.fromEntries(searchParams.entries());

        if (size === currentParams.size) {
            delete currentParams.size;
        } else {
            currentParams.size = size;
        }

        const href = queryString.stringifyUrl({
            url: `/menu`,
            query: currentParams
        });

        router.push(href);
    }

    return (
        <div className="flex-col gap-2 border-b pb-4 cursor-pointer">
            <h2 className="text-xl font-semibold text-neutral-700">Size</h2>
            <div className="flex-col gap-2 mt-2">
                {
                    sizes.map((size, index) => (

                        <div
                            key={index}
                            className={cn('text-sm font-semibold text-neutral-500   flex items-center gap-2',
                                size.name === searchParams.get('size') && "text-hero"
                            )}
                            onClick={() => handleClick(size.name)}
                        >
                           
                            <p>{size.name} ({size.value})</p>
                            {
                                size.name === searchParams.get('size') && <Check size={20} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
