/**
 * 백준 23309 지하철 - Vitest 테스트
 */
import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "23309";

describe("백준 23309번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4 4
2 7 3 5
BN 5 11
BP 3 6
CP 2
CN 7`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
7
11
6`);
  });
});
