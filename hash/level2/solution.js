//샘플 예제
const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
const answer = solution(clothes);

console.log(answer);

function solution(clothes) {

   let answer = 1;

   //의상종류
   let categories = {};
   for(let cloth of clothes){
       //옷 종류별 카운트
       if(categories[cloth[1]]){
           categories[cloth[1]]++;
       }else{
           categories[cloth[1]] = 1;
       }
   }

   for(let i of Object.keys(categories)){
       answer *= categories[i]+1;
   }

    return answer -1;

}

