import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  task: Yup.string().required("Task is required"),
});
