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
    <div className="flex items-center justify-center  bg-gradient-to-br from-blue-500 to-purple-600">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create a New Task
        </h2>
        <div className="mb-4">
          <label
            htmlFor="task"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Task Name
          </label>
          <input
            type="text"
            name="task"
            id="task"
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-700"
            placeholder="Enter your task..."
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-lg text-white font-semibold 
            ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }
          `}
        >
          {isLoading ? "Creating..." : "Create Task"}
        </button>
      </form>
    </div>
  );
};
export default CreateTaskForm;
