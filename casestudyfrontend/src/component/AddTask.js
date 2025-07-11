import React, {useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddTask = () => {
    const [title ,setTitle] = useState();
    const [description ,setDescription] = useState();
    const [dueDate , setDueDate] = useState();
    const [status,setStatus] = useState("PENDING");
    const [priority, setPriority] = useState("LOW");
    const navigate = useNavigate();

    const addtask=(e)=>{
        e.preventDefault();
        const task = {
            title:title,
            description: description,
            dueDate:dueDate,
            status:status,
            priority:priority
        }
        const token = localStorage.getItem("token")
        axios.post('http://localhost:9000/Task/addTask', task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(() => {
        alert('Book added successfully');
        navigate("/dashboard")
      }
    ).catch((error) => {
        console.error('There was an error adding the book!', error);
        alert('Failed to add book. Please check your input.');
      })

    }
  return (
   <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 drop-shadow text-center">Add Task</h2>
      <form onSubmit={addtask} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">PENDING</option>
            <option value="InProgress">In_Progress</option>
            <option value="Completed">COMPLETED</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-500 transition duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default AddTask