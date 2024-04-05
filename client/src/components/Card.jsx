"use client";

import AddTodoForm from "./AddTodoForm";
import UpdateTodoForm from "./UpdateTodoForm";
import SingleTodoCard from "./SingleTodoCard";
import { useSelector, useDispatch } from "react-redux";
import { todoCleared } from "@/Redux/reducerSlice/todoSlice";

const Card = () => {
  const myTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <div className=" w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2xl p-2 rounded-lg items-center flex flex-col justify-between space-y-10">
      <div className=" flex flex-col space-y-10 w-full h-3/4 min-h-max items-center">
        <h1 className=" text-3xl  font-semibold mt-2 underline">
          My todo list
        </h1>
        <div className=" w-3/4">
          <AddTodoForm />
          {/* <UpdateTodoForm /> */}
        </div>
        <div className="w-3/4">
          <ul className=" w-full max-h-72 overflow-y-scroll">
            {myTodos.map((todo) => (
              <li className=" mb-3" key={todo.id}>
                <SingleTodoCard id={todo.id} name={todo.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button
          onClick={() => dispatch(todoCleared())}
          className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Card;
