"use client";
import React, { useState } from "react";

const TodoPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!title.trim() || !desc.trim()) return;

    setTasks((prevTasks) => [...prevTasks, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <header className="py-8 text-center shadow-md bg-gradient-to-r from-purple-500 to-pink-500">
        <h1 className="text-4xl font-extrabold tracking-wide">My Todo List</h1>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <form
          onSubmit={handleAddTask}
          className="flex flex-col items-center bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg mb-10"
        >
          <h2 className="text-3xl font-bold mb-6">Add a New Task</h2>
          <input
            type="text"
            className="w-full max-w-lg text-xl bg-gray-900 text-white border border-gray-700 rounded px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="w-full max-w-lg text-xl bg-gray-900 text-white border border-gray-700 rounded px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Task Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="submit"
            className="w-full max-w-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition-all px-6 py-3 rounded-lg text-xl font-semibold shadow-lg hover:shadow-purple-700"
          >
            Add Task
          </button>
        </form>

        <section className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg">
          {tasks.length === 0 ? (
            <h2 className="text-center text-2xl text-gray-400">
              No Tasks Yet. Start Adding!
            </h2>
          ) : (
            <ul className="space-y-4">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">{task.title}</h3>
                    <p className="text-gray-400">{task.desc}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="bg-red-600 hover:bg-red-700 transition-colors px-5 py-2 rounded-lg font-bold shadow-md"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default TodoPage;
