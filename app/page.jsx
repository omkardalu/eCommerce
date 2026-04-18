import ProductCard from "@/components/ProductCard";
import products from "@/utils/products";

export default function Home() {

  return (
    <div className="flex items-center w-screen flex-wrap justify-center">
      {products.map((product)=>{
        return <ProductCard key={product.id}
          id={product.id}
          name={product.name}
          brand={product.brand}
          price={product.price}
          tag={product.tag}
          rating={product.rating}
        />
      }
      )}
    </div>
  );
}
