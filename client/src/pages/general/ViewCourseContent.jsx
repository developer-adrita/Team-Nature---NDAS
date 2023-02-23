import React from "react";
import { useNavigate } from "react-router-dom";

const ViewCourseContent = ({ courseImg, courseTitle, courseBody }) => {
	const navigate = useNavigate();

	return (
		<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<div
				onClick={() => navigate("/view-topic")}
				className="flex cursor-pointer flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-6"
			>
				<img
					className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
					src={courseImg}
					alt=""
				/>
				<div className="flex flex-col justify-between p-4 leading-normal">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{courseTitle}
					</h5>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						{courseBody}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ViewCourseContent;
