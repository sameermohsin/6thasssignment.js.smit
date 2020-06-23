//Chapter 21-25:-

//Task no.1:
var firstName = prompt("Enter Your First Name: ")
var lastName = prompt("Enter Your Last Name: ")
var fullName = firstName + " " + lastName;
alert("Hello!" + " " + fullName)

//Task no.2:
var favPhone = prompt("Tell your favorite Mobile Phone Model: ")
var outPut = "My favorite phone is: " + favPhone
var lengthStr = favPhone.length;
alert(outPut + "\n" + "Length of string: " + lengthStr)

//Task no.3:
var p = "Pakistani"
var lengthofStr = p.length;
alert("String: " + p + "\n" + "Index of 'n': " + lengthofStr)

//Task no.4:
var h = "Hello World"
var indxNum = h.lastIndexOf('l');
alert("String: " + h + "\n" + "Last index of 'l': " + indxNum)

//Task no.5:
// var p = "Pakistani"
// var indxChar = p.charAt(3);
// alert("String: " + p + "\n" + "Character at index 3: " + indxChar)

//Task no.6:
var firstName = prompt("Enter Your First Name: ")
var lastName = prompt("Enter Your Last Name: ")
var fullName = firstName.concat(lastName);
alert("Hello!" + " " + fullName)

//Task no.7:
var city = "Hyderabad"
var indexNum = city.indexOf('Hyder')
var city1 = city.slice(0, indexNum)
var replaceCity = "Islam"
var city2 = city.slice(indexNum + 5)
alert("City: " + city + "\n" + "After Replacement: " + replaceCity + city2)

//Task no.8:
var message = "Ali and Sami are best friends.They play cricket and football together."
var text = message.lastIndexOf("and");
var text1 = message.slice(0, text)
var replaceText = "&";
var text2 = message.slice(text + 3)
alert(text1 + replaceText + text2)

//Task no.9:
value = "472"
str = "string"
int = Number(value)
num = "number"
alert("Value: " + value + "\n" + "Type: " + str + "\n" + "Value: " + int + "\n" + "Type: " + num)

//Task no.10:
var input = prompt("Enter any text to convert into Upper case: ")
var str = input.toUpperCase()
alert("User input: " + input + "\n" + "Upper case: " + str)

//Task no.11:
var input = prompt("Enter any text to convert into Upper case: ")
var indexNum = input.charAt(0)
var str = indexNum.toUpperCase()
var outPut = input.replace(indexNum, str)
alert("User input: " + input + "\n" + "Upper case: " + outPut)

//Task no.12:
var num = 35.36
var text = num.toString()
var rem = text.replace('.', '');
alert("Number: " + num + "\n" + "Result: " + rem)

//Task no.13:
var userName = prompt("Enter your name: ")
var res1 = String.fromCharCode(33);
var res2 = String.fromCharCode(44);
var res3 = String.fromCharCode(46);
var res4 = String.fromCharCode(64);
if (userName.match(res1)) {
    alert("Please enter valid user name!");
} else if (userName.match(res2)) {
    alert("Please enter valid user name!");
} else {
    alert("Your Name: " + userName);
}

//Task no.14:
var item = prompt("Enter an item you want: ")
item = item.toLowerCase()
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
        alert('Item is available')
        break
    } else {
        alert('We are Sorry! Item is not available')
        break
    }
}

//Task no.13:
// var userName = prompt("Enter your name: ")
// var res1 = String.fromCharCode([33, 44, 46, 64]);
// if (userName.match([res1])) {
//     alert("Please enter valid user name!");
// } else {
//     alert("Your Name: " + userName);
// }

//Task no.15:
var pwd1 = prompt("Enter your password: ")
var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
if (pwd1.length < 6) {
    alert("Error: Password must contain at least six characters!");
    pwd1.focus();
    return false;
} else if (re.test(pwd1)) {
    alert("Error: password must contain at least one number (0-9)!");
    pwd1.focus();
    return false;
} else if (re.test(pwd1)) {
    alert("Error: password must contain at least one lowercase letter (a-z)!");
    pwd1.focus();
    return false;
} else if (re.test(pwd1)) {
    alert("Error: password must contain at least one uppercase letter (A-Z)!");
    pwd1.focus();
    return false;
} else {
    alert("Your password has been saved!");
    pwd1.focus();
    return false;
}

//Task no.16:
var university = "University of Karachi";
var res = university.split('');
var brk = res.join("\n");
alert(university + "\n" + "\n" + brk)

//Task no.17:
var inp = "Pakistan"
var lastChar = inp[inp.length - 1];
alert("User input: " + inp + "\n" + "Last character of input: " + lastChar)

