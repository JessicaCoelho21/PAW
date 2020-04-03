//Ficha prática 1, exercício 1.3.2

function multiply(a, b){
    return a*b;
}

//console.log(multiply(1, 3));

function longestString(stringArray){
    var aux = "";

    for(var i = 0; i < stringArray.length - 1; i++){
        if(stringArray[i + 1].length > stringArray[i].length){
            aux = stringArray[i + 1];
        }
    }

    return aux;
}

var array = ["ola", "adeus", "jessica"];
//console.log(longestString(array));

function firstCapitalLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//console.log(firstCapitalLetter("jessica"));

function arrayNumber(array){
    var num = -1, count = 0, pos = -1, big = -1;

    for(var i = 0; i < array.length; i++){
        count = 0;
        num = array[i];

        for(var j = i + 1; j < array.length; j++){
            if(array[j] == num){
                count++;
            }
        }

        if(count > 0){
            if(big < count){
                big = count;
                pos = i; 
            }
        }
    }

    return array[pos];
}

var numbers = [1, 2, 5, 4, 80, 3, 80, 80];
//console.log(arrayNumber(numbers));

function emailConfirmation(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//console.log(emailConfirmation("jessica@hotmail.com"));

function nineNumbers(num){
    var aux = [];
    

    for(var i = 0; i < num.length; i++){
        aux[i] = num[i];
    }

    var count = aux.length - 1;

    if(aux.length < 9){
        var aux2 = [];

        for(var j = 8; j >= 0; j--){
            aux2[j] = aux[count];
            count--;
        }

        var pos = 0;

        while(aux2[pos] == null){
            aux2[pos] = 0;
            pos++;
        }

        return aux2.toString();
    }

    if(aux.length > 9){
        throw "invalido";
    }

    if(aux.length == 9){
        return aux;
    }
}

var array = [1, 2, 3, 4, 5, 6, 7];
//console.log(nineNumbers(array));

function primeNumber(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    
    return num > 1;
}

//console.log(primeNumber(7));

function moneyMoney(value){
    var money = [];

    //moeda de 2 euros
    for(let i = true; i == true ; ){
        if(value >= 200){
            value = value - 200;
            money.push(200);
        }
        else{
            i = false;
        }
    }

    //moeda de 1 euro
    for(let i = true; i == true ; ){
        if(value >= 100){
            value = value - 100;
            money.push(100);
        }
        else{
            i = false;
        }
    }

    //moeda de 50 centimos
    for(let i = true; i == true ; ){
        if(value >= 50){
            value = value - 50;
            money.push(50);
        }
        else{
            i = false;
        }
    }

    //moeda de 20 centimos
    for(let i = true; i == true ; ){
        if(value >= 20){
            value = value - 20;
            money.push(20);
        }
        else{
            i = false;
        }
    }

    //moeda de 10 centimos
    for(let i = true; i == true ; ){
        if(value >= 10){
            value = value - 10;
            money.push(10);
        }
        else{
            i = false;
        }
    }

    //moeda de 5 centimos
    for(let i = true; i == true ; ){
        if(value >= 5){
            value = value - 5;
            money.push(5);
        }
        else{
            i = false;
        }
    }

    //moeda de 2 centimos
    for(let i = true; i == true ; ){
        if(value >= 2){
            value = value - 2;
            money.push(2);
        }
        else{
            i = false;
        }
    }

    //moeda de 1 centimo
    for(let i = true; i == true ; ){
        if(value >= 1){
            value = value - 1;
            money.push(1);
        }
        else{
            i = false;
        }
    }

    return money;
}

//console.log(moneyMoney(473));

function palindromo(string) {
    string = string.toString();
    let validation = true;
    let maxLength = string.length;

    for(let i = 0; i < maxLength/2; i++){
        if (string[i] != string[maxLength - 1 - i]) {
            validation = false;
            
        }
        
    }

    return validation;
}

console.log(palindromo("jessica"));
console.log(palindromo(12345));
console.log(palindromo(123321));


