"use client";

import AddTodoForm from "./AddTodoForm";
import UpdateTodoForm from "./UpdateTodoForm";
import SingleTodoCard from "./SingleTodoCard";
import { useSelector } from "react-redux";

const Card = () => {
  const myTodos = useSelector((state) => state.todos);
  console.log(myTodos);
  return (
    <div className=" w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2xl p-2 rounded-lg items-center flex flex-col justify-between space-y-10">
      <div className=" flex flex-col space-y-10 w-full h-3/4 min-h-max items-center">
        <h1 className=" text-3xl  font-semibold mt-2 underline">
          My todo list
        </h1>
        <div className=" w-3/4">
          <AddTodoForm />
          <UpdateTodoForm />
        </div>
        <div className="w-3/4">
          <SingleTodoCard />
        </div>
      </div>
      <div>
        <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Card;
