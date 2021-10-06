//샘플 예제
const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

const answer = solution(participant, completion);

console.log(answer);

function solution(participant, completion) {

    //값으로 순서 정렬
    participant.sort();
    completion.sort();

    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }

}

