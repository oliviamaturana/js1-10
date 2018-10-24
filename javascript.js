//write first method
function sleep_in(weekday,vacation) {
    if(!weekday || vacation){
        return true;
    }else{
        return false;
    }
}

/* Monkey Trouble */
function monkey_trouble (a_smile, b_smile){
    if (a_smile && b_smile || !a_smile && !b_smile){
        return true;
    } else {
        return false;
    }
}

function string_times(word, times){
    var answer = " ";
    for(var i = 0; i < times; i++){
        answer = answer + word;
    }
    return  answer

}

/* front_times */
function front_times (string, times){
    var shorter = string.substring (0, 3);
    var answer ="";
    for (var i = 0; i < times; i++){
        answer = answer + shorter;
    }
    return answer;
}

/* String_bits */
function string_bits(string){
    var answer = "";
    for (var i = 0; i < string.length; i+=2){
        answer = answer + string[i];
    }
    return answer;
}

function caughtSpeeding(speed, birthday){
    if(birthday == true){
        speed = speed - 5;
    }
    if(speed <= 60){
        return 0;
    }
    if(61<= speed && speed <=80){
        return 1;
    }
    if(speed >= 81){
        return 2;
    }
}

function fizz_buzz(x){
    if(( x % 3 == 0 ) && ( x % 5 == 0 )){
        return "FizzBuzz";
    }
    else if( x % 3 == 0 ){
        return "Fizz";
    }
    else if( x % 5 == 0 ){
        return "Buzz";
    }else{
        return x + "!";
    }
}

function teaParty(tea, candy){
    if((tea < 5) || (candy < 5)){
        return 0;
    }
    if((tea >= (candy*2)) || (candy >= (tea*2))){
        return 2;
    }
    if((tea >= 5) && (candy >= 5)) {
        return 1;
    }
}

function blackjack(x, y){
    x > 0;
    y > 0;
    if((x > 21) && (y > 21)){
        return 0;
    }
    if(x > y && x <= 21){
        return x;
    }
    if(y > x && y <= 21){
        return y;
    }
    if(x > 21){
        return y;
    }
    if(y > 21){
        return x;
    }
}

function loneSum(a, b, c){
    if(a == b && b == c){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(b == c){
        return a;
    }
    if(a == c){
        return b;
    }
    return a + b + c;

}






//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}
