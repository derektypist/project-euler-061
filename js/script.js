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
        txt += `Sum of numbers in ordered sets of ${num} cyclic 4-digit numbers is ${cyclicalFigurateNums(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the sum of numbers in ordered sets of n cyclic 4-digit
    numbers for which each polygonal type: triangle, square, pentagonal,
    [hexagonal, heptagonal, and octagonal], is represented by a different number
    in the set
    cyclicalFigurateNums(3) returns 19291
    cyclicalFigurateNums(4) returns 28684
    cyclicalFigurateNums(5) returns 76255
    cyclicalFigurateNums(6) returns 28684
*/
function cyclicalFigurateNums(n) {
    function getChains(chain,n,numberTypes,numsExcludingLastNumberType) {
        if (chain.length === n) return [chain];

        const nextNumbers = getNextNumbersInChain(chain[chain.length-1],numsExcludingLastNumberType);
        const chains = [];
        for (let j=0;j<nextNumbers;j++) {
            const nextNumber = nextNumbers[j];
            if (chain.indexOf(nextNumber) === -1) {
                const nextChain = [...chain, nextNumber];
                chains.push(...getChains(nextChain,n,numberTypes,numsExcludingLastNumberType));
            }
        }
        return chains;
    }
}