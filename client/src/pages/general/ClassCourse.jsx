import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useViewCoursesQuery } from "../../services/apiSlice";

const ClassCourse = ({ classTitle, classAvatar, classId }) => {
	const navigate = useNavigate();
	const courseInfo = useViewCoursesQuery();

	return (
		<div className="w-full md:w-1/3 px-3 mb-6">
			
			<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				{courseInfo.isLoading ? (
					<Loading />
				) : (
					<div className="flex flex-col items-center pb-10">
						<img
							className="w-24 h-24 mt-3 mb-3 rounded-full shadow-lg"
							src={classAvatar}
							alt="Bonnie image"
						/>
						<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
							{classTitle}
						</h5>
						<span className="text-sm text-gray-500 dark:text-gray-400">
							General Education
						</span>
						<div className="cursor-pointer flex mt-4 space-x-3 md:mt-6">
							<button
								onClick={() => navigate("/view-course")}
								className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
							>
								View Courses
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ClassCourse;
