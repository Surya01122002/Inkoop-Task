function validateNumber() {
    const input = document.getElementById("numberInput").value;
    const message = document.getElementById("message");

    if (input === "") {
        message.textContent = "";
        message.className = ""; 
        return;
    }

    const number = parseInt(input);

    if (isNaN(number)) {
        message.textContent = "Please enter a valid number";
        message.style.color = "#d9534f";
        message.className = ""; 
        return;
    }

    if (number < 0) {
        message.textContent = "Please enter a positive value";
        message.style.color = "#d9534f";
        message.className = ""; 
        return;
    }

    if (number % 2 === 0) {
        message.textContent = `Next 3 even numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
        message.className = "even"; 
    } 
    else {
        message.textContent = `Next 3 odd numbers: ${number + 2}, ${number + 4}, ${number + 6}`;
        message.className = "odd";     
    }
}

function increment() {
    let input = document.getElementById("numberInput");
    let value = parseInt(input.value) || 0;
    input.value = value + 1;
    validateNumber();
}

function decrement() {
    let input = document.getElementById("numberInput");
    let value = parseInt(input.value) || 0;
    input.value = value - 1;
    validateNumber();
}
