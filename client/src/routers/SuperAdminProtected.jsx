import { Navigate } from "react-router-dom";
import { useIsTeacherQuery } from "../services/apiSlice";
import Loading from "../components/loading/Loading";

const SuperAdmin = ({ children }) => {
	const responseInfo = useIsTeacherQuery();
	console.log(responseInfo.data)
	if (responseInfo.isSuccess && responseInfo.data?.user?.user_type === "super-admin") {
		return children;
	} else if (responseInfo.isLoading) return <Loading />;
	return <Navigate to="/select-courses" replace />;
};

export default SuperAdmin;