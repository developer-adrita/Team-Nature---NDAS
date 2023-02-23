import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useViewCoursesQuery } from "../../services/apiSlice";
import ViewCourseContent from "./ViewCourseContent";
import Header from './../../components/Header';

const ViewCourse = () => {
	const getCourseInfo = useViewCoursesQuery();
	
	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<Header category="View Course" title="Course List" />
			<div className="flex flex-wrap -mx-3 mb-2">
				{getCourseInfo.isLoading ? (
					<Loading />
				) : (
					getCourseInfo.data?.courses.map((course) => (
						<ViewCourseContent
							courseImg={course.courseImg}
							courseTitle={course.courseName}
							courseBody={course.description}
							courseId={course._id}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default ViewCourse;
