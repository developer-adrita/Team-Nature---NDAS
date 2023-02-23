import React from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { useViewTopicQuery } from "../../services/apiSlice";
import ViewTopicItem from "./ViewTopicItem";
import Header from "./../../components/Header";

const ViewTopic = () => {
	const topicInfo = useViewTopicQuery();

	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<Header title="Topic List" />
			<div className="flex flex-wrap -mx-3 mb-2">
				{topicInfo.isLoading ? (
					<Loading />
				) : (
					topicInfo.data?.topic.map((data) => <ViewTopicItem data={data} />)
				)}
			</div>
		</div>
	);
};

export default ViewTopic;
