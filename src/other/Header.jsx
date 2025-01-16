/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("");

  // Fetch the logged-in user's data from localStorage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser && loggedInUser.role === 'employee') {
      setUsername(loggedInUser.data.name); 
    }
  }, []);

  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // window.location.reload(); // Optionally, you can refresh the page
  };

  return (
    <div className="flex items-end justify-between bg-gray-800 p-5 rounded-lg shadow-md">
      <h1 className="text-2xl font-medium text-gray-200">
        Hello <br /> 
        <span className="text-3xl font-semibold text-blue-400"> 
          {username ? username : 'Admin'} 👋
        </span>
      </h1>
      <button
        onClick={logoutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm hover:bg-red-700 transition duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
