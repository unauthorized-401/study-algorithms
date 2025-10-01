/**
 * 카테고리 : 큐
 * 문제 : https://www.acmicpc.net/problem/10845
 */
import { readFileSync } from "fs";

class Queue {
  private data: Array<number> = [];

  push(data: number): void {
    this.data.push(data);
  }

  pop(): number {
    const result = this.data[0] ?? -1;
    this.data = this.data.slice(1);
    return result;
  }

  size(): number {
    return this.data.length;
  }

  empty(): number {
    if (this.data.length > 0) {
      return 0;
    } else {
      return 1;
    }
  }
  front(): number {
    return this.data[0] ?? -1;
  }
  back(): number {
    return this.data[this.data.length - 1] ?? -1;
  }
}

// 메인 로직
const queue = new Queue();
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const commandList = input.slice(1);
const output = [];

for (let i = 0; i < N; i++) {
  const [command, value] = commandList[i].split(" ");
  switch (command) {
    case "push":
      queue.push(Number(value));
      break;
    case "pop":
      output.push(queue.pop());
      break;
    case "size":
      output.push(queue.size());
      break;
    case "empty":
      output.push(queue.empty());
      break;
    case "front":
      output.push(queue.front());
      break;
    case "back":
      output.push(queue.back());
      break;
  }
}

console.log(output.join("\n"));
