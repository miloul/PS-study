// 최소 힙

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const n = arr[0];

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getRightChildIndex(idx) {
    return idx * 2 + 2;
  }

  getLeftChildIndex(idx) {
    return idx * 2 + 1;
  }

  hasParent(idx) {
    return this.getParentIndex(idx) >= 0;
  }

  add(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 0) return null;

    const top = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return top;
  }

  heapifyUp() {
    let idx = this.heap.length - 1;
    while (this.hasParent(idx)) {
      const parent = this.getParentIndex(idx);
      if (this.heap[parent] > this.heap[idx]) {
        this.swap(parent, idx);
        idx = parent;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let idx = 0;
    while (this.getLeftChildIndex(idx) < this.heap.length) {
      let smallerIdx = this.getLeftChildIndex(idx);
      const rightIdx = this.getRightChildIndex(idx);
      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] < this.heap[smallerIdx]
      ) {
        smallerIdx = rightIdx;
      }
      if (this.heap[smallerIdx] < this.heap[idx]) {
        this.swap(smallerIdx, idx);
        idx = smallerIdx;
      } else {
        break;
      }
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

const heap = new MinHeap();
let answer = [];

for (let i = 1; i <= n; i++) {
  const k = arr[i];
  if (k === 0) {
    const p = heap.remove();
    answer.push(p !== null ? p : 0);
  } else {
    heap.add(k);
  }
}

console.log(answer.join("\n"));
