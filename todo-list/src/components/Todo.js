import React from 'react'

function Todo(){
    return(
        <div>
            <h1 style={{textAlign:'center',color:'darkblue'}}>My To-Do List</h1>
        
            <div style={{textAlign:'center'}}>
                <input type="text" placeholder="Add a new task here" style={{padding:'5px'}}
                />
               <button 
               style={{ 
                backgroundColor:'darkblue',
                color:'white',
                padding: '5px 10px',
                border:'none',
                marginLeft:'5px',
                }}>
                    Add

               </button>

            </div>
            <ul style={{listStyleType:'circle', paddingLeft:'20px'}}>
            { /* Task irems will be listed here */}
            </ul>
        </div>



    );
}

export default Todo;