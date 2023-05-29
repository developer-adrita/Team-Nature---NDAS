import { toast } from "react-toastify";
import { useDeleteTipMutation } from "../../services/apiSlice";

const ControlsRow = ({ control }) => {
  const [deleteControl, deleteInfo] = useDeleteTipMutation();

  const handleDelete = () => {
    deleteControl(control._id)
      .unwrap()
      .then((response) => {
        if (response.success) {
          toast.success(`Tip deleted successfully!`);
        } else {
          toast.error(`Something went wrong!`);
        }
      })
      .catch((err) => toast.error(`Something went wrong - ${err.message}`));
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="rounded-full h-12 w-[5rem] object-cover"
          src={control.topicAvatar}
          alt="control"
        />
      </th>
      <td className="px-7 py-4">{control.topicName}</td>
      <td className="px-3 py-4 text-center">{control.topicDesc}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleDelete()}
          disabled={deleteInfo.isLoading}
          type="button"
          className="px-3 py-1 text-xs text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ControlsRow;
