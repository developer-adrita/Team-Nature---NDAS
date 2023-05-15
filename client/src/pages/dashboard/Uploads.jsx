import React, { useState } from "react";

import AddTips from "./AddTips";

import HelpCenter from "./HelpCenter";

const Uploads = () => {
	return (
    <div>

      <div>
        <AddTips />
      </div>

      {/* <div>
        <TopicContent />
      </div> */}

      <div>
        <HelpCenter />
      </div>
    </div>
  );
};

export default Uploads;