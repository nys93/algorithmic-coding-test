const citations = [3, 0, 6, 1, 5];
solution(citations);

function solution(citations) {

    // Descending order
    citations = citations.sort(function (a, b) {
        return b - a;
    });

    // find H-index
    for (let i = 0; i < citations.length; i++){
        if(i >= citations[i]) return i;
    }

    return citations.length;
}