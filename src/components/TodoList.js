import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, load, deleteTodos } from "../stores/todo";
import database from "../firebase";
import { MdDelete } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

function TodoList(props) {
  const [color] = useState("#d2beb2");
  const [todoText, setTodoText] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);
 

  const override = css`
    display: block;
    margin: 0 auto;
  `;




  const checkList = () => {
    setLoading(true);
    const todoRef = database.ref();
    todoRef.on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        dispatch(load(childData));
      });
      setLoading(false);
    });
  };

  const saveTodo = (e) => {
    e.preventDefault();
    if (todoText === "" || todoText === undefined) {
      toast("Write to do 😋");
    } else {
      const newTodo = {
        id: nanoid(),
        text: todoText,
        check: false,
      };
      dispatch(addTodo(newTodo));
      setTodoText("");
    }
  };

  const deleteTodo = (item) => {
    const cardIndex = [...todoList].indexOf(item);   
    database.ref(`todoList/${cardIndex}`).remove();
    toast(item.text + " " + "deleted");
    dispatch(deleteTodos(item))
  };

  const checkItem = (item) => {
    const cardIndex = todoList.indexOf(item);
    if (item.check === false)
      database.ref(`todoList/${cardIndex}/check`).set(true);
    else database.ref(`todoList/${cardIndex}/check`).set(false);
  };

  useEffect(() => {
    checkList();
  }, []);

  return (
    <div id="content" className="content">
      <h1>{props.appName}</h1>
      <form onSubmit={saveTodo}>
      <div>
        <input
          placeholder="Write To-do"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={saveTodo}>Add</button>
      </div>
      <div className="todoList">
        <ul className="travelcompany-input">
          <ClipLoader
            color={color}
            css={override}
            loading={loading}
            size={40}
          />
          {todoList.length === 0 && (
            <p
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                color: "#d2beb2",
              }}
            >
              Write To-do
            </p>
          )}
          {todoList.map((item, i) => (
            <li key={i} title={item.text}>
              <p
                onClick={() => checkItem(item)}
                className={item.check === true ? "textCheckLine" : ""}
              >
                {i + 1}. {item.text}
              </p>
              <button onClick={() => deleteTodo(item)} title="delete">
                <MdDelete size="25" color="#8c7c73" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      </form>
    </div>
  );
}

export default TodoList;
