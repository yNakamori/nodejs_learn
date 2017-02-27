document.getElementById("fizzBuzz").addEventListener("click", function(){
	
	let inputNumber = document.getElementById("input").value;
//	console.log(inputNumber);
	let result = "";

	for(i=1; i <= inputNumber; i++){
    if(i % 15 === 0){
        result += "FizzBuzz";
    }else if(i % 5 === 0){
        result += "Buzz";
    }else if(i % 3 === 0){
    	result += "Fizz";
    }else{
        result += i;
    }
}
	console.log(result);
});