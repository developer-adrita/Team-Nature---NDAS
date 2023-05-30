import { useViewDonorsQuery, useViewTipsQuery } from "../../services/apiSlice";
import { useViewHelpsQuery } from "../../services/apiSlice";

import ControlsTable from "./ControlsTable";
import DonorControlsTable from "./DonorControlsTable";
import HelpControlsTable from "./HelpControlsTable";

const controlsData = [
  {
    _id: 0,
    icon: "🎁",
    name: "Category1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus consequuntur ipsam aperiam expedita obcaecati fuga maiores eligendi modi dicta a perspiciatis repudiandae sapiente quibusdam quas, dolore doloribus iure porro totam.",
  },
  {
    _id: 1,
    icon: "🎁",
    name: "Category2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus consequuntur ipsam aperiam expedita obcaecati fuga maiores eligendi modi dicta a perspiciatis repudiandae sapiente quibusdam quas, dolore doloribus iure porro totam.",
  },
  {
    _id: 2,
    icon: "🎁",
    name: "Category3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus consequuntur ipsam aperiam expedita obcaecati fuga maiores eligendi modi dicta a perspiciatis repudiandae sapiente quibusdam quas, dolore doloribus iure porro totam.",
  },
  {
    _id: 3,
    icon: "🎁",
    name: "Category4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus consequuntur ipsam aperiam expedita obcaecati fuga maiores eligendi modi dicta a perspiciatis repudiandae sapiente quibusdam quas, dolore doloribus iure porro totam.",
  },
  {
    _id: 4,
    icon: "🎁",
    name: "Category5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus consequuntur ipsam aperiam expedita obcaecati fuga maiores eligendi modi dicta a perspiciatis repudiandae sapiente quibusdam quas, dolore doloribus iure porro totam.",
  },
];

const AllControls = () => {
  const responseInfo = useViewTipsQuery();
  const HelpsresponseInfo = useViewHelpsQuery();
  const DonorsresponseInfo = useViewDonorsQuery();

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl">
      <div className="mb-10 text-white ml-5">
        <div>All Controls</div>
      </div>
      <div className="w-full mb-6 md:mb-0">
        <ControlsTable data={responseInfo?.data?.Tip} />
      </div>

      <div className="mb-10 mt-10 text-white ml-5">
        <div>Donor-List</div>
      </div>
      <div className="w-full mb-6 md:mb-0">
        <DonorControlsTable data={DonorsresponseInfo?.data?.Donor} />
      </div>

      <div className="mb-10 mt-10 text-white ml-5">
        <div>All Volunteer</div>
      </div>
      <div className="w-full mb-6 md:mb-0">
        <HelpControlsTable data={HelpsresponseInfo?.data?.Help} />
      </div>
    </div>
  );
};

export default AllControls;
