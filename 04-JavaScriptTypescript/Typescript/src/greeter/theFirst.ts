class Student{
    fullName : string;
    constructor(public firstName:string, public middleInitial:string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}


function greeter(person: Person){
    return "hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
alert(greeter(user));

console.log(greeter(user));