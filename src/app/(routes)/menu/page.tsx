import getCategories from "@/actions/get-categories";
import Container from "@/components/container";
import { MenuContent } from "@/components/menu-content";
import { FilterContainer, MenuSidebar } from "@/app/(routes)/menu/_components/filter-container";
import { CategoryFilter } from "./_components/category-filter";

interface MenuPageProps {
    searchParams: {
        size?: string;
        isFeatured?: string;
        cuisine?: string;
        category?: string;
        kitchen?: string;
    }
}

const MenuPage = async (
    { searchParams }: MenuPageProps
) => {

    const categories = await getCategories();

    return (
        <Container className="px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
                <div className="hidden md:block col-span-2 border-r border-gray-100 top-24">
                    <FilterContainer>
                        <CategoryFilter
                            categories={categories}

                        />
                    </FilterContainer>
                </div>

                <MenuContent className="col-span-12 md:col-span-10 flex flex-col items-start justify-start w-full">
                    sidear
                </MenuContent>
            </div>
        </Container>
    )
}

export default MenuPage