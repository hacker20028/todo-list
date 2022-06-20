import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";

function App() {
  let todos = [{
    sno : 1,
    title : "Learn React",
    desc : "Learn React to build a todo app",
  },

  {
    sno : 2,
    title : "Learn Node",
    desc : "Learn Node to build a todo app",
  },

  {
    sno : 3,
    title : "Learn MongoDB",
    desc : "Learn MongoDB to build a todo app",
  }
]
  return (
   <>
   <Header title = "TodoLists" searchBar = {false}/>
   <Todos todos = {todos}/>
   <Footer/>
   </>
  );
}

export default App;
