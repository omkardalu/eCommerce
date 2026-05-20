import React from "react";

const SortModel = ({handleSort}) => {
  const options = ["name", "brand", "price", "rating"];

  const optionsElements = options.map((o,i) => {
    return (
      <p value={o} key={i} className="px-4 capitalize py-2" onClick={
        () =>{
          handleSort(o);
        }
      }>
        {o}
      </p>
    );
  });

  return (
    <section className="absolute backdrop-blur bg-white/50 rounded-xl overflow-hidden top-10 right-10 ">
      <div className=" backdrop-blur bg-white/50 " >
        {optionsElements}
      </div>
    </section>
  );
};

export default SortModel;
