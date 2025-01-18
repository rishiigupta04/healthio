import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    setFilterDoc(
      speciality
        ? doctors.filter((doc) => doc.speciality === speciality)
        : doctors
    );
  }, [doctors, speciality]);

  const specialties = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <div>
      <p className=" my-6 text-md text-gray-500 font-light">
        Explore Our Network of Specialized Doctors
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {!speciality && (
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`py-1 px-3 border rounded text-sm sm:hidden ${
              showFilter ? "bg-primary text-white" : ""
            }`}
          >
            Filters
          </button>
        )}
        <div
          className={`flex-col gap-4 text-sm ${
            showFilter || speciality ? "flex" : "hidden sm:flex"
          }`}
        >
          {specialties.map((spec) => (
            <p
              key={spec}
              onClick={() =>
                speciality === spec
                  ? navigate("/doctors")
                  : navigate(`/doctors/${spec}`)
              }
              className={`pl-3 py-1.5 pr-16 border rounded cursor-pointer ${
                speciality === spec ? "bg-[#E2E5FF] text-black" : ""
              }`}
            >
              {spec}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-4">
          {filterDoc.map((doc) => (
            <div
              key={doc._id}
              onClick={() => {
                navigate(`/appointment/${doc._id}`);
                scrollTo(0, 0);
              }}
              className="border rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-3px] transition-all"
            >
              <img className="bg-[#EAEFFF]" src={doc.image} alt={doc.name} />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm ${
                    doc.available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <p
                    className={`w-2 h-2 rounded-full ${
                      doc.available ? "bg-green-500" : "bg-gray-1000"
                    }`}
                  ></p>
                  <p>{doc.available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-lg font-medium">{doc.name}</p>
                <p className="text-sm text-gray-600">{doc.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
