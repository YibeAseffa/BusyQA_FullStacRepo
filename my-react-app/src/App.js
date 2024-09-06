import React from 'react';

function MyComponent(){
  // const element=<h1>Hello JSX</h1>;
  
  // const name='Yibe';
  // const greeting=<h1>Hello {name}</h1>
  // return greeting;

  const handleClick=()=>alert('Hello, React!');
  return (
    <div> 
      <h1>Hello, React!</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>

  );
 


         
}

export default MyComponent;