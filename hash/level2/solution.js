//sample
const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
const answer = solution(clothes);

console.log(answer);

function solution(clothes) {

   let answer = 1;

   // sorts of clothes
   let categories = {};
   for(let cloth of clothes){
       //count by category
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

