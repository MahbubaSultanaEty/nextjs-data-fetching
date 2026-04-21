import Product from '@/components/Product';
import React from 'react';

const getProducts = async () => {
    const res = await fetch("http://localhost:6004/products", {cache: "force-cache"});
    return res.json()
}

const ProductsPage = async() => {

    const products = await getProducts()
    return (
        <div className='container mx-auto'>
            <h2>
                PRoducts {products.length}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                 {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
                </div>
               
            </h2>
        </div>
    );
};

export default ProductsPage;