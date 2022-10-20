let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');
let inputValues = [];
let newNumber;
let timer;
let i = 15;
let totalCount;

function play() {
    document.querySelector('#section1').style.display = 'block';
    document.querySelector('#section2').style.display = 'block';
    document.querySelector('#section3').style.display = 'none';
    document.querySelector('#play').style.display = 'none';
    i = 15;
    startCount();
}

function playAgain() {
    window.location.reload();
}

function startCount() {
    timer = setInterval(() => {
        var el = document.getElementById('counter');
        newNumber = Math.floor(Math.random() * 6) + 1;
        el.innerHTML = newNumber;
        document.getElementById('attempt').innerHTML = i;
        i--;

        if (i < 0) {
            clearInterval(timer);
            console.log('interval cleared');
            totalCount = 14 - i;
            console.log("totalCount is: " + totalCount);
            document.querySelector('#section1').style.display = 'none';
            document.querySelector('#section2').style.display = 'none';
            document.querySelector('#section3').style.display = 'block';
            storeValues();
        }
    }, 500);
}

function select() {
    if (num1.value.length === 0) {
        num1.value = newNumber;
    } else if (num2.value.length === 0) {
        num2.value = newNumber;
    } else if (num3.value.length === 0) {
        num3.value = newNumber;
    } else if (num4.value.length === 0) {
        num4.value = newNumber;
    } else if (num5.value.length === 0) {
        num5.value = newNumber;
    } else if (num6.value.length === 0) {
        num6.value = newNumber;

        clearInterval(timer);
        console.log('interval cleared');
        totalCount = 14 - i;
        console.log("totalCount is: " + totalCount);
        setTimeout(() => {
            document.querySelector('#section1').style.display = 'none';
            document.querySelector('#section2').style.display = 'none';
            document.querySelector('#section3').style.display = 'block';
        }, 800)
        storeValues();
    }
}

function storeValues() {
    var inputs = document.getElementsByTagName("input");
    for (var s = 0; s < inputs.length; s++) {
        inputValues.push(inputs[s].value);
    }
    inputValues.push("count: " + totalCount );
    console.log(inputValues);
}

