import React, { useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../../components";

const initialData = { name: "", description: "", category: "" };

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
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<div className="mb-10">
				<Header category="Contact us" title="Have any query? Tell us..." />
			</div>

			<form className="w-full" onSubmit={handleSubmit}>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-first-name"
						>
							Name
						</label>
						<input
							required
							onChange={handleOnChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							placeholder="name"
							name="name"
							value={formData.name}
						/>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="grid-first-name"
						>
							Email
						</label>
						<input
							required
							onChange={handleOnChange}
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							id="grid-first-name"
							type="text"
							placeholder="email"
							name="name"
							value={formData.name}
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-6">
					<div className="w-full px-3">
						<label
							htmlFor="message"
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						>
							Query
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

				<div className="md:w-2/3">
					<button
						className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5"
						type="submit"
					>
						Send message
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;