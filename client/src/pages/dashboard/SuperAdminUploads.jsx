import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../../components";
import { useRegisterMutation } from "../../services/apiSlice";

const initialData = {
  name: "",
  email: "",
  phone: "",
  password: "",
  user_type: "admin",
};
const error = "border-red-500";

export default function SuperAdminUploads() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);
  const [register, registerResponseInfo] = useRegisterMutation();
  const [registerError, setRegisterError] = useState(false);

  const handleError = () => {
    toast.error("Register failed");
    setRegisterError(true);
    setFormData((prev) => ({ ...prev, password: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData)
      .unwrap()
      .then((data) => {
        if (data.success) {
          toast.success("Registration successful");
          setRegisterError(false);
          setFormData(initialData);
        } else {
          console.log(data);
          handleError();
        }
      })
      .catch((err) => {
        console.log(err);
        handleError();
      });
  };

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Super-Admin" title="Uploads" />
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl ml-5">
        <div className="text-3xl font-semibold text-center text-green-700 uppercase mb-12">
          <a href="/">
            <img
              style={{
                width: "250px",
                margin: "2px auto",
              }}
              src="https://res.cloudinary.com/hostingimagesservice/image/upload/v1676923694/M0NvK80tG_k4si13.gif"
              alt=""
            />{" "}
          </a>
        </div>
        <div className="w-full">
          <form
            style={{
              marginLeft: "5%",
            }}
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <label
                htmlFor="category"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Select admin
              </label>
              <select
                id="category"
                name="user_type"
                value={formData.user_type}
                required
                onChange={handleOnChange}
                className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                <option value="admin">Admin</option>
                <option value="super-admin">Super Admin</option>
              </select>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-700 undefined"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    disabled={registerResponseInfo.isLoading}
                    required
                    name="name"
                    onChange={handleOnChange}
                    value={formData.name}
                    type="text"
                    className={
                      "block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" +
                      (registerError && error)
                    }
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 undefined"
                  >
                    Email
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      disabled={registerResponseInfo.isLoading}
                      required
                      name="email"
                      onChange={handleOnChange}
                      value={formData.email}
                      type="email"
                      className={
                        "block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" +
                        (registerError && error)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="phone"
                  className="block text-sm font-bold text-gray-700 undefined"
                >
                  Phone
                </label>
                <div className="flex flex-col items-start">
                  <input
                    disabled={registerResponseInfo.isLoading}
                    required
                    name="phone"
                    onChange={handleOnChange}
                    value={formData.phone}
                    type="tel"
                    className={
                      "block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" +
                      (registerError && error)
                    }
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-gray-700  undefined"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    disabled={registerResponseInfo.isLoading}
                    required
                    value={formData.password}
                    onChange={handleOnChange}
                    name="password"
                    type="password"
                    className={
                      "block w-full px-4 py-2 mt-2 text-green-700 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" +
                      (registerError && error)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-4">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                  Add Admin
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
