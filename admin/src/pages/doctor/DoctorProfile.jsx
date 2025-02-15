import React, { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData } =
    useContext(DoctorContext);
  const { currency, backendUrl } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        about: profileData.about,
        available: profileData.available,
      };

      const { data } = await axios.post(
        backendUrl + "/api/doctor/update-profile",
        updateData,
        {
          headers: { Authorization: `Bearer ${dToken}` },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="flex flex-col items-center p-4">
        <div className="max-w-lg w-full flex flex-col gap-4 p-5 bg-white rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <img
              className="bg-primary/80 w-36 rounded-lg"
              src={profileData.image}
              alt=""
            />
            <h2 className="text-3xl font-medium text-gray-700 mt-4">
              {profileData.name}
            </h2>
          </div>

          <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-600 font-medium">About:</p>
            {isEdit ? (
              <textarea
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    about: e.target.value,
                  }))
                }
                className="w-full bg-gray-100 p-2 rounded-lg"
                rows={4}
                value={profileData.about}
              />
            ) : (
              <p className="text-gray-500">{profileData.about}</p>
            )}
          </div>

          <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-600 font-medium">Appointment Fee:</p>
            {isEdit ? (
              <input
                type="number"
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    fees: e.target.value,
                  }))
                }
                value={profileData.fees}
                className="w-full bg-gray-100 p-2 rounded-lg"
              />
            ) : (
              <p className="text-gray-500">
                {currency} {profileData.fees}
              </p>
            )}
          </div>

          <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-600 font-medium">Address:</p>
            {isEdit ? (
              <>
                <input
                  type="text"
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={profileData.address.line1}
                  className="w-full bg-gray-100 p-2 rounded-lg mb-2"
                  placeholder="Line 1"
                />
                <input
                  type="text"
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={profileData.address.line2}
                  className="w-full bg-gray-100 p-2 rounded-lg"
                  placeholder="Line 2"
                />
              </>
            ) : (
              <p className="text-gray-500">
                {profileData.address.line1} <br /> {profileData.address.line2}
              </p>
            )}
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              onChange={() =>
                isEdit &&
                setProfileData((prev) => ({
                  ...prev,
                  available: !prev.available,
                }))
              }
              checked={profileData.available}
            />
            <label className="ml-2 text-gray-600">Available</label>
          </div>

          <div className="mt-6">
            {isEdit ? (
              <button
                onClick={updateProfile}
                className="border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all w-full"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit((prev) => !prev)}
                className="border border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all w-full"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
