import React from "react";

const UpdateTodoForm = () => {
  return (
    <>
      <form className="flex space-x-3">
        <input
          type="text"
          //   value={input}
          //   onChange={(e) => setInput(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
          placeholder="Add todo"
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
