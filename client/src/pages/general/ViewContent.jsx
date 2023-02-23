import React from "react";
import Loading from "../../components/loading/Loading";
import Video from "../../components/video/Video";
import { useViewTopicContentQuery } from "../../services/apiSlice";
import Header from './../../components/Header';
const ViewContent = () => {
	const responseInfo = useViewTopicContentQuery();

	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			<Header  title="View Topic Content" />
			<div className="flex flex-wrap -mx-3 mb-2">
				{responseInfo.isLoading ? (
					<Loading />
				) : (
					responseInfo.data?.topicContents.map((content, i) => (
						<Video
							key={i}
							src={content.topicVideo}
							title={content.topicName}
							description={content.description}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default ViewContent;
