let first="",second="",operator;
const exp = document.querySelector(".eq");
const ans = document.querySelector(".ans");
const keys = document.querySelector(".keys");
const point = keys.querySelector('.point');
const buttons = keys.querySelectorAll('button');
const listener = (event) => {
    let id = event.target.getAttribute('data-id');
    if(event.target.classList.contains("num")){
        
            if(operator == undefined)
            {
                first+=id;
                ans.textContent = first;
            }
            else {second+=id;
                ans.textContent = second;
            } 
    }
    else if(event.target.classList.contains("equal")){
        first = calculate()+""
        if(first != "")
        ans.textContent = first;
        else{
            ans.textContent = "error";
        }
    }
    else if(event.target.classList.contains("op")){
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
    else if(event.target.classList.contains("point")){
        let id = event.target.getAttribute('data-id');
            if(operator == undefined)
            {
                first+=id;
                ans.textContent = first;
            }
            else {second+=id;
                ans.textContent = second;
            }
        event.target.removeEventListener('click', listener);
    }
    else if(event.target.classList.contains("clear")){
        first = second = "";
        operator = undefined;
        ans.textContent="";
        exp.textContent="";
        point.addEventListener('click',listener);
    }
    else{
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
};

buttons.forEach((button)=>{
    button.addEventListener('click', listener);
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