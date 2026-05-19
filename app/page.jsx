import Categories from "@/components/Categories";
import ProductsList from "@/components/ProductsList";
import products from "@/utils/products";

export default function Dashboard() {
  const featured = products.filter((p) => p.isFeatured);
  const newArrivals = products.filter((p) => p.tag == "New");
  const bestSeller = products.filter((p) => p.tag == "Best Seller");

  return (
    <section className="">
      <div className="sm:flex relative"> 
        
        <Categories />
        <div className="">
        <ProductsList name={"Featured"} items={featured} />
        <ProductsList name={"Best Seller"} items={bestSeller} />
        </div>
      </div>
      <ProductsList name={"New Arrivals"} items={newArrivals} />
    </section>
  );
}
