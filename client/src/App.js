import { InputTodo } from "./components/InputTodo";
import { ListTodos } from "./components/ListTodos";


import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;
