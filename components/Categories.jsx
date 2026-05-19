import React from "react";
import Card from "./Card";
import Link from "next/link";

const Categories = () => {
  const categories = [
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
        ]

  return (
    <div className="relative group  bg-(--platinum)">
      <h1 className="text-4xl  text-(--mist) group-hover:text-(--graphite) font-extrabold px-4 my-4">
        Categories
      </h1>
      <div className="flex flex-col sticky top-0 flex-wrap items-center justify-center px-8 ">
        {categories.map((c, i) => (
          <Card key={i}>
            <Link href={`/categories/${c.name}`}>
              <img src={c.imgUrl} alt="" className="h-48"  />
              <div className="px-4 py-2 capitalize bg-(--ink) text-center text-(--cloud)">
                {c.name}
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;
