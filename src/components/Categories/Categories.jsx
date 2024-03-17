import React from "react";
import { categoriesList } from "../../utils/constants/categoriesData";

const Categories = () => {
  return (
    <div className="p-6 md:bg-white md:px-40 ">
      <div className="font-bold">Categoroies</div>
      <div className="py-8 flex items-center justify-between flex-wrap gap-3 md:gap-6">
        {categoriesList.map((category) => (
          <div
            className="flex items-center flex-col gap-2 bg-[#F5F6F8] p-10 w-[7rem] text-sm rounded-lg md:w-36 md:text-base hover:bg-[#1A75E8] hover:text-white"
            key={category?.text}
          >
            {category?.icon}
            <span>{category?.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
