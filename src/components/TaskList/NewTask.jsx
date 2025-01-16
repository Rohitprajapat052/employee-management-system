const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-[75%] w-[300px] p-5 bg-gray-800 rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="bg-gradient-to-r from-cyan-500 to-purple-600 text-sm px-3 py-1 rounded-full text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-400">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-bold text-white">{data.title}</h2>
      <p className="text-sm m-2 text-gray-300">{data.description}</p>
      <div className="mt-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full py-1 px-4 text-sm text-gray-900 font-medium hover:from-indigo-600 hover:to-blue-500 transition duration-300">
          Accept Task
        </div>
      </div>
    </div>
  );
};

export default NewTask;
