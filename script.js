// tar-1 
function isValidID(id) {
    // בדיקה אם האורך הוא 9 תווים
    if (id.length !== 9) {
        return false;
    }

    // בדיקה אם כל תו הוא ספרה
    for (let i = 0; i < id.length; i++) {
        if (id[i] < '0' || id[i] > '9') {
            return false;
        }
    }

    return true;
}

function validateID() {
    const input = document.getElementById("idInput").value;
    const result = isValidID(input);
    const output = document.getElementById("tar1output");

    if (result) {
        output.textContent = "תעודת הזהות תקינה.";
        output.style.color = "green";
    } else {
        output.textContent = "תעודת הזהות אינה תקינה. יש להזין 9 ספרות בלבד.";
        output.style.color = "red";
    }
}

// tar-2
// פונקציה לבדיקת מספר ראשוני
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function checkPrime() {
    const input = document.getElementById("number").value;
    const result = isPrime(input);
    const output = document.getElementById("tar2output");

    if (result) {
        output.textContent = " מספר ראשוני";
        output.style.color = "green";
    } else {
        output.textContent = "המספר אינו ראשוני";
        output.style.color = "red";
    }
}

// tar-3
// פונקציה להוספת רווח לפני אותיות גדולות
function addSpaceBeforeUppercase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            result += ' ';
        }
        result += str[i];
    }
    return result;
}

function testAddSpaceBeforeUppercase() {
    const input = document.getElementById("string").value;
    const output = document.getElementById("tar3output");
    const result = addSpaceBeforeUppercase(input);
	output.textContent = result
	output.style.color = "green";
}

// tar-4
// פונקציה לספירת כמות ההופעות של מחרוזת בתוך מחרוזת אחרת
function countOccurrences(longStr, shortStr) {
    if (shortStr === "") {
        return 0; // במקרה של מחרוזת ריקה, אין הופעות
    }

    let count = 0;
    let position = longStr.indexOf(shortStr);

    while (position !== -1) {
        count++;
        position = longStr.indexOf(shortStr, position + shortStr.length);
    }

    return count;
}

function testCountOccurrences() {
	const output = document.getElementById("tar4output");
	const longStr = document.getElementById("longStr").value;
	const shortStr = document.getElementById("shortStr").value;
    const count = countOccurrences(longStr, shortStr);
    output.textContent = count ;
    output.style.color = "green";
}


// tar-5
// Bubble Sort   פונקציה למיון מחרוזת באמצעות 
function bubbleSortString(str) {
    let arr = str.split("");
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // החלפה של הערכים
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr.join("");
}

function testBubbleSortString() {
	const input = document.getElementById("Str").value;
    const sortedString = bubbleSortString(input);
    const output = document.getElementById("tar5output");
	output.textContent = sortedString ;
    output.style.color = "red";
}