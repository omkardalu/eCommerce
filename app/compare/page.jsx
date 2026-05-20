import { getProduct } from "@/utils/products";
import React from "react";

const page = async ({ searchParams }) => {
  const { a, b } = await searchParams;
  const product1 = await getProduct(a);
  const product2 = await getProduct(b);

  return (
    <section>
      <div className="text-2xl text-center text-(--mist) p-4">v/s</div>
      <div className="content-center flex items-center justify-center">
        <table className=" shadow-xl">
          <tbody className=" shadow-inner overflow-scroll">
            <tr className="shadow">
              <td className="p-2">Name</td>
              <td className="p-2 bg-(--mist)/50">{product1.name}</td>
              <td className="p-2">{product2.name}</td>
            </tr>
            {product1.specLabels.map((label, i) => (
              <tr key={i} className={` shadow overflow-hidden   `}>
                <td className="w-2/5 content-start p-2">{label}</td>
                <td className="p-2 bg-(--mist)/50">{product1.specs[label]}</td>
                <td className="p-2">{product2.specs[label]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default page;
