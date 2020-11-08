console.log("======   Ex.1: Filter   =======");
String.prototype.filter = function (...arr) {
  let str = this.valueOf();
  //   console.log(str);
  arr.forEach((bw) => (str = str.replace(bw, "")));
  str = str.replace("  ", " ");
  return str;
};
console.log("This house is not nice!".filter("not"));

console.log("======   Ex.2: Array.BubbleSort   =======");
Array.prototype.bubbleSort = function () {
  let arr = this;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};
let arr = [6, 4, 0, 3, -2, 1];
console.log(`unsorted: ${arr}  sorted array: ${arr.bubbleSort()}`);

arr = [1, 7, 0, 8, -8, 0];
console.log(`unsorted: ${arr}  sorted array: ${arr.bubbleSort()}\n\n`);

console.log("======   Ex.3a    =======");
function Person(name) {
  this.name = name;
}

const teacher = new Person("Saha Tamir");
Person.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};
teacher.teach("CS472");
console.log("======   Ex.3b    =======");
function Person(name) {
  var self = {
    name: name,
    teach: function (subject) {
      console.log(`${this.name} is now teaching ${subject}\n\n`);
    },
  };
  return self;
}
let person = new Person();
let teacher2 = Object.create(person);
teacher2.name = "Jim Carrel";
teacher2.teach("CS657");

console.log("======   Ex.4    =======");
const person2 = {
  name: "Adeleke",
  age: 30,
  greeting: function () {
    console.log(`“Greetings, my name is ${this.name} and I am
${this.age} years old`);
  },
  salute: function () {
    console.log(`Good morning!, and in case I dont see you,
good afternoon, good evening and good night!`);
  },
};

const Student = Object.create(person2);
Student.major = "Software Engineer";
Student.greeting = function () {
  console.log(`“Hey, my name is ${this.name} and I am studying
${this.major}`);
};

const Professor = Object.create(person2);
Professor.department = "Computer Science";
Professor.greeting = function () {
  console.log(`“Good day, my name is ${this.name} and I am in the 
${this.department} department\n\n`);
};

let student = Object.create(Student);
student.salute();
student.greeting();

let professor = Object.create(Professor);
professor.salute();
professor.greeting();
