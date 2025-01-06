import { ChangeEvent, FormEvent } from "react";

type CreateTaskFormProps = {
  onSubmit: (e?: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<any>) => void;
  isLoading: boolean;
};
const CreateTaskForm = ({
  isLoading,
  onChange,
  onSubmit,
}: CreateTaskFormProps) => {
  return (
    <>
      <div className="flex items-center justify-center w-full ">
        <form onSubmit={onSubmit}>
          <input type="text" name="task" onChange={onChange} />
          <button type="submit" disabled={isLoading}>
            Create Task
          </button>
        </form>
      </div>
    </>
  );
};
export default CreateTaskForm;
