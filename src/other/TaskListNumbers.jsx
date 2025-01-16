


const TaskListNumbers = ({data}) => {
  return (
    <div className="flex  mt-10 justify-between gap-5 screen ">
         
         <div className="p-10 rounded-xl w-[45%] py-6 bg-red-400 px-9">
             <h2 className="text-3xl font-semibold">{data.taskNumber.newTask}</h2>
             <h3 className="text-xl">New Task</h3>
        </div>
         <div className="p-10 rounded-xl w-[45%] py-6 bg-blue-400 px-9">
             <h2 className="text-3xl font-semibold">{data.taskNumber.completed}</h2>
             <h3 className="text-xl">Completed Task</h3>
        </div>
         <div className="p-10 rounded-xl w-[45%] py-6 bg-green-400 px-9">
             <h2 className="text-3xl font-semibold">{data.taskNumber.active}</h2>
             <h3 className="text-xl">Accepted  Task</h3>
        </div>
         <div className="p-10 rounded-xl w-[45%] py-6 bg-yellow-400 px-9">
             <h2 className="text-3xl font-semibold">{data.taskNumber.failed}</h2>
             <h3 className="text-xl">Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers
