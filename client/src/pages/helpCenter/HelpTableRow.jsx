import React from "react";

import userImg from "../../assets/images/Ellipse 17.svg"

const HelpTableRow = ({help}) => {
  
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 w-50 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex gap-2">
          <img className="rounded-full w-12 h-12" src={help?.helpAvatar} alt="help" />
          <div className="flex flex-col justify-center">
            <span>{help?.helpName}</span>
            <span>{help?.helpAddress}</span>
          </div>
        </div>
      </th>
      <td className="px-6 py-4">
        <div className="flex gap-2 justify-end">
          <img src="" alt="1" />
          <img src="" alt="2" />
          <img src="" alt="3" />
        </div>
      </td>
    </tr>
  );
};

export default HelpTableRow;
