import { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn JSX",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Props",
      completed: false,
    },
  ]);

  // Add Task
  function addTask() {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  // Delete Task
  function deleteTask(id) {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  }

  // Complete Task
  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  }

  const remainingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">

        <h1 className="mb-6 text-3xl font-bold">
          My Todo List
        </h1>

        {/* Add Task */}
        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addTask}
            className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Task Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Total tasks: {tasks.length}
          </p>

          <p className="text-gray-600">
            Remaining: {remainingTasks}
          </p>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks yet.
            </p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <p
                  className={
                    task.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }
                >
                  {task.title}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => completeTask(task.id)}
                    className="rounded bg-green-500 px-3 py-1 text-sm text-white"
                  >
                    {task.completed
                      ? "Undo"
                      : "Complete"}
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="rounded bg-red-500 px-3 py-1 text-sm text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default App;