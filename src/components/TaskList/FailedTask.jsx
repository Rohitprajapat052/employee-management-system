/* eslint-disable react/prop-types */

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-[90%] w-[300px] p-5 bg-gray-800 rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-gradient-to-r from-red-500 to-pink-500 text-sm px-3 py-1 rounded-full text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-400">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-bold text-white">{data.title}</h2>
      <p className="text-sm m-2 text-gray-300">{data.description}</p>
      <div className="mt-6">
        <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-gray-900 rounded-full py-2 px-4 text-sm font-medium hover:from-pink-500 hover:to-red-500 transition duration-300">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
