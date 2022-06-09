import React, { useState, useEffect } from "react";
import database from "../firebase";
import { MdDelete } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { toast } from "react-toastify";

function TodoList(props) {
  const [todoText, setTodoText] = useState();
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#d2beb2");

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const saveTodo = () => {
    if (todoText === "" || todoText === undefined) {
      toast("Write to do 😋");
    } else {
      todoList.unshift(todoText);
      setTodoList(todoText);
      database
        .ref("todoList")
        .set({
          todoList,
        })
        .catch(alert);
      setTodoText("");
    }
  };

  const deleteTodo = (item) => {
    const arr = [...todoList];
    const cardIndex = todoList.indexOf(item);
    arr.splice(cardIndex, 1);
    setTodoList(arr);
    database
      .ref("todoList")
      .set({
        arr,
      })
      .catch(alert);
    setLoading(true);
    toast(item + " " + "deleted");
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setLoading(true);
    const todoRef = database.ref("todoList");
    todoRef.on("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        setTodoList(childData);
      });
      if (todoList.length === 0 || todoList.length !== 0) setLoading(false);
    });
  }, []);

  return (
    <div className="content">
      <h1>{props.appName}</h1>
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
            <li key={i}>
              {i + 1}. {item}
              <button onClick={() => deleteTodo(item)} title="delete">
                <MdDelete size="25" color="#8c7c73" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
