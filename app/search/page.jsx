import products from '@/utils/products';
import ProductCard from '@/components/ProductCard';
import React from 'react'

const page = async ({ searchParams }) => {
  const { s = '' } = await searchParams;
  const items = products.filter((p) => p.name.toLowerCase().includes(s.toLowerCase()));
  
 return (
    <div className="my-4 px-4">
      <p className="text-4xl text-(--graphite) capitalize font-extrabold px-4 my-4">
       Search result for {s}
      </p>
      <div className="">
        <div className="flex items-center   flex-wrap  justify-start overflow-x-auto">
          {items.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                tag={product.tag}
                rating={product.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );  
}

export default page