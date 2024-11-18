"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/models/category";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface CategoryFilterProps {
    categories: Category[]
}

export const CategoryFilter = ({ categories }: CategoryFilterProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleClick = (category: string) => {
        const currentParams = Object.fromEntries(searchParams.entries());

        if (category === currentParams.category) {
            delete currentParams.category;
        } else {
            currentParams.category = category;
        }

        const href = queryString.stringifyUrl({
            url: `/menu`,
            query: currentParams
        });

        router.push(href);
    }

    return (
        <div className="flex-col gap-2 border-b pb-4 cursor-pointer">
            <h2 className="text-xl font-semibold text-neutral-700">Category</h2>
            <div className="flex-col gap-2 mt-2">
                {
                    categories.map((category, index) => (

                        <div
                            key={index}
                            className={cn('text-sm font-semibold text-neutral-500   flex items-center gap-2',
                                category.name === searchParams.get('category') && "text-hero"
                            )}
                            onClick={() => handleClick(category.name)}
                        >
                           
                            <p>{category.name}</p>
                            {
                                category.name === searchParams.get('category') && <Check size={20} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
