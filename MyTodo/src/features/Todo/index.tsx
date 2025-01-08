import useTodoList from "./hooks/useTodoList.ts";
import CreateTaskForm from "./components/CreateTaskForm.tsx";
import Header from "./components/Header.tsx";
import TodoListLoadingSkeleton from "./components/skeletons/TodoListLoadingSkeleton.tsx";
import Task from "./components/Task.tsx";

const TodoList = () => {
  const {
    tasks,
    handleChange,
    handleSubmit,
    isLoading,
    errors,
    touched,
    tasksIsLoading,
  } = useTodoList();
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
          {tasksIsLoading && <TodoListLoadingSkeleton />}
          {!tasksIsLoading && tasks && tasks.length > 0 ? (
            tasks?.map((task, index) => <Task task={task} index={index} />)
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
