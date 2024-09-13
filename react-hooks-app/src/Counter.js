import React, {useState} from 'react';

function Counter(){
    const [count, setCount]=useState(0);
    return(
        <div>
            <p>Count:{count}</p>
            <button 
               style={{ 
                backgroundColor:'darkblue',
                color:'white',
                padding: '5px 10px',
                border:'none',
                marginLeft:'5px',
                }} onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
}

export default Counter;