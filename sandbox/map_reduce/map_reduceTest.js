const ok = [];

//map
const arr = [1,2,3];
const arrTimesTwo = arr.map(x => times(2)(x));
const arrPartialTimesTwo = arr.map(times(2));

ok.push(arrTimesTwo.length === 3);
ok.push(arrTimesTwo[0] === 2);
ok.push(arrTimesTwo[1] === 4);
ok.push(arrTimesTwo[2] === 6);
ok.push(arrPartialTimesTwo.length === 3);
ok.push(arrPartialTimesTwo[0] === 2);
ok.push(arrPartialTimesTwo[1] === 4);
ok.push(arrPartialTimesTwo[2] === 6);

//filter
const arrFilter = arr.filter(x => odd(x));
const arrPartialFilter = arr.filter(odd);

ok.push(arrFilter.length === 2);
ok.push(arrFilter[0] === 1);
ok.push(arrFilter[1] === 3);
ok.push(arrPartialFilter.length === 2);
ok.push(arrPartialFilter[0] === 1);
ok.push(arrPartialFilter[1] === 3);

//reduce
//reduce ((accumulator, currentElem) => accumulator + currentElem);
//started von links by default

const sum = arr.reduce((a,b) => a + b);
const partialSum = arr.reduce(plus);

ok.push(sum === 6);
ok.push(partialSum === 6);
ok.push(arr.reduce(plus, 5) === 11) // accumulator starts at 5


if (ok.every(x => x)) {
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
