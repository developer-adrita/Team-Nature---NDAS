import React from "react";

import phoneIcon from "../../assets/images/ContactIcon.svg";
import mailIcon from "../../assets/images/EmailIcon.svg";
import locationIcon from "../../assets/images/LocationIcon.svg";

const HelpTableRow = ({help}) => {
  
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 w-50 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex gap-2">
          <img
            className="rounded-full w-12 h-12"
            src={help?.helpAvatar}
            alt="help"
          />
          <div className="flex flex-col justify-center">
            <span>{help?.helpName}</span>
            <span>{help?.helpAddress}</span>
          </div>
        </div>
      </th>
      <td className="px-6 py-4">
        <div className="flex gap-4 justify-end">
          <img src={phoneIcon} alt="1" />
          <img src={mailIcon} alt="2" />
          <img src={locationIcon} alt="3" />
        </div>
      </td>
    </tr>
  );
};

export default HelpTableRow;
