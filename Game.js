let random_Number = Math.floor(Math.random()*10)+1;
// Writing the guess a user has
//userGuess = Number(prompt("Guess a number between 1-10"));
let i = 0 

while (true){
    userGuess = Number(prompt("Guess a number between 1-10"))
    if (userGuess == 999){
        break;
    }
    else if (userGuess > random_Number){
        alert("The number is too high");
        i++
    }
   else if (userGuess < random_Number){
        alert("The number is too low ");
        i++
   } 
    else{
        alert("Congratulations, you have guess it " + i + " amount of times");
        break;
    }
}

    //else;
       // alert('Congratualtions, you have  guessed it in ')
     //if (userGuess == 999){
        //break;
    //}
