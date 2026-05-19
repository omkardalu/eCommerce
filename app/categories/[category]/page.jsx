import ProductCard from "@/components/ProductCard";
import ProductsList from "@/components/ProductsList";
import products from "@/utils/products";
import React from "react";

const page = async ({ params }) => {
  const { category } = await params;
  const items = products.filter((p) => p.category === category);

  return (
    <div className="my-4 px-4">
      <ProductsList name={category} items={items} />
    </div>
  );
};

export default page;
