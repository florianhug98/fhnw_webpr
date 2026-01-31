const objectOk =  [];

const myObject = {
    a: 1,
    foo: function() { return this.a } // this resolves to what is left of call, not the object!!!
}

objectOk.push(myObject.foo() === 1);

function outer( callback ) {
    const a = 2;
    return callback();
}

function inner() {
    const a = 3;
    return this.a;
}

// this in callbacks funktionieren beides nicht
// weil this das globalce object ist und a dort nicht existiert
// objectOk.push(outer( inner ) === 2);
// objectOk.push(outer( inner ) === 3);


// closed, explicit
// safe -> closure scope, no this
// always returns same structure, but no "class"
const Person = (fn, ln) => {
    return {
        getName: () => fn + " " + ln
    }
}

const florian = Person("Florian", "Hug");
objectOk.push(florian.getName() === "Florian Hug");


// Mixed, classified
const ClassPerson = (
    () => {
        function Person(first, last) { // ctor, binding
            this.firstname = first;
            this.lastname = last;
        }
        Person.prototype.getName = function () {
            return this.firstname + " " + this.lastname;
        }
        return Person;
    }
) (); //IIFE
const p = new ClassPerson("Florian", "Hug")

objectOk.push(p instanceof ClassPerson);
objectOk.push(p.getName() === "Florian Hug");










document.writeln("object:<br>")
if (objectOk.every(x => x)) {
    document.writeln("All " + objectOk.length + " tests ok.<br><br>");
} else {
    document.writeln("Not all tests ok! Details:<br>");
    for (let i = 0; i < objectOk.length; i++) {
        if (objectOk[i]) {
            document.writeln("Test " + i + " ok");
        } else {
            document.writeln("Test " + i + " failed");
        }
        document.write("<br>");
    }
}
