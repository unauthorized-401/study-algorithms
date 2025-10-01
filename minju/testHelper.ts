/**
 * 백준 문제 테스트 헬퍼 함수
 */
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function runBaekjoonTest(
  input: string,
  fileName: string | undefined
): Promise<string> {
  try {
    const currentFolder = process.cwd();
    let command = "cd /Users/takminjoo/study/study-algorithms/minju &&";
    if (currentFolder.includes("baekjoon")) {
      command += ` echo "${input}" | pnpm run:ba ${fileName}`;
    } else if (currentFolder.includes("programmers")) {
      command += ` echo "${input}" | pnpm run:pro ${fileName}`;
    }

    const { stdout } = await execAsync(command);

    // 결과 확인 (npm 스크립트 메시지 제거하고 실제 출력만 반환)
    const lines = stdout.trim().split("\n");

    // npm 스크립트 실행 메시지들을 제거하고 실제 프로그램 출력만 필터링
    const resultLines = lines.filter(
      (line) =>
        line.trim() &&
        !line.startsWith("> ") &&
        !line.includes("minju@") &&
        !line.includes("cd baekjoon") &&
        !line.includes("scripts/run.sh") &&
        !line.includes("scripts/test.sh")
    );

    if (resultLines.length === 0) {
      throw new Error("실행 결과가 비어있습니다");
    }

    return resultLines.join("\n");
  } catch (error) {
    throw new Error(`테스트 실행 실패: ${error}`);
  }
}
