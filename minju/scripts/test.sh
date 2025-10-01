#!/bin/bash


if [ $# -eq 0 ]; then
    echo "사용법: $0 <문제번호>"
    echo "예시: $0 1406"
    exit 1
fi

PROBLEM_NUMBER=$1

# 폴더가 존재하는지 확인
if [ -d "$PROBLEM_NUMBER" ]; then
    # 폴더가 있으면 폴더 안의 테스트 파일 실행
    TEST_FILE="${PROBLEM_NUMBER}/${PROBLEM_NUMBER}.test.ts"
else
    # 폴더가 없으면 직접 테스트 파일 실행
    TEST_FILE="${PROBLEM_NUMBER}.test.ts"
fi

# 테스트 파일이 존재하는지 확인
if [ ! -f "$TEST_FILE" ]; then
    echo "오류: 테스트 파일을 찾을 수 없습니다: $TEST_FILE"
    exit 1
fi

# vitest로 특정 테스트 파일 실행
npx vitest "$TEST_FILE" --run --config ../vitest.config.ts
