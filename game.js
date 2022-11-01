let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');
let newNumber;
let timer;
let i = 15;
let totalCount;
let currentArray = [];
let arrayVal = [];

function play() {
    clearForm()
    setTimeout(() => {
        document.querySelector('#counter').style.display = 'block';
        document.querySelector('#select-btn').disabled = false;
    }, 1000)

    document.querySelector('#section1').style.display = 'block';
    document.querySelector('#section2').style.display = 'block';
    document.querySelector('#section3').style.display = 'none';
    document.querySelector('#play').style.display = 'none';
    i = 15;
    startCount();
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
            document.querySelector('#select-btn').disabled = true;
            totalCount = 14 - i;
            document.querySelector('#section1').style.display = 'none';
            document.querySelector('#section2').style.display = 'none';
            document.querySelector('#section3').style.display = 'block';
            storeValues();
        }
    }, 1000);
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
        document.querySelector('#select-btn').disabled = true;
        totalCount = 14 - i;
        setTimeout(() => {
            document.querySelector('#section1').style.display = 'none';
            document.querySelector('#section2').style.display = 'none';
            document.querySelector('#section3').style.display = 'block';
            storeValues();

        }, 300)
    }
}

function storeValues() {

    var inputs = document.getElementsByTagName("input");
    for (s = 0; s < inputs.length; s++) {
        currentArray.push(inputs[s].value);
        var set = new Set(currentArray);
        if (set.size === 6) {
            console.log("unique " + true);
            currentArray.push(totalCount);
            arrayVal.push(currentArray);
            totalCount = "";
        }
    }
    console.log(currentArray)
    console.log(arrayVal);
    clearForm();
}

function clearForm() {
    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";
    num5.value = "";
    num6.value = "";
    totalCount = "";
    document.getElementById('counter').innerHTML = "";
    currentArray = [];
}

// function getWinner() {
//     const vals = [
//         ['2', '1', '5', '4', '6', '3', 11],
//         ['4', '6', '3', '1', '2', '5', 9],
//         ['6', '2', '4', '1', '3', '5', 10],
//         ['6', '2', '4', '1', '3', '5', 7],
//         ['6', '2', '4', '1', '3', '5', 14]
//     ];
//     console.log(vals);

//     for (let q = 0; q < vals.length; q++) {
//         let time = vals[q][6];
//         console.log(time);
//     }
// }

