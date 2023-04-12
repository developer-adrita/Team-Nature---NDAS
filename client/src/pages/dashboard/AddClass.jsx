import React, { useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components";
import { useAddClassMutation } from "../../services/apiSlice";

const initialData = { classTitle: "" };

const AddClass = () => {
  const [formData, setFormData] = useState(initialData);
  const [addCategory, responseInfo] = useAddClassMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    addCategory(formData)
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success("New class added");
          e.target.reset();
          setFormData(initialData);
        } else {
          toast.error("Couldn't add the class");
        }
      })
      .catch((e) => toast.error(e.message));
  };

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="m-3 p-2 md:p-5 rounded-3xl text-sky-300 Cntctbg">
      <div className="mb-10">
        <Header category="Dashboard" title="Add Classes" />
      </div>

      <span className="sr-only">Icon description</span>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Title
            </label>

            <input
              disabled={responseInfo.isLoading}
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="classTitle"
              placeholder="title"
              value={formData.classTitle}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-cyan-500 hover:bg-cyan-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5"
            type="submit"
            disabled={responseInfo.isLoading}
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
