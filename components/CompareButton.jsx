"use client";
import React, { useRef } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";


const CompareButton = ({product,products}) => {
  const router = useRouter();
  const selectRef = useRef(null);


  return (
    <div className="my-4 bg-(--cloud) shadow-xl border flex border-(--platinum) p-2 rounded-xl">
      <Button
        text={"Compare"}
        handler={() =>
          router.push(`/compare?a=${product.id}&b=${selectRef.current.value}`)
        }
        type={3}
      />
      <select
        ref={selectRef}
        className=""
        onSelect={(e) => console.log(e.target)}
      >
        {products
          .filter((p) => p.category === product.category)
          .map((p, i) => {
            return (
              <option key={i} value={p.id} className="text-center p-2 text-black">
                {p.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default CompareButton;
