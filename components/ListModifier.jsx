import React from "react";

import { IoCloseOutline } from "react-icons/io5";

const ListModifier = ({ handleFilter, setIsListModifierVisible }) => {
  const handleSumbit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const filterObj = {
      filter: formData.get("filter"),
      type: formData.get("type"),
      value: Number(formData.get("number")),
    };
    console.log(filterObj.value);
    handleFilter(filterObj);
    setIsListModifierVisible(false);
  };
  return (
    <section className="fixed shadow-2xl bg-white/70 p-4 rounded-xl backdrop-blur-2xl top-[50%] left-[50%] translate-[-50%] ">
      <div
        className=" cursor-pointer bg-(--mist) p-2 rounded-xl absolute top-2 right-2"
        onClick={() => {
          setIsListModifierVisible(false);
        }}
      >
        <IoCloseOutline />
      </div>
      <form onSubmit={handleSumbit}>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex gap-10">
            <div className=" ">
              <input
                type="radio"
                name="filter"
                value={"price"}
                id="filter-price"
                className="absolute"
              />{" "}
              <label htmlFor="filter-price" className="cursor-pointer p-3">
                Price
              </label>
            </div>
            <div className="cursor-pointer ">
              <input
                type="radio"
                name="filter"
                value={"rating"}
                id="filter-rating"
                className="absolute"
              />
              <label htmlFor="filter-rating" className="cursor-pointer p-3">
                Rating
              </label>
            </div>
          </div>
          <div className="flex gap-10 ">
            <div className="cursor-pointer ">
              <input
                type="radio"
                name="type"
                className="absolute"
                value={"above"}
                id="type-above"
              />
              <label htmlFor="type-above" className="cursor-pointer p-3">
                Above
              </label>
            </div>
            <div className="cursor-pointer ">
              <input
                type="radio"
                name="type"
                className="absolute"
                value={"below"}
                id="type-below"
              />
              <label htmlFor="type-below" className="cursor-pointer p-3">
                Below
              </label>
            </div>
          </div>
          <div className="rounded-xl flex  bg-(--mist) ">
            <input
              type="text"
              name="number"
              className="rounded-xl outline-0 bg-(--mist) p-2 ounline-0"
              placeholder="Enter value"
            />
            <button
              type="submit"
              className="cursor-pointer p-2 bg-(--ink) border border-(--silver) rounded-xl text-bold text-(--mist)"
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ListModifier;
