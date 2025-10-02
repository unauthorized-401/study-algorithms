/**
 * 백준 23309 지하철 - Vitest 테스트
 */
import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10828";

describe("백준 10828번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
2
0
2
1
-1
0
1
-1
0
3`);
  });

  it("예제 2", async () => {
    const input = `7
pop
top
push 123
top
pop
top
pop`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`-1
-1
123
123
-1
-1`);
  });
});
