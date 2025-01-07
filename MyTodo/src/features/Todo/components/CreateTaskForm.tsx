import { ChangeEvent, FormEvent } from "react";

type CreateTaskFormProps = {
  onSubmit: (e?: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<any>) => void;
  isLoading: boolean;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
};

const CreateTaskForm = ({
  isLoading,
  onChange,
  onSubmit,
  errors,
  touched,
}: CreateTaskFormProps) => {
  const disabled: boolean = isLoading || !!(errors.task && touched.task);

  return (
    <div className="flex items-center justify-center min-h-24 bg-white px-10 my-2 rounded-lg">
      <form onSubmit={onSubmit} className="flex items-center gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            name="task"
            id="task"
            onChange={onChange}
            className={`relative w-full px-4 py-2 border rounded-lg outline-none text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              ${
                errors.task && touched.task
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }
            `}
            placeholder="New Todo"
          />
          {errors.task && touched.task && (
            <p className="absolute -bottom-6 left-0   text-red-500 text-sm mt-1">
              {errors.task}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={disabled}
          className={`px-6 py-2 rounded-lg text-white font-semibold 
            ${
              disabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }
          `}
        >
          {isLoading ? "Creating..." : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
