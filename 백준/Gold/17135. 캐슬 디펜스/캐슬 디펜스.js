const { count } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, D] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split(" ").map(Number));
let answer = 0;

// 적 위치에 따라 시뮬레이션 실행
const simulation = (archers) => {
  let count = 0;
  const tempMap = map.map((row) => [...row]); // 맵 복사

  const inRange = (x, y) => x >= 0 && y >= 0 && x < N && y < M;

  // 적 제거 시뮬레이션 실행
  for (let turn = 0; turn < N; turn++) {
    const targets = new Set(); // 이번 턴에 제거될 적들

    archers.forEach((archer) => {
      let target = null;
      let minDist = D + 1;

      // 궁수가 사정거리 내에 있는 적을 찾음
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (tempMap[i][j] === 1) {
            const dist = Math.abs(N - i) + Math.abs(archer - j);
            if (dist <= D) {
              if (dist < minDist || (dist === minDist && j < target[1])) {
                target = [i, j];
                minDist = dist;
              }
            }
          }
        }
      }
      if (target) {
        targets.add(`${target[0]} ${target[1]}`);
      }
    });

    // 공격된 적 제거
    targets.forEach((target) => {
      const [x, y] = target.split(" ").map(Number);
      if (tempMap[x][y] === 1) {
        count++;
        tempMap[x][y] = 0;
      }
    });

    // 적 이동
    tempMap.pop(); // 맨 아래 행 제거
    tempMap.unshift(new Array(M).fill(0)); // 새로운 행 추가
  }

  return count;
};

// 궁수 위치 선택 (조합)
const combination = (arr, selectNum) => {
  const results = [];
  if (selectNum === 1) return arr.map((value) => [value]);
  arr.forEach((current, index) => {
    const smallerCombinations = combination(
      arr.slice(index + 1),
      selectNum - 1
    );
    smallerCombinations.forEach((smallerCombination) => {
      results.push([current, ...smallerCombination]);
    });
  });
  return results;
};

// 궁수 배치 모든 경우 탐색
const archerPositions = combination(
  Array.from({ length: M }, (_, i) => i),
  3
);

archerPositions.forEach((archers) => {
  const result = simulation(archers);
  answer = Math.max(answer, result);
});

console.log(answer);
