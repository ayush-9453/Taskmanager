import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const response = await axios.get("http://localhost:9000/Task/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching Tasks:", error.response || error.message);
    }
  };
  const deleteBook = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:9000/Task/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        alert("Task deleted successfully");
        fetchTasks();
      })
      .catch((error) => console.error("Error deleting Task:", error));
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-gray-800 drop-shadow"
          >
            TaskManager
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/addTask"
              className="px-4 py-2 text-gray-600 text-sm font-medium border border-transparent 
             hover:border-blue-500 transition duration-200 rounded-md"
            >
              Add Task
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      {/* <h1 className="text-center text-blue-500 text-4xl font-extrabold drop-shadow my-7">Task Management </h1> */}

      <div className="shadow-lg rounded-lg overflow-hidden m-10 md:mx-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-blue-400">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600  font-bold uppercase">
                SNO
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600  font-bold uppercase">
                Title
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Description
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Duedate
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Priority
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Status
              </th>
              <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tasks.length > 0 ? (
              tasks.map((e,index) => (
                <tr key={e.id || index} >
                  <td className="py-4 px-6 border-b border-gray-200">
                    {index+1}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {e.title}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {e.description}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {new Date(e.dueDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {e.priority === "LOW" ? (
                      <span className="bg-green-400 text-white py-1 px-2 rounded-full text-xs">
                        LOW
                      </span>
                    ) : e.priority === "MEDIUM" ? (
                      <span className="bg-amber-400 text-white py-1 px-2 rounded-full text-xs">
                        MEDIUM
                      </span>
                    ) : (
                      <span className="bg-red-400 text-white py-1 px-2 rounded-full text-xs">
                        HIGH
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    {e.status === "COMPELTED" ? (
                      <span className="bg-green-400 text-white py-1 px-2 rounded-md text-xs">
                        COMPELTED
                      </span>
                    ) : e.priority === "IN_PROGRESS" ? (
                      <span className="bg-amber-400 text-white py-1 px-2 rounded-full text-xs">
                        IN_PROGRESS
                      </span>
                    ) : (
                      <span className="bg-red-400 text-white py-1 px-2 rounded-full text-xs">
                        PENDING
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/update/${e.id}`}
                      className="px-3 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-500"
                    >
                      Edit
                    </Link>
                    <button
                      className="ml-2 px-3 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-500"
                      onClick={() => {
                        if (window.confirm("Are you sure?")) deleteBook(e.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">
                  No task found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
