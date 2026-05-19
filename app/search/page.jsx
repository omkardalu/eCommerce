import products from '@/utils/products';
import ProductCard from '@/components/ProductCard';
import React from 'react'
import ProductsList from '@/components/ProductsList';

const page = async ({ searchParams }) => {
  const { s = '' } = await searchParams;
  const items = products.filter((p) => p.name.toLowerCase().includes(s.toLowerCase()));
  
 return (
    <div className="my-4 px-4">
      <ProductsList name={"Search for "+s} items={items} />
    </div>
  );  
}

export default page