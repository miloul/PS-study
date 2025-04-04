const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

let result = [];
let idx = 0;

const isGaro = (tictac) => {
  let tix = 0;
  let tio = 0;
  if (tictac[0] === tictac[1] && tictac[1] === tictac[2]) {
    if (tictac[0] === "X") tix++;
    else if (tictac[0] === "O") tio++;
  }

  if (tictac[3] === tictac[4] && tictac[4] === tictac[5]) {
    if (tictac[3] === "X") tix++;
    else if (tictac[3] === "O") tio++;
  }

  if (tictac[6] === tictac[7] && tictac[7] === tictac[8]) {
    if (tictac[6] === "X") tix++;
    else if (tictac[6] === "O") tio++;
  }

  return [tix, tio];
};

const isSero = (tictac) => {
  let tix = 0;
  let tio = 0;
  if (tictac[0] === tictac[3] && tictac[3] === tictac[6]) {
    if (tictac[0] === "X") tix++;
    else if (tictac[0] === "O") tio++;
  }

  if (tictac[1] === tictac[4] && tictac[4] === tictac[7]) {
    if (tictac[1] === "X") tix++;
    else if (tictac[1] === "O") tio++;
  }

  if (tictac[2] === tictac[5] && tictac[5] === tictac[8]) {
    if (tictac[2] === "X") tix++;
    else if (tictac[2] === "O") tio++;
  }

  return [tix, tio];
};

const isDae = (tictac) => {
  let tix = 0;
  let tio = 0;
  if (tictac[0] === tictac[4] && tictac[4] === tictac[8]) {
    if (tictac[0] === "X") tix++;
    else if (tictac[0] === "O") tio++;
  }

  if (tictac[2] === tictac[4] && tictac[4] === tictac[6]) {
    if (tictac[2] === "X") tix++;
    else if (tictac[2] === "O") tio++;
  }

  return [tix, tio];
};

const isTictac = (tictac) => {
  let [x, o] = isGaro(tictac);
  let [tx, to] = isSero(tictac);
  let [lx, lo] = isDae(tictac);

  return [x + tx + lx, o + to + lo];
};

while (true) {
  if (inputs[idx] === "end") {
    console.log(result.join("\n"));
    break;
  }

  let tictac = inputs[idx].split("");

  let cntx = 0;
  let cnto = 0;
  let cnte = 0;
  for (let i = 0; i < tictac.length; i++) {
    if (tictac[i] === "X") cntx++;
    else if (tictac[i] === "O") cnto++;
    else cnte++;
  }

  let [ticx, tico] = isTictac(tictac);

  if (cnte === 0) {
    // 다 찬 경우
    if (cnto === 4 && cntx === 5 && tico === 0) {
      result.push("valid");
    } else {
      result.push("invalid");
    }
  } else {
    // x가 이긴 경우
    if (tico === 0 && ticx === 1 && cntx == cnto + 1) {
      result.push("valid");
    }
    // o가 이긴 경우
    else if (tico === 1 && ticx === 0 && cntx == cnto) {
      result.push("valid");
    } else {
      result.push("invalid");
    }
  }

  idx++;
}
