import useTodoList from "./hooks/useTodoList.ts";
import CreateTaskForm from "./components/CreateTaskForm.tsx";
import Header from "./components/Header.tsx";

const TodoList = () => {
  const { tasks, handleChange, handleSubmit, isLoading, errors, touched } =
    useTodoList();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-blue-500 p-6 flex flex-col items-center">
      <Header title="Todo App" />
      <CreateTaskForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        isLoading={isLoading}
        errors={errors}
        touched={touched}
      />
      <div className="mt-0 w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Tasks</h2>
        <div className="flex flex-col gap-y-2">
          {tasks && tasks.length > 0 ? (
            tasks?.map((task, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-green-100 p-2 rounded-md shadow-sm"
              >
                <span className="text-gray-800 font-medium">{task?.task}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center">
              No tasks available. Start by adding a new task!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default TodoList;
