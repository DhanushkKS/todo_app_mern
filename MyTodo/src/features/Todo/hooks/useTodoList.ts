import {
  useCreateTaskMutation,
  useGetTasksQuery,
} from "../../../redux/Todo/api.ts";
import { Task } from "../../../redux/Todo/types.ts";
import { useFormik } from "formik";
import { validationSchema } from "../validationSchema.ts";

const useTodoList = () => {
  const { data, isLoading: tasksIsLoading } = useGetTasksQuery();
  const [addTask, { isLoading }] = useCreateTaskMutation();
  const addTaskOnSubmit = async (values: Task) => {
    await addTask(values);
  };
  const formik = useFormik({
    initialValues: {
      task: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await addTaskOnSubmit(values);
    },
  });
  const { handleSubmit, handleChange, errors, touched } = formik;

  const tasks = data?.tasks ?? [];
  return {
    tasks,
    handleSubmit,
    handleChange,
    isLoading,
    errors,
    touched,
    tasksIsLoading,
  };
};
export default useTodoList;
