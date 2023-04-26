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
    <div className="m-3 p-2 md:p-5 rounded-3xl text-sky-300 Cntctbg">
      <Header category="Super-Admin" title="Uploads" />
      <div>
        <div className="w-full">
          <form
            style={{
              margin: "6%",
            }}
            onSubmit={handleSubmit}
          >
            <div className="w-full">
              <label
                htmlFor="category"
                className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
              >
                Select admin
              </label>
              <select
                id="category"
                name="user_type"
                value={formData.user_type}
                required
                onChange={handleOnChange}
                className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
              >
                <option value="">--Select category--</option>
                <option value="admin">Admin</option>
                <option value="super-admin">Super Admin</option>
              </select>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                <label
                  htmlFor="name"
                  className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
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
                    className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
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
                      className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="phone"
                  className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
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
                    className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="password"
                  className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
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
                    className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
                  />
                </div>
              </div>
            </div>
            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
              <button className="Send-Button" type="submit">
                Add Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
