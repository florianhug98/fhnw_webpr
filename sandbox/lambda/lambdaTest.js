const ok = [];

//id
ok.push(id(1) === 1);
ok.push(id(id) === id);

//konst
ok.push(konst(42)(0) === 42);
ok.push(konst(42)(1) === 42);
ok.push(konst(42)(undefined) === 42);
ok.push(konst(42)(null) === 42);
ok.push(konst(42)(NaN) === 42);

//kite
ok.push(snd(null)(400) === 400);

//true false
ok.push(T(1)(0) === 1);
ok.push(F(0)(1) === 1);

//and
ok.push(and(F)(F) === F);
ok.push(and(F)(T) === F);
ok.push(and(T)(F) === F);
ok.push(and(T)(T) === T);

//or
ok.push(or(F)(F) === F);
ok.push(or(T)(F) === T);
ok.push(or(F)(T) === T);
ok.push(or(T)(T) === T);

//xor
ok.push(xor(F)(F) === F);
ok.push(xor(T)(F) === T);
ok.push(xor(F)(T) === T);
ok.push(xor(T)(T) === F);

//flip
ok.push(flip(konst)(1)(0) === konst(0)(1));

//not
ok.push(not(T) === F);
ok.push(not(F) === T);

//beq
ok.push(beq(F)(F) === T);
ok.push(beq(T)(F) === F);
ok.push(beq(F)(T) === F);
ok.push(beq(T)(T) === T);

//pair
const fhug = Pair("Florian")("Hug"); // Immutable -> wegen closure scope
ok.push(fhug(firstname) === "Florian");
ok.push(fhug(lastname) === "Hug");

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











const allTestsOk = () => {
    for (let i = 0; i < ok.length; i++) { // not nice, yet. Needs improvement
        if (false === ok[i]) {
            return false;
        }
    }
    return true;
};

if (allTestsOk()) {
    document.writeln("All " + ok.length + " tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i < ok.length; i++) {
        if (ok[i]) {
            document.writeln("Test " + i + " ok");
        } else {
            document.writeln("Test " + i + " failed");
        }
        document.write("<br>");
    }
}
