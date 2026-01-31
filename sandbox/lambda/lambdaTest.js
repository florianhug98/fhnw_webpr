const lambdaOk = [];

//id
lambdaOk.push(id(1) === 1);
lambdaOk.push(id(id) === id);

//konst
lambdaOk.push(konst(42)(0) === 42);
lambdaOk.push(konst(42)(1) === 42);
lambdaOk.push(konst(42)(undefined) === 42);
lambdaOk.push(konst(42)(null) === 42);
lambdaOk.push(konst(42)(NaN) === 42);

//kite
lambdaOk.push(snd(null)(400) === 400);

//true false
lambdaOk.push(T(1)(0) === 1);
lambdaOk.push(F(0)(1) === 1);

//and
lambdaOk.push(and(F)(F) === F);
lambdaOk.push(and(F)(T) === F);
lambdaOk.push(and(T)(F) === F);
lambdaOk.push(and(T)(T) === T);

//or
lambdaOk.push(or(F)(F) === F);
lambdaOk.push(or(T)(F) === T);
lambdaOk.push(or(F)(T) === T);
lambdaOk.push(or(T)(T) === T);

//xor
lambdaOk.push(xor(F)(F) === F);
lambdaOk.push(xor(T)(F) === T);
lambdaOk.push(xor(F)(T) === T);
lambdaOk.push(xor(T)(T) === F);

//flip
lambdaOk.push(flip(konst)(1)(0) === konst(0)(1));

//not
lambdaOk.push(not(T) === F);
lambdaOk.push(not(F) === T);

//beq
lambdaOk.push(beq(F)(F) === T);
lambdaOk.push(beq(T)(F) === F);
lambdaOk.push(beq(F)(T) === F);
lambdaOk.push(beq(T)(T) === T);

//pair
const fhug = Pair("Florian")("Hug"); // Immutable -> wegen closure scope
lambdaOk.push(fhug(firstname) === "Florian");
lambdaOk.push(fhug(lastname) === "Hug");

//either
const saveDiv = num => divisor =>
    divisor === 0
        ? Left("schlecht!!!")
        : Right(num / divisor);

either(saveDiv(1)(1))
(x => console.error(x))
(x => console.log(x))

saveDiv(1)(0)
(x => console.error(x))
(x => console.log(x))










document.writeln("lambda:<br>")
const allTestsOk = () => {
    for (let i = 0; i < lambdaOk.length; i++) { // not nice, yet. Needs improvement
        if (false === lambdaOk[i]) {
            return false;
        }
    }
    return true;
};

if (allTestsOk()) {
    document.writeln("All " + lambdaOk.length + " tests ok.<br><br>");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i < lambdaOk.length; i++) {
        if (lambdaOk[i]) {
            document.writeln("Test " + i + " ok");
        } else {
            document.writeln("Test " + i + " failed");
        }
        document.write("<br>");
    }
}
