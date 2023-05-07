let first="",second="",operator,answer="";
let full = false;
let clear = false;
const exp = document.querySelector(".eq");
const ans = document.querySelector(".ans");
const keys = document.querySelector(".keys");
const buttons = keys.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let id = button.getAttribute('data-id');
        if(button.classList.contains("num")){
            if(clear == false)
            {
                if(operator == undefined)
                {
                    first+=id;
                    ans.textContent = first;
                }
                else {second+=id;
                    ans.textContent = second;
                }
            }
            else
            {
                if(operator == undefined)
                {
                first = id;
                ans.textContent = first;
                }
                else{
                second=id;
                clear = false;
                ans.textContent = second;
                }
            }   
        }
        else if(button.classList.contains("equal")){
            first = calculate();
            ans.textContent = first;
        }
        else if(button.classList.contains("op")){
            if(second == "")
                operator = id;
            else{
            first = calculate();
            operator = id;
            }
            clear = true;
            exp.textContent = first+operator;
        }
        else if(button.classList.contains("point")){

        }
        else if(button.classList.contains("clear")){

        }
        else{

        }
    });
});
function calculate()
{   let one  = parseFloat(first);
    let two = parseFloat(second);
    let a;
    switch(operator)
    {
        case "+": a= one+two;
        break;
        case "−": a= one-two;
        break;
        case "÷": a= one/two;
        break;
        case "×": a= one*two;
    }
    exp.textContent = first+operator+second;
    first = second = "";
    operator = undefined;
    return a;
}