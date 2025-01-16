/* eslint-disable react/prop-types */

import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
    
  return (
    <div id="tasklist" className="overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[55%] w-full mt-10 bg-[#1c1c1c] p-5 rounded-lg shadow-lg">
    
     {data.tasks.map((ele, idx) => {
       console.log(data);
       if (ele.active) {
         return <AcceptTask key={idx} data={ele} />;
       }

       if (ele.newTask) {
         return <NewTask key={idx} data={ele} />;
       }

       if (ele.completed) {
         return <CompleteTask key={idx} data={ele} />;
       }

       if (ele.failed) {
         return <FailedTask key={idx} data={ele} />;
       }
     })}
   
    </div>
  );
}

export default TaskList;
