//sample
const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

solution(genres, plays);

function solution(genres, plays) {

    const groupByGenre = genres.reduce((acc, cur, index) => {
        if (!acc[cur]) {
            acc[cur] = {
                playedCount: 0,
                playList: [],
            };
        }

        acc[cur].playedCount += plays[index];
        acc[cur].playList.push([index, plays[index]]);

        return acc;
    }, {});

    const groupByGenreList = Object.values(groupByGenre).sort(
        (genre1, genre2) => {
            return genre2.playedCount - genre1.playedCount;
        },
    );

    const answer = groupByGenreList.reduce((acc, genre) => {
        genre.playList.sort((play1, play2) => {
            return play2[1] - play1[1];
        });

        acc.push(genre.playList[0][0]);

        if (genre.playList.length > 1) {
            acc.push(genre.playList[1][0]);
        }

        return acc;
    }, []);


    return answer;
}

