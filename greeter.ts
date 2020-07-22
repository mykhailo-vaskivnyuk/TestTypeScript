interface Person {
    firstname: string;
    lastname: string;
}

class Student {
    fullname: string;

    constructor(public firstname: string, public middleinitial: string, public lastname: string) {
        this.fullname = firstname + ' ' + middleinitial + ' ' + lastname;
    }
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstname + ' ' + person.lastname;
}

let user = new Student('Mykhailo', 'Ivanovych', 'Vaskivnyuk');

document.body.innerHTML = greeter(user);
