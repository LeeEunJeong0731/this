function student(name, number) {
  this.name = name;
  this.number = number;
}
let list = ["정영식", "신동현"];
let studentArr = [];
for (let i = 0; i < list.length; i++) {
  studentArr[i] = new student(list[i], i + 1);
}
console.log(studentArr);
