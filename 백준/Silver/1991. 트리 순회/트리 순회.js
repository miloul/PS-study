const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...t] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

n = +n;
let tree = {};
for (let i = 0; i < n; i++) {
  const [p, left, right] = t[i].split(" ");
  tree[p] = [left, right];
}

const preorder = (node) => {
  if (node === ".") return;
  const [l, r] = tree[node];
  result += node;
  preorder(l);
  preorder(r);
};

const inorder = (node) => {
  if (node === ".") return;
  const [l, r] = tree[node];
  inorder(l);
  result += node;
  inorder(r);
};

const postorder = (node) => {
  if (node === ".") return;
  const [l, r] = tree[node];
  postorder(l);
  postorder(r);
  result += node;
};

result = "";
preorder("A");
result += "\n";
inorder("A");
result += "\n";
postorder("A");

console.log(result);
