const sumAll = function(firstInt, lastInt) {
    let i
    if(firstInt <= lastInt){
        biggerInt = lastInt
        smallerInt = firstInt
    }
    else{
        biggerInt = firstInt
        smallerInt = lastInt
    }
    let sum = 0
    if(firstInt < 0||lastInt < 0){
        return "ERROR"
    }
    else if(typeof firstInt != "number"||typeof lastInt != "number"){
        return "ERROR"
    }
    else{
        while(smallerInt <= biggerInt){
            sum +=
            smallerInt++
        }
    }
    return sum
}

// Do not edit below this line
module.exports = sumAll;
