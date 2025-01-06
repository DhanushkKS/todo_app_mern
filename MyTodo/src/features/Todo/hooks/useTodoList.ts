import {
  useCreateTaskMutation,
  useGetTasksQuery,
} from "../../../redux/Todo/api.ts";
import { Task } from "../../../redux/Todo/types.ts";
import { useFormik } from "formik";

const useTodoList = () => {
  const { data } = useGetTasksQuery();
  const [addTask, { isLoading }] = useCreateTaskMutation();
  const addTaskOnSubmit = async (values: Task) => {
    await addTask(values);
  };
  const formik = useFormik({
    initialValues: {
      task: "",
    },
    onSubmit: async (values) => {
      await addTaskOnSubmit(values);
    },
  });
  const { handleSubmit, handleChange } = formik;
  const tasks = data?.tasks ?? [];
  return { tasks, handleSubmit, handleChange, isLoading };
};
export default useTodoList;
