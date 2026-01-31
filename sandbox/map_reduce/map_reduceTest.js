const map_reduceOk = [];

//map
const arr = [1,2,3];
const arrTimesTwo = arr.map(x => times(2)(x));
const arrPartialTimesTwo = arr.map(times(2));

map_reduceOk.push(arrTimesTwo.length === 3);
map_reduceOk.push(arrTimesTwo[0] === 2);
map_reduceOk.push(arrTimesTwo[1] === 4);
map_reduceOk.push(arrTimesTwo[2] === 6);
map_reduceOk.push(arrPartialTimesTwo.length === 3);
map_reduceOk.push(arrPartialTimesTwo[0] === 2);
map_reduceOk.push(arrPartialTimesTwo[1] === 4);
map_reduceOk.push(arrPartialTimesTwo[2] === 6);

//filter
const arrFilter = arr.filter(x => odd(x));
const arrPartialFilter = arr.filter(odd);

map_reduceOk.push(arrFilter.length === 2);
map_reduceOk.push(arrFilter[0] === 1);
map_reduceOk.push(arrFilter[1] === 3);
map_reduceOk.push(arrPartialFilter.length === 2);
map_reduceOk.push(arrPartialFilter[0] === 1);
map_reduceOk.push(arrPartialFilter[1] === 3);

//reduce
//reduce ((accumulator, currentElem) => accumulator + currentElem);
//started von links by default

const sum = arr.reduce((a,b) => a + b);
const partialSum = arr.reduce(plus);

map_reduceOk.push(sum === 6);
map_reduceOk.push(partialSum === 6);
map_reduceOk.push(arr.reduce(plus, 5) === 11) // accumulator starts at 5

document.writeln("map_reduce:<br>")
if (map_reduceOk.every(x => x)) {
    document.writeln("All " + map_reduceOk.length + " tests ok.<br><br>");
} else {
    document.writeln("Not all tests ok! Details:<br>");
    for (let i = 0; i < map_reduceOk.length; i++) {
        if (map_reduceOk[i]) {
            document.writeln("Test " + i + " ok");
        } else {
            document.writeln("Test " + i + " failed");
        }
        document.write("<br>");
    }
}
