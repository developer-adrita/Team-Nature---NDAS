import React, { useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components";
import "./Contact.css";

const initialData = { name: "", email: "", phone:"", description: "" };

const Contact = () => {
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
    <div className="m-2 md:m-10 -24 p-2 md:p-10 rounded-3xl text-sky-300 Cntctbg">
      {/* <img className="absolute w-100 h-100 object-cover left-0 top-0 " src={svgBG} alt="" /> */}

      <div className="mb-10">
        <Header category="Contact us" title="Have any query? Tell us..." />
      </div>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
              htmlFor="grid-first-name "
            >
              First Name
            </label>
            <input
              required
              onChange={handleOnChange}
              className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-3xl"
              id="grid-first-name"
              type="text"
              placeholder="first-name"
              name="name"
              value={formData.name}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
              htmlFor="grid-first-name"
            >
              Last Name
            </label>
            <input
              required
              onChange={handleOnChange}
              className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-3xl"
              id="grid-first-name"
              type="text"
              placeholder="last-name"
              name="name"
              value={formData.name}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
              htmlFor="grid-first-name"
            >
              Email
            </label>
            <input
              required
              onChange={handleOnChange}
              className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-3xl"
              id="grid-first-name"
              type="text"
              placeholder="email"
              email="email"
              value={formData.name}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
              htmlFor="grid-first-name"
            >
              Phone Number
            </label>
            <input
              required
              onChange={handleOnChange}
              className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-3xl"
              id="grid-first-name"
              type="text"
              placeholder="phone-no"
              phone="number"
              value={formData.name}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="message"
              className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
            >
              Query
            </label>
            <textarea
              required
              id="message"
              rows="4"
              className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white rounded-3xl"
              type="message"
              placeholder="Write details here..."
              name="description"
              value={formData.description}
              onChange={handleOnChange}
            />
            <p className="text-sky-300	 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <button className="Send-Button" type="submit">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;