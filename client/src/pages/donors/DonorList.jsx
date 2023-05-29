import React from 'react';
import HelpTable from '../helpCenter/HelpTable';
import { Header } from '../../components';
import DonorTable from './DonorTable';
const data = [
  { _id: 0, avatar: "😀", name: "Akash", area: "DSC, Dhaka" },
  { _id: 1, avatar: "😀", name: "Akash - Kundu", area: "DSC, Dhaka" },
];
const DonorList = () => {
    return (
      <div>
        <Header category="Donor-List" />
        <DonorTable data={data} />
      </div>
    );
};

export default DonorList;