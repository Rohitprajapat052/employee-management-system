import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-6 rounded-lg mt-5 h-[60%] shadow-2xl">
      <div className="bg-gradient-to-r from-pink-600 to-purple-700 mb-3 py-2 px-4 flex justify-between rounded-lg shadow-md">
        <h2 className="w-1/5 text-white font-semibold text-lg">Employee Name</h2>
        <h3 className="w-1/5 text-white font-semibold text-lg">New Task</h3>
        <h5 className="w-1/5 text-white font-semibold text-lg">Active Task</h5>
        <h5 className="w-1/5 text-white font-semibold text-lg">Completed</h5>
        <h5 className="w-1/5 text-white font-semibold text-lg">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto space-y-2">
        {userData.map((ele, idx) => {
          return (
            <div
              key={idx}
              className="border-[1px] border-gray-700 mb-2 py-3 px-5 flex justify-between items-center rounded-lg bg-[#2c2c2c] hover:bg-[#3c3c3c] transition duration-300"
            >
              <h2 className="w-1/5 text-lg font-medium text-white">{ele.name}</h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-500">{ele.taskNumber.newTask}</h3>
              <h5 className="w-1/5 text-lg font-medium text-yellow-500">{ele.taskNumber.active}</h5>
              <h5 className="w-1/5 text-lg font-medium text-green-500">{ele.taskNumber.completed}</h5>
              <h5 className="w-1/5 text-lg font-medium text-red-500">{ele.taskNumber.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
