import useCreateTodoList from "./hooks/useCreateTodoList.ts";

const Create = () => {
  const { handleSubmit, handleChange } = useCreateTodoList();
  return (
    <>
      <div className="flex items-center justify-center w-full ">
        <form onSubmit={handleSubmit}>
          <input type="text" name="task" onChange={handleChange} />
          <button type="submit">Create Task</button>
        </form>
      </div>
    </>
  );
};
export default Create;
