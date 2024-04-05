import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoUpdated } from "@/Redux/reducerSlice/todoSlice";

const UpdateTodoForm = () => {
  const todoToUpdate = useSelector((state) => state.todos.todoUpdate);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(todoToUpdate.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(update)) {
      alert("Enter todos");
      setUpdate("");
      return;
    } else {
      dispatch(
        todoUpdated({
          id: todoToUpdate.id,
          name: update,
        })
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          type="text"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
          placeholder="Update todo"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateTodoForm;
