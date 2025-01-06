import useTodoList from "./hooks/useTodoList.ts";

const TodoList = () => {
  const { tasks } = useTodoList();

  return (
    <>
      <div className="flex flex-col gap-y-2 bg-green-200">
        {tasks.map((task) => (
          <h1>{task}</h1>
        ))}
      </div>
    </>
  );
};
export default TodoList;
