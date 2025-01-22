import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { z } from "zod";

const doctorSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .nonempty("Password is required"),
  experience: z.string().nonempty("Experience is required"),
  fees: z
    .string()
    .nonempty("Fees is required")
    .refine(
      (val) => !isNaN(val) && Number(val) > 0,
      "Fees must be a positive number"
    ),
  about: z
    .string()
    .min(10, "About section must be at least 10 characters")
    .nonempty("About section is required"),
  speciality: z.string().nonempty("Speciality is required"),
  degree: z
    .string()
    .min(2, "Degree must be at least 2 characters")
    .nonempty("Degree is required"),
  address1: z
    .string()
    .min(5, "Address line 1 must be at least 5 characters")
    .nonempty("Address line 1 is required"),
  address2: z
    .string()
    .min(5, "Address line 2 must be at least 5 characters")
    .nonempty("Address line 2 is required"),
});

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [errors, setErrors] = useState({});

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErrors({});

    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = {
        name,
        email,
        password,
        experience,
        fees,
        about,
        speciality,
        degree,
        address1,
        address2,
      };

      const result = doctorSchema.safeParse(formData);

      if (!result.success) {
        const formattedErrors = {};
        result.error.issues.forEach((issue) => {
          formattedErrors[issue.path[0]] = issue.message;
        });
        setErrors(formattedErrors);
        return;
      }

      const submitFormData = new FormData();

      submitFormData.append("image", docImg);
      submitFormData.append("name", name);
      submitFormData.append("email", email);
      submitFormData.append("password", password);
      submitFormData.append("experience", experience);
      submitFormData.append("fees", Number(fees));
      submitFormData.append("about", about);
      submitFormData.append("speciality", speciality);
      submitFormData.append("degree", degree);
      submitFormData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        submitFormData,
        { headers: { Authorization: `Bearer ${aToken}` } }
      );
      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setPassword("");
        setEmail("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
        setFees("");
        setErrors({});
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            name=""
            id="doc-img"
            hidden
          />
          <p>Upload Doctor Picture</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Your name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={`border rounded px-3 py-2 ${
                  errors.name ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`border rounded px-3 py-2 ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Set Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={`border rounded px-3 py-2 ${
                  errors.password ? "border-red-500" : ""
                }`}
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded px-2 py-2"
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Years</option>
                <option value="3 Year">3 Years</option>
                <option value="4 Year">4 Years</option>
                <option value="5 Year">5 Years</option>
                <option value="6 Year">6 Years</option>
                <option value="8 Year">8 Years</option>
                <option value="9 Year">9 Years</option>
                <option value="10 Year">10 Years</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className={`border rounded px-3 py-2 ${
                  errors.fees ? "border-red-500" : ""
                }`}
                type="number"
                placeholder="Doctor fees"
              />
              {errors.fees && (
                <p className="text-red-500 text-sm">{errors.fees}</p>
              )}
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border rounded px-2 py-2"
              >
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Degree</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className={`border rounded px-3 py-2 ${
                  errors.degree ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Degree"
              />
              {errors.degree && (
                <p className="text-red-500 text-sm">{errors.degree}</p>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className={`border rounded px-3 py-2 ${
                  errors.address1 ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Address 1"
              />
              {errors.address1 && (
                <p className="text-red-500 text-sm">{errors.address1}</p>
              )}
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className={`border rounded px-3 py-2 ${
                  errors.address2 ? "border-red-500" : ""
                }`}
                type="text"
                placeholder="Address 2"
              />
              {errors.address2 && (
                <p className="text-red-500 text-sm">{errors.address2}</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className={`w-full px-4 pt-2 border rounded ${
              errors.about ? "border-red-500" : ""
            }`}
            rows={5}
            placeholder="Write about doctor"
          ></textarea>
          {errors.about && (
            <p className="text-red-500 text-sm">{errors.about}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
        >
          Add doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
