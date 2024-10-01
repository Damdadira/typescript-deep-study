/**타입 지정해서 선언*/
let count = 0;
count += 1;
// count = '갑자기 문자열' //에러 발생

const message: string = 'hello world'; 
const done: boolean = true;
const numbers: number[] = [1,2,3];
const messages: string[] = ['hi', 'hello'];

let mightBeUndefined: string | undefined = undefined; //string일수도 있고, undefined일수도 있음
let nullableNumber: number | null = null; //number일수도 있고, null일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; //red, orange, yellow 중 하나임
color: 'yellow';
// color = 'green'; //에러 발생



/**함수에서 타입 지정 */
function sum(x: number, y: number): number{
  return x+y;
}
sum(1,2);

function sumArray(numbers: number[]): number{
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1,2,3,4,5]);

//함수에서 아무것도 반환하지 않아야 한다면 반환 타입을 void로 설정하면 됨
function returnNothing(): void{
  console.log('hihi');
}



/**interface 사용해보기 */
interface Shape{
  getArea(): number;
}

//Circle이 Shape의 조건을 충족하겠다는것을 명시
class Circle implements Shape{
  radius: number;

  constructor(radius: number){
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Ractangle implements Shape{
  width: number;
  height: number;

  constructor(width: number, height: number){
    this.width = width;
    this.height  = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Ractangle(10,5)];
shapes.forEach(shape => {
  console.log(shape.getArea())
})



/**일반 객체를 interface로 타입 설정하기 */
interface Person{
  name: string;
  age?: number;
}

interface Developer extends Person{
  skills: string[];
}

const person: Person = {
  name: '홍길동',
  age: 20
}

const expert: Developer = {
  name: '강감찬',
  skills: ['javascript', 'react']
}

const people: Person[] = [person, expert];
