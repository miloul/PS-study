// 크로스 컨트리

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
for (let i = 0; i < T; i++) {
  const N = +input[i * 2];
  const players = input[i * 2 + 1].split(" ").map(Number);
  solution(N, players);
}

function solution(N, players) {
  // 1. 팀별 주자 수 구하기
  const teams = new Set(players);
  const teamObj = {};
  [...teams].forEach((e) => (teamObj[e] = 0));
  players.forEach((e) => (teamObj[e] += 1));

  // 2. 주자가 6명이 되지 않는 팀 제외
  for (let teamNum in teamObj) {
    if (teamObj[teamNum] < 6) delete teamObj[teamNum];
  }

  // 3. 팀별 각 주자의 점수 구하기
  const scoreObj = {};
  let score = 1;
  players.forEach((num) => {
    if (teamObj.hasOwnProperty(num)) {
      if (scoreObj[num]) scoreObj[num].push(score++);
      else {
        scoreObj[num] = [];
        scoreObj[num].push(score++);
      }
    }
  });

  // 4. 팀별 4등까지의 점수의 합, 5등까지의 점수의 합 구하기
  for (let teamNum in scoreObj) {
    const scoreToFour = scoreObj[teamNum]
      .slice(0, 4)
      .reduce((acc, cur) => (acc += cur), 0);
    const scoreToFive = scoreObj[teamNum]
      .slice(0, 5)
      .reduce((acc, cur) => (acc += cur), 0);
    scoreObj[teamNum] = [scoreToFour, scoreToFive];
  }

  // 5. 점수가 제일 작은 팀 구하기
  const teamNums = Object.keys(teamObj);
  let minScore = scoreObj[teamNums[0]];
  let answer = teamNums[0];
  for (let i = 1; i < teamNums.length; i++) {
    if (minScore[0] === scoreObj[teamNums[i]][0]) {
      minScore =
        minScore[1] < scoreObj[teamNums[i]][1]
          ? minScore
          : scoreObj[teamNums[i]];
      answer = minScore[1] < scoreObj[teamNums[i]][1] ? answer : teamNums[i];
    } else {
      minScore =
        minScore[0] < scoreObj[teamNums[i]][0]
          ? minScore
          : scoreObj[teamNums[i]];
      answer = minScore[0] < scoreObj[teamNums[i]][0] ? answer : teamNums[i];
    }
  }
  console.log(answer);
}