//Task no.18:
var txt = "The quick brown fox jumps over the lazy dog"
var str = txt.toLowerCase()
var count = (str.match(/the/g) || []).length;
console.log(count);
alert("There are " + count + " occurence(s) of word 'the'")

///////////////////////////////////////////////////////////////////////////////////////

//Chapter 26-30:-

//Task no.1:
var posInt = +prompt("Enter a positive integer: ")
var roundOff = Math.round(posInt)
var intFlr = Math.floor(posInt)
var intCeil = Math.ceil(posInt)
alert("Number: " + posInt + "\n" + "Round off value: " + roundOff + "\n" + "Floor value: " + intFlr + "\n" + "Ceil value: " + intCeil)

//Task no.2:
var posFlt = -prompt("Enter a negative integer: ")
var roundOff = Math.round(posFlt)
var fltFlr = Math.floor(posFlt)
var fltCeil = Math.ceil(posFlt)
alert("Number: " + posFlt + "\n" + "Round off value: " + roundOff + "\n" + "Floor value: " + fltFlr + "\n" + "Ceil value: " + fltCeil)

//Task no.3:
var val = -4
var absVal = Math.abs(val)
alert("The absolute value of " + val + " is " + absVal)

//Task no.4:
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
alert("Random dice value: " + numberOfStars)

//Task no.5:
var toss = Math.random();
var result = (toss * 2) + 1;
var tosRes = Math.floor(result);
if (tosRes === 2) {
    alert(tosRes + "\n" + "Random coin value: Heads")
} else {
    alert(tosRes + "\n" + "Random coin value: Tails")
}

//Task no.6:
var randi = Math.random();
var genNum = (randi * 100) + 1;
var numres = Math.floor(genNum);
alert("Random number between 1 and 100 : " + numres)

//Task no.7:
var weight = +prompt("Enter your weight in kilograms: " + "\n" + "Possible values can be" + "\n" + "Example:-" + "\n" + "a. 50" + "\n" + "b. 50kgs" + "\n" + "a. 50.2kgs" + "\n" + "a. 50.2kilograms")
alert("The weight of user is " + weight + " kilograms")

//Task no.8:
var number = Math.random();
var posValues = (number * 3) + 1;
var numres = Math.floor(posValues);
var input = prompt("Enter a number: ")
if (input == numres) {
    alert("Congratulations! You Won")
} else {
    alert("Try Again!")
}

///////////////////////////////////////////////////////////////////////////////////////

//Chapter 31-34:-

//Task no.1:
var date = new Date()
alert(date)

//Task no.2:
var dayMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var theMonths = now.getMonth();
var monthOfToday = dayMonths[theMonths];
alert("Current month: " + monthOfToday)

//Task no.3:
var date = new Date()
var str = date.toString()
var day = str.slice(0, 3)
alert("Today is " + day)

//Task no.4:
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDa
if (nameOfToday == "Sun" || nameOfToday == "Sat") {
    alert("It's fun day")
}

//Task no.5:
var date = new Date()
var dates = date.getDate()
if (date < 16) {
    alert("First fifteen days of the month")
} else {
    alert("Last days of the month")
}

//Task no.6:
var date = new Date()
var mili = date.getTime()
var min = mili / (1000 * 60 * 60)
alert("Cuurent date: " + date + "\n" + "Elapsed miliseconds since January 1, 1970: " + mili + "\n" + "Elapsed minutes since January 1, 1970: " + min)

//Task no.7:
var date = new Date()
var hours = date.getHours()
if (hours <= 11) {
    alert("It's AM")
} else {
    alert("It's PM")
}

//Task no.8:
var d = new Date();
var mon = d.setMonth(11);
var day = d.setDate(31);
var hour = d.setHours(0);
var min = d.setMinutes(0);
var sec = d.setSeconds(0)
alert("Later date: " + d)

//Task no.9:
var ramzd = new Date("Apr 25, 2020");
var ramzmili = ramzd.getTime()
var today = new Date()
var todaymili = today.getTime()
var days = todaymili - ramzmili
var diff = days / (1000 * 60 * 60 * 24)
var findays = Math.floor(diff)
alert(findays + " days has been passed since 1st Ramzan, 2020")

//Taskk no.10:
var secd = new Date("2020");
var secmili = secd.getTime()
var today = new Date()
var todaymili = today.getTime()
var secs = todaymili - secmili
var diff = secs / (1000 * 60)
var finsecs = Math.floor(diff)
alert("On reference date: " + today + "\n" + finsecs + " seconds has been passed since beginning of 2020")

//Task no.11:
var date = new Date();
var a = date.toString();
var b = date.setHours(date.getHours() + 1);
var c = date.toString();
alert("Current date: " + c + "\n" + "1 hour ago, it was " + a)

