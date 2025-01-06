import { useFormik } from "formik";
import {useCreateTaskMutation} from "../../../../redux/Todo/api.ts";
import {Task} from "../../../../redux/Todo/types.ts";

const useCreateTodoList = () => {
  const [addTask,{isLoading}] = useCreateTaskMutation();
  const addTaskOnSubmit = async (values:Task) => {
    await addTask(values)
  }
  const formik = useFormik({
    initialValues: {
      task: "",
    },
    onSubmit:async (values) => {
     await addTaskOnSubmit(values)
    },
  });
  const { handleSubmit, handleChange } = formik;
  return { handleSubmit, handleChange,isLoading };
};
export default useCreateTodoList;
