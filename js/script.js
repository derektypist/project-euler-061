// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the Input is Valid
    if (isNaN(num) || num.length==0 || num<3 || num>6 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 3 and 6.  Do not include leading zeros.`;
    } else {
        txt += `Sum of only ordered set of ${num} cyclic 4-digit numbers is ${cyclicalFigurateNums(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}