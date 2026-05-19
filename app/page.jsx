import Card from "@/components/Card";
import ProductCurrosal from "@/components/ProductCurrosal";
import products from "@/utils/products";
import Link from "next/link";

export default function Dashboard() {
  const featured = products.filter((p) => p.isFeatured);
  const newArrivals = products.filter((p) => p.tag == "New");

  return (
    <section className="flex items-center justify-center flex-wrap py-4 ">
      <div>
        <h1 className="text-4xl text-(--graphite) font-extrabold px-4 my-4">
          Categories
        </h1>
        <div className="flex flex-wrap items-center justify-center px-8 gap-10">
          {[
            {
              name: "smartphones",
              imgUrl:
                "https://tse4.mm.bing.net/th/id/OIP.kuNoFenobVGQHWsZ6Co1xgHaHa?pid=Api&P=0&h=180",
            },
            {
              name: "laptops",
              imgUrl:
                "https://electronikz.com/images/hp-newest-laptop-review_3.jpg",
            },
            {
              name: "audio",
              imgUrl:
                "https://tse2.mm.bing.net/th/id/OIP.tNN2DdOJgF5HPEGRlKuJ-gHaHa?pid=Api&P=0&h=180",
            },
          ].map((c, i) => (
            <Card key={i}>
              <Link href={`/categories/${c.name}`}>
                <img src={c.imgUrl} alt="" className="h-48 sm:h-56 md:h-64" />
                <div className="px-4 py-2 capitalize bg-(--ink) text-center text-(--cloud)">
                  {c.name}
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <ProductCurrosal name={"Featured"} items={featured} />
        <ProductCurrosal name={"New Arrivals"} items={newArrivals} />
      </div>
    </section>
  );
}
