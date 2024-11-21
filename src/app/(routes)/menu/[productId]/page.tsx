import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import React from 'react'

interface ProductPageProps {
    params: {
        productId: string
    }
}

const ProductPage = async (
    { params }: ProductPageProps
) => {
    const product = await getProduct(params.productId);
    const suggestionProducts = await getProducts({
        category: product?.category,
    });
    return (
        <div>
            asdsad
        </div>
    )
}

export default ProductPage
