import "./App.scss";
import "./assets/scss/todoList.scss";
import TodoList from "./components/TodoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppTitle = "Todo List";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <TodoList appName={AppTitle} />
    </div>
  );
}

export default App;
