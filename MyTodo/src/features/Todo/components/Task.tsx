type TaskProps = {
  task: string;
  index: number;
};
const Task = ({ task, index }: TaskProps) => {
  return (
    <>
      <div
        key={index}
        className="flex items-center justify-between bg-green-100 p-2 rounded-md shadow-sm"
      >
        <span className="text-gray-800 font-medium">{task?.task}</span>
      </div>
    </>
  );
};
export default Task;
