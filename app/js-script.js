class User {
    name
    age
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get myName() {
        return this.name
    }

    set myName(name) {
        this.name = name
    }

    print() {
        console.log('print => name ' + this.name + ' age ' + this.age);
        console.log(`print => name ${this.name} age ${this.age}`);
    }
}

const user2 = {
    name: "Vlad",
    age: 24,
    oncePrint() {
        console.log('oncePrint => name ' + this.name + ' age ' + this.age);
        console.log(`oncePrint => name ${this.name} age ${this.age}`);
    }
}


// let user = new User("Vlad", 24);
// console.log(user.myName);

// const objSpecial = {
//     name: "Vlad_123"
// }

// user2.oncePrint();

// objSpecial.oncePrint = user2.oncePrint;

// objSpecial.oncePrint();

// user.print();
// user2.oncePrint();