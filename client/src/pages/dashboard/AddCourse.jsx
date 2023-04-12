import React, { useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components";
import {
  useAddCourseMutation,
  useGetClassesQuery,
} from "../../services/apiSlice";

const initialData = { class: "", courseName: "", description: "" };

const AddCourse = () => {
  const [formData, setFormData] = useState(initialData);
  const [addCategory, responseInfo] = useAddCourseMutation();
  const classInfo = useGetClassesQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(formData)
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success("New course added");
          e.target.reset();
          setFormData(initialData);
        } else {
          toast.error("Couldn't add the category");
        }
      })
      .catch((e) => toast.error(e.message));
  };

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="mb-10">
        <Header category="Course" title="Add Course" />
      </div>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Course Name
            </label>
            <input
              required
              onChange={handleOnChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="name"
              name="courseName"
              value={formData.courseName}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="category"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Select a course
            </label>
            <select
              id="category"
              name="class"
              value={formData.class}
              required
              onChange={handleOnChange}
              className="block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="">--Select Class--</option>
              {classInfo.isSuccess &&
                classInfo.data?.class?.map((classCon, i) => (
                  <option key={i} value={classCon._id}>
                    {classCon.classTitle}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="message"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Description
            </label>
            <textarea
              required
              id="message"
              rows="4"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="message"
              placeholder="Write details here..."
              name="description"
              value={formData.description}
              onChange={handleOnChange}
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        <div className="w-full my-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="file_input"
          >
            Topic Image
          </label>
          <input
            onChange={handleOnChange}
            disabled={responseInfo.isLoading}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="file_input"
            type="file"
            name="image"
            defaultValue={formData.image}
            accept="image/*"
          />
        </div>

        <div className="md:w-2/3">
          <button
            className="shadow bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5"
            type="submit"
          >
            Add Topic
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
