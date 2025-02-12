import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const Login = () => {
  const [state, setState] = useState("Admin");
  const { setDToken } = useContext(DoctorContext);
  const { setAToken, backendUrl } = useContext(AdminContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });
        if (data.success) {
          setDToken(data.token);
          localStorage.setItem("dToken", data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <div className="flex items-center gap-2 opacity-30">
            <img className="w-6" src="/favicon.svg" alt="" />
            <h1 className="text-xl font-bold tracking-normal ">Healthio</h1>
          </div>
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900 uppercase">
            <span className="text-primary">{state}</span> Login
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Login to manage doctors and appointments
          </p>
        </div>
        <form className="" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mt-6 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200"
            >
              Login
            </button>

            {state === "Admin" ? (
              <p className="mt-4 text-sm text-center">
                Doctor Login?{" "}
                <span
                  className="text-primary cursor-pointer hover:underline"
                  onClick={() => setState("Doctor")}
                >
                  Click Here
                </span>
              </p>
            ) : (
              <p className="mt-4 text-sm text-center">
                Admin Login?{" "}
                <span
                  className="text-primary cursor-pointer hover:underline"
                  onClick={() => setState("Admin")}
                >
                  Click Here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
