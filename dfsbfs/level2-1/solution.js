const numbers = [1, 1, 1, 1, 1];
const target = 3;
const answer = solution(numbers, target);

console.log(answer);

function solution(numbers, target) {
    let answer = 0;

    dfs(0, 0);

    function dfs(index, sum) {
        if(index === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }

        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }

    return answer;
}