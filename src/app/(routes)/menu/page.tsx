import getCategories from "@/actions/get-categories";
import Container from "@/components/container";
import { MenuContent } from "@/components/menu-content";
import { FilterContainer, MenuSidebar } from "@/app/(routes)/menu/_components/filter-container";
import { CategoryFilter } from "./_components/category-filter";
import getSizes from "@/actions/get-sizes";
import { SizeFilter } from "./_components/size-filter";
import { KitchenFilter } from "./_components/kitchen-filter";
import { CuisineFilter } from "./_components/cuisine-filter";
import getKitchens from "@/actions/get-kitchens";
import getCuisines from "@/actions/get-cuisines";

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
    const sizes = await getSizes();
    const kitchens = await getKitchens();
    const cuisines = await getCuisines();

    return (
        <Container className="px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
                <div className="hidden md:block col-span-2 border-r border-gray-100 top-24">
                    <FilterContainer>
                        <CategoryFilter categories={categories} />
                        <SizeFilter sizes={sizes} />
                        <KitchenFilter kitchens={kitchens} />
                        <CuisineFilter cuisines={cuisines} />
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