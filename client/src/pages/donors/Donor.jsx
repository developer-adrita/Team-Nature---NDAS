import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Donor.css";


const initialData = { name: "", email: "", phone: "", donate: "", description: "" };

const Donor = () => {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Message sent");
  };

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="DonorBG">
      <div className="DonateBG">
        <div>
          <div
            style={{
              fontFamily: "'Poppins'",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "40px",
              lineHeight: "60px",
              color: "#FFFFFF",
            }}
            className="container py-5 px-5 mx-0 min-w-full flex flex-col items-center"
          >
            Donate Us
          </div>
        </div>
        <div className="DonateFrom">
          <form className="w-full p-5" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-300	 text-xs font-bold mb-2 "
                  htmlFor="grid-first-name "
                >
                  Name
                </label>
                <input
                  required
                  onChange={handleOnChange}
                  className="appearance-none block w-full bg-[#FFFFFF]  border-gray-300 text-gray-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#FFFFFF] "
                  id="grid-first-name"
                  type="text"
                  placeholder="name"
                  name="name"
                  value={formData.name}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-300	 text-xs font-bold mb-2 "
                  htmlFor="grid-first-name"
                >
                  Email
                </label>
                <input
                  required
                  onChange={handleOnChange}
                  className="appearance-none block w-full bg-[#FFFFFF]  border-gray-300 text-gray-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#FFFFFF]  "
                  id="grid-first-name"
                  type="text"
                  placeholder="email"
                  name="email"
                  value={formData.email}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-300	 text-xs font-bold mb-2 "
                  htmlFor="grid-first-name"
                >
                  Phone Number
                </label>
                <input
                  required
                  onChange={handleOnChange}
                  className="appearance-none block w-full bg-[#FFFFFF]  border-gray-300 text-gray-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#FFFFFF]  "
                  id="grid-first-name"
                  type="text"
                  placeholder="phone-no"
                  name="phone"
                  value={formData.phone}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-300	 text-xs font-bold mb-2 "
                  htmlFor="grid-first-name"
                >
                  Donate Amount
                </label>
                <input
                  required
                  onChange={handleOnChange}
                  className="appearance-none block w-full bg-[#FFFFFF]  border-gray-300 text-gray-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#FFFFFF]  "
                  id="grid-first-name"
                  type="text"
                  placeholder="donate-amount"
                  name="donate"
                  value={formData.donate}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  htmlFor="message"
                  className="block uppercase tracking-wide text-gray-300	 text-xs font-bold mb-2 "
                >
                  Query
                </label>
                <textarea
                  required
                  id="message"
                  rows="4"
                  className="appearance-none block w-full bg-[#FFFFFF]  border-gray-300 text-gray-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#FFFFFF]  "
                  type="message"
                  placeholder="Massage(optional)"
                  name="description"
                  value={formData.description}
                  onChange={handleOnChange}
                />
                <p className="mb-2  text-gray-300 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>

            <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
              <button className="Send-Request" type="submit">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donor;
