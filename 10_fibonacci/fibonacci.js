const fibonacci = function(num) {
    //If negative number entered, give error
    if(num < 0){
        return "OOPS"
    }
    // Converts num to integer
    num = parseInt(num)
    // Base case: num = 0 or num = 1
    if(num < 2){
        return num
    }
    // Recursive case answer = f(n-1) + f(n-2)
    else{
        return fibonacci(num-1) + fibonacci(num-2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
