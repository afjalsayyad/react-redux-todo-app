import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetodo, updatetodo } from "../features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdateSubmit = () => {
    dispatch(updatetodo({ id: editId, newText: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <h2 className="text-xl font-bold mt-4">Todos</h2>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="p-1 text-black"
                />

                <button
                  onClick={handleUpdateSubmit}
                  className="bg-green-500 text-white py-1 px-4 ml-2 rounded"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>

                <div>
                  <button
                    onClick={() => dispatch(removetodo(todo.id))}
                    className="text-white bg-red-500 py-1 px-4 rounded mr-2"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleUpdate(todo)}
                    className="text-white bg-blue-500 py-1 px-4 rounded"
                  >
                    Update
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
