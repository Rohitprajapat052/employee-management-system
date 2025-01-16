/* eslint-disable react/prop-types */
import AllTask from "../../other/AllTask";
import CreateTask from "../../other/CreateTask";
import Header from "../../other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full bg-gray-900">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
