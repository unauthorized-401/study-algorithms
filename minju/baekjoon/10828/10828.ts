/**
 * 카테고리 : 스택
 * 문제 : https://www.acmicpc.net/problem/10828
 */
class Stack {
  private data: number[] = [];

  push(data: number): void {
    this.data.push(data);
  }

  pop(): number {
    return this.data.pop() ?? -1;
  }

  size(): number {
    return this.data.length;
  }

  empty(): number {
    return this.data.length === 0 ? 1 : 0;
  }

  top(): number {
    return this.data[this.data.length - 1] ?? -1;
  }
}

// 메인로직
import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = new Stack();
const N = Number(input[0]);
const result: string[] = [];

for (let i = 0; i < N; i++) {
  const [command, data] = input[i + 1].split(" ");

  switch (command) {
    case "push":
      stack.push(Number(data));
      break;
    case "pop":
      result.push(String(stack.pop()));
      break;
    case "size":
      result.push(String(stack.size()));
      break;
    case "empty":
      result.push(String(stack.empty()));
      break;
    case "top":
      result.push(String(stack.top()));
      break;
  }
}

console.log(result.join("\n"));
