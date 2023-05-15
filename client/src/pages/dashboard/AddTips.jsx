import React, { useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components";

import { useAddTipsMutation } from "../../services/apiSlice";

const initialData = {
  topicName: "",
  topicDesc: "",
  topicAvatar: "",
};
const AddTopic = () => {
  const [formData, setFormData] = useState(initialData);
  const [addTips, responseInfo] = useAddTipsMutation();

  const [fileAdded, setFileAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTips(formData)
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success("New tips added");
          e.target.reset();
          setFormData(initialData);
        } else {
          toast.error("Couldn't add the tips");
        }
      })
      .catch((e) => toast.error(e.message));
  };

  const handleOnChange = (e) => {
    if (e.target.name === "topicAvatar") {
      return setFormData((prev) => ({
        ...prev,
        topicAvatar: e.target.files[0],
      }));
    }
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileAdded(true);
    } else {
      setFileAdded(false);
    }
  };

  return (
    <div className="m-3 p-2 md:p-5 rounded-3xl text-sky-300 Cntctbg">
      <div className="mb-10">
        <Header category="Tips" title="Add Tips" />
      </div>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
              htmlFor="grid-first-name"
            >
              Tips Name
            </label>
            <input
              required
              onChange={handleOnChange}
              className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
              id="grid-first-name"
              type="text"
              placeholder="name"
              name="topicName"
              value={formData.topicName}
            />
          </div>
          {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="category"
              className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
            >
              Select a tips
            </label>
            <select
              id="category"
              name="course"
              value={formData.selectTips}
              required
              onChange={handleOnChange}
              className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
            >
              <option value="">--Select tips--</option>
              {courseInfo.isSuccess &&
                courseInfo.data?.courses?.map((course, i) => (
                  <option key={i} value={course._id}>
                    {course.tipsName}
                  </option>
                ))}
            </select>
          </div> */}
        </div>

        <div className="mb-4">
          <label
            className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
            htmlFor="image"
          >
            Image file
          </label>
          <div className="relative">
            <input
              className="absolute inset-0 opacity-0 z-50"
              id="image"
              name="topicAvatar"
              type="file"
              onChange={(e) => {
                handleOnChange(e); handleFileChange(e);
              }}
              disabled={responseInfo.isLoading}
              defaultValue={formData.topicAvatar}
            />
            <div
              className={`h-10 w-full flex justify-center items-center border-dashed text-sky-300 border-2 border-sky-300 rounded-3xl ${
                fileAdded ? "border-green-400" : ""
              }`}
            >
              {!fileAdded ? (
                <p className="text-gray-400">
                  Drag and drop your image here or
                </p>
              ) : (
                <p className="text-green-600">Image file added or changed</p>
              )}
              <p className="ml-2 text-blue-600">browse</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="message"
              className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
            >
              Description
            </label>
            <textarea
              required
              id="message"
              rows="4"
              className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
              type="message"
              placeholder="Write details here..."
              name="topicDesc"
              value={formData.topicDesc}
              onChange={handleOnChange}
            />
            <p className="text-sky-300 text-xs italic ml-5">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <button className="Send-Button" type="submit">
            Add Tips
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTopic;
