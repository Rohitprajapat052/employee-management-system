/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="h-[75%] flex justify-center items-center">
      <div className="w-[300px] p-5 bg-gray-800 rounded-xl shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-gradient-to-r from-cyan-500 to-purple-600 text-sm px-3 py-1 rounded-full text-white">
            {data.category}
          </h3>
          <h4 className="text-sm text-gray-400">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white">{data.title}</h2>
        <p className="text-sm m-2 text-gray-300">{data.description}</p>
        <div className="flex justify-between mt-8">
          <button className="bg-gradient-to-r from-green-500 to-teal-500 py-1 px-2 text-sm text-gray-900 rounded-full hover:from-teal-500 hover:to-green-500 transition duration-300">
            Mark as completed
          </button>
          <button className="bg-gradient-to-r from-red-500 to-pink-500 py-1 px-2 text-sm text-gray-900 rounded-full hover:from-pink-500 hover:to-red-500 transition duration-300">
            Mark as failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
