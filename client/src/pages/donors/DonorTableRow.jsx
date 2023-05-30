import React from "react";

import phoneIcon from "../../assets/images/ContactIcon.svg";
import mailIcon from "../../assets/images/EmailIcon.svg";
import locationIcon from "../../assets/images/LocationIcon.svg";

const HelpTableRow = ({ Donor }) => {
  
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 w-50 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex gap-2">
          <div className="flex flex-col justify-center">
            <span>{Donor?.donorName}</span>
            <span>{Donor?.donorQuery}</span>
            <span>{Donor?.donorPhone}</span>
            <span>{Donor?.donorAmount}</span>
            <span>{Donor?.donorEmail}</span>
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
