import { useGetTasksQuery } from "../../../redux/Todo/api.ts";
import { Task } from "../../../redux/Todo/types.ts";

const useTodoList = () => {
  const { data } = useGetTasksQuery();
  const tasks: Task[] = data?.tasks ?? [];
  return { tasks };
};
export default useTodoList;
