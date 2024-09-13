import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// creating a functional component called Todo that will display the Todo List
function Todo(){      
   
    const [todos,setTodos]=useState([]); //todos to store list of todo items
    const [newTodo, setNewTodo]=useState(''); //newtodo to store the text of new todo item

// Creating a function addTodo to add new Todo Items
    const addTodo =()=>{
        if (newTodo.trim()=='') return; //Can not add an empty todos
        setTodos([...todos,newTodo]);
        setNewTodo('') //Clear the input field
    };

    //  Creating a function removeTodo to Remove  Todo Items
     
   const removeTodo=(index)=>{
    const updatedTodos =[...todos];
    updatedTodos.splice(index,1);
    setTodos(updatedTodos);

   }; 




  //rendering Todo Items
    return(
        <div>
            <h1 style={{textAlign:'center',color:'darkblue'}}>My To-Do List</h1>
        
            <div style={{textAlign:'center'}}>
                <input 
                type="text"
                placeholder="Add a new task here"
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)}
                style={{padding:'5px'}}
                />
               <button 
               onClick={addTodo}
               style={{ 
                backgroundColor:'darkblue',
                color:'white',
                padding: '5px 10px',
                border:'none',
                marginLeft:'5px',
                }}>
                    <span><FontAwesomeIcon icon="fa-solid fa-add" />  Add</span> 
                  
                  
                </button>
               
               
        


            </div>
            <ul
            style={{listStyleType:'circle', paddingLeft:'20px'}}>
            { /* Task items will be listed here */
            todos.map((todo,index)=>(
                <li key={index}
                style={{paddingBottom:'5px' }}>
                    {todo}
                    <button 
                    onClick={()=>removeTodo(index)}
                    style={{ 
                        backgroundColor:'red',
                        color:'white',
                        padding: '5px 10px',
                        border:'none',
                        marginLeft:'5px',
                        }}>
                          <span><FontAwesomeIcon icon="fa-solid fa-trash" />  Remove </span> 
                          </button>
                </li>
            ))}
            </ul>
        </div>



    );
}

export default Todo;