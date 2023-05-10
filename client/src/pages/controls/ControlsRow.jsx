const ControlsRow = ({ control }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 w-50 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img className="rounded-full" src={control.icon} alt="control" />
      </th>
      <td className="px-7 py-4">{control.name}</td>
      <td className="px-3 py-4 text-center">{control.description}</td>
      <td className="px-6 py-4">
        {/* {control.availability ? ( */}
          <button
            onClick={() => false}
            disabled={true}
            type="button"
            className="px-3 py-1 text-xs text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
          </button>
        {/* ) : ( */}
          <button
            onClick={() => false}
            disabled={true}
            type="button"
            className="mt-2 px-3 py-1 text-xs text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Edit
          </button>
        {/* )} */}
      </td>
    </tr>
  );
};

export default ControlsRow;
