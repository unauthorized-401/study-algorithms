/**
 * 카테고리 : 큐
 * 문제 : https://www.acmicpc.net/problem/2164
 */
import { readFileSync } from "fs";

const N: number = Number(readFileSync("/dev/stdin").toString().trim());
const data: Array<number> = Array.from({ length: N }, (_, i) => i + 1);
let head = 0;

while (head < data.length - 1) {
  head++; // 맨 위 카드 버리기

  // 맨 위 카드를 맨 뒤로 이동
  data.push(data[head]);
  head++;
}

console.log(data[head]);