//Task no.12:
var date = new Date();
var a = date.toString();
var b = date.setFullYear(date.getFullYear() - 100);
var c = date.toString();
alert("Current date: " + a + "\n" + "100 years back, it was " + c)

//Task no.13:
var userAge = +prompt("Enter your age: ")
var date = new Date()
var years = date.getFullYear()
var diff = years - userAge
alert("Your age is: " + userAge + "\n" + "Your bith year is: " + diff)

//Task no .14:
var cusName = prompt("Enter your Name: ")
var dayMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var theMonths = now.getMonth();
var mon = dayMonths[theMonths];
var units = +prompt("Enter your units: ")
var chrge = 16
var bill = units * chrge
var dueCH = bill / 10
var due = bill + dueCH
alert("K-Electric Bill" + "\n" + "\n" + "Customer Name: " + cusName + "\n" + "Month: " + mon + "\n" + "Number of units: " + units + "\n" + "Charges per unit: " + chrge + "\n" + "\n" + "Net Amount Payable (within Due Date): " + bill + "\n" + "Late payment surcharge: " + dueCH + "\n" + "Gross Amount Payable (after Dur Date): " + due)

///////////////////////////////////////////////////////////////////////////////////////

//Chapter 35-38:-

//Task no.1:
function date() {
    var date = new Date()
    alert(date)
}
date();

//Task no.2:
function name() {
    var firstName = prompt("Enter first Name: ")
    var lastName = prompt("Enter last Name: ")
    var fullName = firstName + " " + lastName
    alert("Hello! " + fullName)
}
name();

//Task no.3:
function add() {
    var a = +prompt("Enter first value for addition: ")
    var b = +prompt("Enter second value for addition: ")
    var c = a + b
    alert("The sum of " + a + " and " + b + " is " + c)
}
add();

//Task no.4:
function calculator(n1, opr, n2) {
    if (opr == "+") {
        var plus = n1 + n2
        alert(n1 + " " + opr + " " + n2 + " = " + plus)
    } else if (opr == "-") {
        var minuse = n1 - n2
        alert(n1 + " " + opr + " " + n2 + " = " + minuse)
    } else if (opr == "*") {
        var multiply = n1 * n2
        alert(n1 + " " + opr + " " + n2 + " = " + multiply)
    } else if (opr == "/") {
        var divide = n1 / n2
        alert(n1 + " " + opr + " " + n2 + " = " + divide)
    } else {
        alert("Enter valid operator!")
    }
}
calculator(+prompt("Enter 1st value: "), prompt("Enter operator: "), +prompt("Enter 2nd value: "));

//Task no.5:
function square(s) {
    var a = s * s
    alert("Value: " + s + "\n" + "Square of the value: " + a)
}
square(+prompt("Enter the value for its square: "))

//Task no.6:
function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
let n = 2;
answer = factorial(+prompt("Enter the value for its factorial: "));
alert("The factorial of is " + answer);

//Task no.7:
var counter_list = [10, 10000, 10000];
var str_counter_0 = counter_list[0];
var str_counter_1 = counter_list[1];
var str_counter_2 = counter_list[2];
var display_str = "";
var display_div = document.getElementById("display_div_id");
function incrementCount(current_count) {
    setInterval(function() {
        // clear count
        while (display_div.hasChildNodes()) {
            display_div.removeChild(display_div.lastChild);
        }
        str_counter_0++;
        if (str_counter_0 > 99) {
            str_counter_0 = 10; // reset count
            str_counter_1++; // increase next count
        }
        if (str_counter_1 > 99999) {
            str_counter_2++;
        }
        display_str = str_counter_2.toString() + str_counter_1.toString() + str_counter_0.toString();
        for (var i = 0; i < display_str.length; i++) {
            var new_span = document.createElement('span');
            new_span.className = 'num_tiles';
            new_span.innerText = display_str[i];
            display_div.appendChild(new_span);
        }
    }, 1000);
}
incrementCount();

//Task no.8:
function hyp() {
    var base = +prompt("Enter value of Base: ")
    var perp = +prompt("Enter value of Perpendicular: ")
    var c = (base * base) + (perp * perp)
    var hyp = Math.sqrt(c)
    alert("Base: " + base + "\n" + "Perpendicular: " + perp + "\n" + "Hypotenuse Square: " + c + "\n" + "Hypotenuse: " + hyp)
}
hyp();

//Task no.9:
function area(wid, heig) {
    var area = (wid * heig)
    alert("Area of rectangle is: " + area)
}
area(5, 6);

//Task no.10:
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
reverseString("hello");

//Task no.11:


//Task no.12:


//Task no.13:


//Task no.14:
