import { Navigate } from "react-router-dom";
import { useIsLoggedInQuery } from "../services/apiSlice";
import Loading from "../components/loading/Loading";

const IsLoggedIn = ({ children }) => {
	const responseInfo = useIsLoggedInQuery();
	if (responseInfo.isSuccess && responseInfo.data?.status) {
		return children;
	} else if (responseInfo.isLoading) return <Loading />;
	return <Navigate to="/login" replace />;
};

export default IsLoggedIn;
