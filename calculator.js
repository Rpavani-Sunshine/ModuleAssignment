function calc(){
    // get values from user and assigning into variables
    let num1 = parseFloat(document.getElementById("firstvalue").value);
    let operation = document.getElementById("op").value;
    let num2 = parseFloat(document.getElementById("secvalue").value);

    if(num1!= 0 && num2!= 0){
        switch(operation){
            case "plus":
                var answer = num1 + num2;
                document.getElementById("ans").value=answer;
                break;
            case "minus":
                var answer = num1 - num2;
                document.getElementById("ans").value=answer;
                break;
            case "multiple":
                var answer = num1 * num2;
                document.getElementById("ans").value=answer;
                break;
            case "divide":
                var answer = num1 / num2;
                document.getElementById("ans").value=answer;
                break;
            default :
                alert("Invalid Operation",operation)
        }
    }
    else{
        alert("Invalid input")
    }
}

// Onchage the operator answer value change 0
function valuenull(){
    document.getElementById("ans").value=0;
}

