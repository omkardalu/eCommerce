import Card from "@/components/Card";
import ProductCurrosal from "@/components/ProductCurrosal";
import products from "@/utils/products";
import Link from "next/link";

export default function Dashboard() {
  const featured = products.filter((p) => p.isFeatured);
  const newArrivals = products.filter((p) => p.tag == "New");

  return (
    <section className="flex items-center flex-wrap py-4 justify-center">
      <div className="flex gap-10">
        {["smartphones","laptops","audio"].map((c,i)=> <Card key={i}><Link href={`/categories/${c}`}><div className="px-4 py-2 capitalize bg-(--slate) text-(--cloud)">{c}</div></Link></Card>)}
        <div></div>
      </div>
      <div>
      <ProductCurrosal name={"Featured"} items={featured} />
      <ProductCurrosal name={"New Arrivals"} items={newArrivals} />
      </div>

    </section>
  );
}
