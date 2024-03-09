function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function backspace() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}


function squared() {
    let expression = document.getElementById('display').value;
    let values = expression.split("x²");
    let value1 = parseFloat(values[0]);
    let value2 = parseFloat(values[1]);
    let result = eval(value1 + '*' + value1);
    document.getElementById('display').value = result;
    document.getElementById('history3').innerText = document.getElementById('history2').innerText;
    document.getElementById('history2').innerText = document.getElementById('history1').innerText;
    document.getElementById('history1').innerText = value1 + "²" + " = " + result;
}

function squareRoot() {
    let expression = document.getElementById('display').value;
    let values = expression.split("√");
    let value1 = parseFloat(values[0]);
    let value2 = parseFloat(values[1]);
    let result = Math.sqrt(eval(value1));
    document.getElementById('display').value = result;
    document.getElementById('history3').innerText = document.getElementById('history2').innerText;
    document.getElementById('history2').innerText = document.getElementById('history1').innerText;
    document.getElementById('history1').innerText = "√" + value1 + " = " + result;
}

function percentage() {
    let expression = document.getElementById('display').value;
    let values = expression.split("%");
    let value1 = parseFloat(values[0]);
    let value2 = parseFloat(values[1]);

    if (isNaN(value2) || value2 === null) {
        let result = value1 / 100;
        document.getElementById('display').value = result;
        document.getElementById('history3').innerText = document.getElementById('history2').innerText;
        document.getElementById('history2').innerText = document.getElementById('history1').innerText;
        document.getElementById('history1').innerText = value1 + "% = " + result;
    } else {
        let result = eval(value1) * (value2) / 100;
        document.getElementById('display').value = result;
        document.getElementById('history3').innerText = document.getElementById('history2').innerText;
        document.getElementById('history2').innerText = document.getElementById('history1').innerText;
        document.getElementById('history1').innerText = value1 + " % " + value2 + " = " + result;
    }
}

function calculate() {


    try {

        let powerof = "x²"
        let squareroot = "√"
        let percentagechar = "%"
        let expression = document.getElementById('display').value;

        if (expression.includes(percentagechar)) {
            percentage()
        }
        else if (expression.includes(powerof)) {
            squared()
        }

        else if (expression.includes(squareroot)) {
            squareRoot()
        }

        else {
            let result = eval(expression);
            document.getElementById('display').value = result;
            document.getElementById('history3').innerText = document.getElementById('history2').innerText;
            document.getElementById('history2').innerText = document.getElementById('history1').innerText;
            document.getElementById('history1').innerText = expression + " = " + result;
        }


    } catch (error) {
        document.getElementById('display').value = 'Error';
    }

}

function toggleTheme(value) {
    if (value === "1") {
        document.body.style.backgroundColor = "#F8F8FF";
        document.body.style.color = "#000";
        document.querySelectorAll('.calculator')[0].style.backgroundColor = "#fff";
        document.querySelectorAll('.theme-slider input[type="range"]')[0].style.background = "#f4f4f4";
    } else {
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "#fff";
        document.querySelectorAll('.calculator')[0].style.backgroundColor = "#444";
        document.querySelectorAll('.theme-slider input[type="range"]')[0].style.background = "#444";
    }
}