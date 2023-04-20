import React, { useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components";
import {
  useAddTopicContentMutation,
  useViewTopicQuery,
} from "../../services/apiSlice";

const initialData = {
  teacherName: "",
  topicName: "",
  description: "",
  topicVideo: "",
  category: "",
  video: "",
};

const HelpCenter = () => {
  const [formData, setFormData] = useState(initialData);
  const [addCategory, topicResponseInfo] = useAddTopicContentMutation();
  const responseInfo = useViewTopicQuery();

  const [fileAdded, setFileAdded] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileAdded(true);
    } else {
      setFileAdded(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(formData)
      .unwrap()
      .then((res) => {
        if (res.success) {
          toast.success("New category added");
          e.target.reset();
          setFormData(initialData);
        } else {
          toast.error("Couldn't add the category");
        }
      })
      .catch((e) => toast.error(e.message));
  };

  const handleOnChange = (e) => {
    if (e.target.name === "topicVideo") {
      return setFormData((prev) => ({
        ...prev,
        video: e.target.files[0],
      }));
    }

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="m-3 p-2 md:p-5 rounded-3xl text-sky-300 Cntctbg">
      <div className="mb-10">
        <Header category="Help-Center" title="Helper Details" />
      </div>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-sky-300	 text-xs font-bold mb-2 ml-5"
              htmlFor="grid-first-name"
            >
              Helper Name
            </label>
            <input
              required
              onChange={handleOnChange}
              className="appearance-none block w-full bg-transparent border-sky-300 text-sky-300 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent rounded-3xl"
              type="text"
              placeholder="name"
              name="teacherName"
              value={formData.teacherName}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                  type="file"
                  onChange={handleFileChange}
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
                    <p className="text-green-600">
                      Image file added or changed
                    </p>
                  )}
                  <p className="ml-2 text-blue-600">browse</p>
                </div>
              </div>
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
              name="description"
              value={formData.description}
              onChange={handleOnChange}
            />
            <p className="text-sky-300 text-xs italic ml-5">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>

        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <button className="Send-Button" type="submit">
            Add Helper
          </button>
        </div>
      </form>
    </div>
  );
};

export default HelpCenter;
;
