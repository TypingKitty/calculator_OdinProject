let first="",second="",operator;
const exp = document.querySelector(".eq");
const ans = document.querySelector(".ans");
const keys = document.querySelector(".keys");
const point = keys.querySelector('.point');
const buttons = keys.querySelectorAll('button');
const listener = (event) => {
    let id = event.target.getAttribute('data-id');
    if(event.target.classList.contains("num")) GETNUM(id);
    else if(event.target.classList.contains("equal")) EQUAL();
    else if(event.target.classList.contains("op")) OPERATOR(id);
    else if(event.target.classList.contains("point")) POINT(id);
    else if(event.target.classList.contains("clear")) CLEAR();
    else DELETE();
};

buttons.forEach((button)=>{
    button.addEventListener('click', listener);
});
window.addEventListener('keydown',(e)=>{
    console.log((e.key == "−", typeof("−")));
    if(e.key == 'Backspace') DELETE();
    else if(e.key == 'Enter') EQUAL();
    else if(e.key >="0" && e.key <="9") GETNUM(e.key);
    else if(e.key == '.') POINT('.');
    else if(e.key == 'Escape') CLEAR();
    else if(e.key == "+" || e.key == "-" || e.key == "/" || e.key == "*") OPERATOR(getOperator(e.key));
});
function calculate()
{   
    let one  = parseFloat(first);
    let two = parseFloat(second);
    let a;
    if(two == 0 && operator =="÷" ){
        exp.textContent = one+operator+two;
         a= "";
    }
    if(first==""){
        exp.textContent = 0+"=";
         a = 0;
    }
    else
    {
        if(operator == undefined){
            exp.textContent = one+"=";
            a = one;
        }
        else if(second == "") two = one;
    }
    if(a == undefined)
    {
        switch(operator)
        {
            case "+": a= parseFloat((one+two).toFixed(4));
            break;
            case "−": a= parseFloat((one-two).toFixed(4));
            break;
            case "÷": a= parseFloat((one/two).toFixed(4));
            break;
            case "×": a= parseFloat((one*two).toFixed(4));
        }
        exp.textContent = one+operator+two;
    }
    first = second = "";
    operator = undefined;
    return a;
}
function GETNUM(id){
    if(operator == undefined)
    {
        first+=id;
        ans.textContent = first;
    }
    else {second+=id;
        ans.textContent = second;
    } 
}
function EQUAL(){
    first = calculate()+""
    if(first != "")
    ans.textContent = first;
    else{
        ans.textContent = "error";
    }
}
function OPERATOR(id){
    point.addEventListener('click',listener);
    if(first=="") first ="0";
    if(second != ""){
    first = calculate()+""
    if(first == ""){
        ans.textContent = "error";
        first = "0";
    }
    }
    operator = id;
    exp.textContent = first+operator;
}
function POINT(id){
    if(operator == undefined)
    {
        first+=id;
        ans.textContent = first;
    }
    else {second+=id;
        ans.textContent = second;
    }
point.removeEventListener('click', listener);
}
function CLEAR(){
    first = second = "";
    operator = undefined;
    ans.textContent="";
    exp.textContent="";
    point.addEventListener('click',listener);
}
function DELETE(){
    if(operator == undefined)
    {
        first = first.slice(0,-1);
        ans.textContent = first;
    }
    else{
       second = second.slice(0,-1);
       ans.textContent = second;
    }
}
function getOperator(op)
{
    if(op == '/') return "÷";
    else if(op == '-') return "−";
    else if(op == '+') return "+";
    else return "×";
}