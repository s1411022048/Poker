var Readline = require("readline-sync");

function Brackets(Read){
    let Stack = [];

    for(i = 0;i < Read.length;i++){
        let X = Read[i];
        if(X == "(" ||X == "["||X == "{"){
            Stack.push(X);
            continue;
        }
        if(Stack.length == 0){
            return false;
        }

        let check;
        switch(X){
            case ")":
                check = Stack.pop();
                if(check == "{" || check == "["){
                    return false;
                }
                break;

            case "]":
                check = Stack.pop();
                if(check == "{" || check == "("){
                    return false;
                }
                break;
            
            case "}":
                check = Stack.pop();
                if(check == "[" || check == "("){
                    return false;
                }
                break; 
        }

    }
    return(Stack.length == 0);
}

var Read = Readline.question();
if(Brackets(Read)){
    console.log("Balanced");
}
else{
    console.log("Not Balanced");
}
