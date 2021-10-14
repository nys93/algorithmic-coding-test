const array =  [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

const answer = solution(array, commands);
console.log(answer);

function solution(array, commands) {

    let answer = [];
    let sortedArray =[];

    let startNum = 0;
    let endNum = 0;
    let splitNum = 0;

    for(let i = 0; i < commands.length; i++){
        startNum = commands[i][0];
        endNum = commands[i][1];
        splitNum = commands[i][2];

        sortedArray = array.slice((startNum-1), (endNum))
        sortedArray = sortedArray.sort((a,b) => a - b);

        answer.push(sortedArray[splitNum-1]);
    }

    return answer;
}