const palindromes = function (string) {
    // Only allows letters
    string = string.replace(/\W/g, "").toLowerCase()
    // Splits string into an array of characters
    stringArray = string.split("")
    // Reverses the array
    stringArray.reverse()
    // Joins the reversed array back together
    reversedString = stringArray.join("")
    console.log(reversedString)
    // Checks if strings are equal
    if(string == reversedString){
        return true
    }
    else{
        return false
    }
};

console.log(palindromes("racecar!"))

// Do not edit below this line
module.exports = palindromes;
