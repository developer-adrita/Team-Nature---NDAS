import React from 'react';
import DonorTable from './DonorTable';
const data = [
  { _id: 0, avatar: "😀", name: "Akash", area: "DSC, Dhaka" },
  { _id: 1, avatar: "😀", name: "Akash - Kundu", area: "DSC, Dhaka" },
];
const DonorList = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "46px",
            color: "#05a8c0",
            lineHeight: "54px",
          }}
          className="text-[#FFFFFF] py-10 px-10"
        >
          Donor-List
        </h1>

        <DonorTable data={data} />
      </div>
    );
};

export default DonorList;