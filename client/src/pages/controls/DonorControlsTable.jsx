import React from "react";
import DonorControlsRow from "./DonorControlsRow";

export const tableHeader = ["Name", "Email", "Phone", "Amount", "Query", "Action"];

const DonorControlsTable = ({ data }) => {
    
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeader.map((header, i) => (
              <th key={i} scope="col" className="px-5 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length ? (
            <>
              {data.map((control) => (
                <DonorControlsRow key={control._id} control={control} />
              ))}
            </>
          ) : (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4" colSpan={7}>
                No data available to show.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DonorControlsTable;
