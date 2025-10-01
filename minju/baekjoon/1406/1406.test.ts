/**
 * 백준 1406번 에디터 - Vitest 테스트
 */
import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME ='1406';

describe("백준 1406번 - 공식 테스트 케이스", async () => {
  it("예제 1: abcd에 P x, L, P y 명령", async () => {
    const input = `abcd
3
P x
L
P y`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("abcdyx");
  });

  it("예제 2: 백준 공식 입력 형식", async () => {
    const input = `abc
9
L
L
L
L
L
P x
L
B
P y`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("yxabc");
  });

  it("예제 3: 백준 공식 입력 형식", async () => {
    const input = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("yxz");
  });

  it("테스트케이스 1", async () => {
    const input = `a
4
P y
P x
P z
B`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("ayx");
  });
});
