
let participants = ["leo", "kiki", "eden"];
//1 <= participants <= 100,000
let completion = ["eden", "kiki"];
//completion < participants - 1
const answer = solution(participants, completion);

console.log(answer);

function solution(participants, completion) {

    let answer = participants.concat(completion)
        .filter(item => !participants.includes(item) || !completion.includes(item));

    return answer;
}

