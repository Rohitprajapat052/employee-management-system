/* eslint-disable react/prop-types */

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-gray-800 rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-gradient-to-r from-cyan-500 to-purple-600 text-sm px-3 py-1 rounded-full text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-400">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-bold text-white">{data.title}</h2>
      <p className="text-sm m-2 text-gray-300">{data.description}</p>
      <div className="mt-6">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full py-1 px-4 text-sm text-gray-900 font-medium hover:from-teal-500 hover:to-green-500 transition duration-300">
          Complete
        </div>
      </div>
    </div>
  );
};

export default CompleteTask;
