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



function sumArray(numbers: number[]): number{
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);

