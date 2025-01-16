import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAassignTo] = useState('');
  const [category, setCategory] = useState('');
  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false });
    const data = userData;

    data.forEach(function (ele) {
      if (assignTo === ele.name) {
        ele.tasks.push(newTask);
        ele.taskNumber.newTask = ele.taskNumber.newTask + 1;
      }
    });

    setUserData(data);
    localStorage.setItem('employees', JSON.stringify(data));
    setTaskTitle('');
    setAassignTo('');
    setTaskDescription('');
    setCategory('');
    setTaskDate('');
  };

  return (
    <div className="p-5 bg-gray-800 mt-7 rounded-lg shadow-lg">
      <form onSubmit={(e) => submitHandler(e)} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-400 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => { setTaskTitle(e.target.value); }}
              className="text-sm py-1 px-2 w-4/5 rounded-lg outline-none bg-transparent border-[1px] border-gray-500 mb-4"
              type="text"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => { setTaskDate(e.target.value); }}
              className="text-sm py-1 px-2 w-4/5 rounded-lg outline-none bg-transparent border-[1px] border-gray-500 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-0.5">Assigned to</h3>
            <input
              value={assignTo}
              onChange={(e) => { setAassignTo(e.target.value); }}
              className="text-sm py-1 px-2 w-4/5 rounded-lg outline-none bg-transparent border-[1px] border-gray-500 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => { setCategory(e.target.value); }}
              className="text-sm py-1 px-2 w-4/5 rounded-lg outline-none bg-transparent border-[1px] border-gray-500 mb-4"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-400 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => { setTaskDescription(e.target.value); }}
            className="w-full h-44 text-sm py-2 px-4 rounded-lg outline-none bg-transparent border-[1px] border-gray-500 mb-4"
          ></textarea>
          <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500 py-3 rounded-lg text-sm mt-4 px-5 w-full text-gray-900 font-medium transition duration-300">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
