import { Navigate } from "react-router-dom";
import { useIsLoggedInQuery } from "../services/apiSlice";
import Loading from "../components/loading/Loading";

const IsAlreadyLoggedIn = ({ children }) => {
	const responseInfo = useIsLoggedInQuery();

	console.log(responseInfo.data)

	if (responseInfo.isSuccess && responseInfo.data?.user) {
		return <Navigate to="/" replace />;
	} else if (responseInfo.isLoading) return <Loading />;
	return children;
};

export default IsAlreadyLoggedIn;
