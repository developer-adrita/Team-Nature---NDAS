import React, { useState } from "react";
import AddClass from "./AddClass";
import AddCourse from "./AddCourse";
import AddTopic from "./AddTopic";
import TopicContent from "./TopicContent";

const Uploads = () => {
	return (
		<div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
			
            <div>
                <AddClass/>
            </div>
            
            <div>
                <AddCourse/>
            </div>

            <div>
                <AddTopic/>
            </div>

            <div>
                <TopicContent/>
            </div>
		</div>
	);
};

export default Uploads;