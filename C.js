var Readline = require("readline-sync");

function Brackets(Read) {
    let StackA = [];
    let StackB = [];
    for (i = 0; i < Read.length; i++) {
        let X = Read[i];
        if (X == "(" || X == "[" || X == "{" || X == "<") {
            StackA.push(X);
            continue;
        }
        if (X == ")" || X == "]" || X == "}" || X == ">") {
            StackB.push(X);
            continue;
        }
    }
    if (StackA.length !== StackB.length) {
        return false;
    }
    StackB.reverse();
    for (i = 0; i < StackB.length; i++) {
        if (StackB[i] == ")") {
            StackB[i] = "(";
        }
        else if (StackB[i] == "]") {
            StackB[i] = "[";
        }
        else if (StackB[i] == "}") {
            StackB[i] = "{";
        }
        else if (StackB[i] == ">") {
            StackB[i] = "<";
        }
    }
    for (i = 0; i < StackA.length; i++) {
        if (StackA.pop() !== StackB.pop()) {
            return false;
        }
        break;
    }
    return true;
}
var Read = Readline.question();
if (Brackets(Read)) {
    console.log("Balanced");
}
else {
    console.log("Not Balanced");
}