const numbers = [6, 10, 2];
const answer = solution(numbers);

console.log(answer);

function solution(numbers) {

    const answer = numbers.map((number) => number.toString()).sort((a, b) => (b+a) - (a+b)).join("");
    return answer.replace(/^0+/, "0");
}