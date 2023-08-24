// Complete the following steps to create: Are You Old Enough? 
var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

// Code the days of the week program as a switch statement

var day = "Sunday";
switch (day) {
    case "Monday":
        console.log("Go Office");
        break;
    case "Tuesday":
        console.log("Go Office");
        break;
    case "Wednesday":
        console.log("Go Office");
        break;
    case "Thursday":
        console.log("Go Office");
        break;
    case "Friday":
        console.log("Go Office");
        break;
    case "Saturday":
        console.log("Movie Night");
        break;
    case "Sunday":
        console.log("Fun day");
        break;
    default:
        console.log("There is no such day");
        break;
}

