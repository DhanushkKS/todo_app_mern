import useTodoList from "./hooks/useTodoList.ts";
import CreateTaskForm from "./components/CreateTaskForm.tsx";

const TodoList = () => {
  const { tasks, handleChange, handleSubmit, isLoading } = useTodoList();
  return (
    <>
      <CreateTaskForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        isLoading={isLoading}
      />
      <div className="flex flex-col gap-y-2 bg-green-200">
        {tasks?.map((task) => <h1>{task?.task}</h1>)}
      </div>
    </>
  );
};
export default TodoList;
