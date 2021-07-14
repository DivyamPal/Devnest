import "./Styleday20.css";
import React, {useState} from "react";
const Todo=({todo, todos, setTodos, index}) =>{
    return (
        <div className="main">

            <h2 className="h2">{todo}</h2>
            <div className="del" onClick={()=>{
                // console.log("delete");
                const newTodos = todos.filter((to,i)=> i!= index);
                setTodos(newTodos);
            }}></div>            
        </div>
    );
};
function App(props){
    const [value, setValue]= useState("");
    const[todos, setTodos]= useState([]);
    return(
        <div className="dad">
        <h1>Anime List</h1>

      <div className="container">
                      
        <input type="text" onChange={(e)=>{
            setValue(e.target.value);
            // console.log(value);
        }} 
        value={value} />
        <div className="add" onClick={()=>{
            setTodos([...todos, value]);
            // setValue("");
        }}></div>
        {todos.map((todo,index) => (
            <Todo key={index} todos={todos} todo={todo} setTodos={setTodos} index={index}/>
        ))}
      </div>
      </div>
    );
  };
export default App;