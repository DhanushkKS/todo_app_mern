const TodoListLoadingSkeleton = () => {
  return (
    <div className="z-20  space-y-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="h-10 w-full bg-gray-200 rounded-md animate-pulse "
        ></div>
      ))}
    </div>
  );
};
export default TodoListLoadingSkeleton;
