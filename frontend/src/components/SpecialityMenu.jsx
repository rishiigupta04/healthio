import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-[#262626]"
    >
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-2/3 text-center text-sm md:text-md">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex flex-wrap justify-between sm:justify-center gap-8 pt-5 w-full">
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${
              item.speciality.charAt(0).toLowerCase() + item.speciality.slice(1)
            }`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 group "
            key={index}
          >
            <img className="w-16 sm:w-24 mb-2 " src={item.image} alt="" />
            <p className="font-semibold text-[13px] group-hover:text-primary transition-all duration-500 ease-in-out">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
