// console.log("hello");
// powershell에 tsc를 치면 ts파일을 index.js.map파일로 만들어준다.
// node.js는 typescript를 이해하지 못하기 때문에 일반적인 javascript 코드로 컴파일 하는 작업이 필요하다.

// const name = "yeseul",
// age = 19,
// gender = "female";

interface Human{ //ts에서만 작동됨 js에서는 작동안됨

    name : string,
    age : number,
    gender: string
}

const person = {
    name: "leeyeseul",
    age: 19,
    gender: "female"
};

const sayHI = (person: Human):string =>{
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
    //console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
} 

console.log(sayHI(person));
//만약 gender를 매개변수로 보내지 않는다면 js에서는 그냥 실행되는데 ts에서는 에러남
// sayHI = (name,age,gender?) -> 에러 안나고 you are a undefined로 나옴
export {}; 