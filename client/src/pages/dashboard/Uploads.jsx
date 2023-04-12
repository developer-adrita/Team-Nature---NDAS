import React, { useState } from "react";
import AddCourse from "./AddCourse";
import AddTopic from "./AddTopic";
import TopicContent from "./TopicContent";

const Uploads = () => {
	return (
    <div>
      <div>
        <AddCourse /> 
        {/* Need to Change the name */}
      </div>

      <div>
        <AddTopic />
      </div>

      <div>
        <TopicContent />
      </div>
    </div>
  );
};

export default Uploads;