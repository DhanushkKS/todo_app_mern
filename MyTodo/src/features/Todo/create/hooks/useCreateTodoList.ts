import { useFormik } from "formik";

const useCreateTodoList = () => {
  const tasks: string[] = [];
  const formik = useFormik({
    initialValues: {
      task: "",
    },
    onSubmit: (values) => {
      tasks.push(...tasks, values.task.toString());
      console.log(tasks);
    },
  });
  console.log("outer", tasks);
  const { handleSubmit, handleChange } = formik;
  return { handleSubmit, handleChange, tasks };
};
export default useCreateTodoList;
