function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    if(y==0){
        throw new Error('Can not devided by zero')
    }
    return x/y;
}

function calculator(operator,a,b){
   
    switch (operator){
        case '+':
            return add(a,b);
        case '-':
            return sub(a,b);
        case '*':
            return mul(a,b);
        case '/':
            return div(a,b);
        default:
            throw new Error ('Please Enter a Valid Operator');
               
    }
}

try{
    //Accepting values from user
    num1=prompt("Please enter the first number");
    op=prompt("Please enter the operator")
    num2=prompt("Please enter the second number");
     result=calculator(op,num1,num2);
    alert(num1+" "+op+ " "+num2+"="+result);

   //Simple calculator using console 

    console.log('Addition:', calculator('+',6,5)); //11
    console.log('Subtruction:', calculator('-',8,4));//4
    console.log('Multiplication:', calculator('*',9,2));//18
    console.log('Division:', calculator('/',12,4));//3
    console.log('Division:', calculator('/',6,0)); //Throws error messsage
}catch(error){
    console.log('Error:', error.message);
    alert("Error: "+error.message);
    
    
}
