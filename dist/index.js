"use strict";
// console.log("hello");
// powershell에 tsc를 치면 ts파일을 index.js.map파일로 만들어준다.
// node.js는 typescript를 이해하지 못하기 때문에 일반적인 javascript 코드로 컴파일 하는 작업이 필요하다.
Object.defineProperty(exports, "__esModule", { value: true });
// const name = "yeseul",
// age = 19,
// gender = "female";
class Human {
    //생성자
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
;
const lynn = new Human('Lynn', 18, "gemale");
const sayHI = (person) => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
    //console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
};
console.log(sayHI(lynn));
//# sourceMappingURL=index.js.map