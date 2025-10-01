/**
 * 백준 23309 지하철 - Vitest 테스트
 */
import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2164";

describe("백준 2164번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = "6";

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("4");
  });
});
