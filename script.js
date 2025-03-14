let answer = document.querySelector(".answer");
let buttons = document.querySelectorAll("button");
let exp = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonText = button.innerText;

        if (buttonText === "Clear") {
            exp = ""; 
        } else if (buttonText === "%") {
            exp = (eval(exp) / 100).toString(); 
        } else if (buttonText === "<-") {
            exp = exp.slice(0, -1); 
        } else if (buttonText === "=") {
            try {
                exp = eval(exp).toString(); 
            } catch {
                exp = "Error"; 
            }
        } else {
           
            exp += buttonText.replace("X", "*");
        }

        answer.innerText = exp || "0"; 
    });
});
