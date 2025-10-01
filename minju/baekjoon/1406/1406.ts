/**
 * 카테고리 : 연결리스트
 * 문제 : https://www.acmicpc.net/problem/1406
 */
import { readFileSync } from "fs";

type commandType = "L" | "D" | "B" | "P";

/** 클래스 정의 */
class ListNode<T> {
  data: T;
  prev: ListNode<T> | null;
  next: ListNode<T> | null;

  constructor(
    data: T,
    prev: ListNode<T> | null = null,
    next: ListNode<T> | null = null
  ) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList<T extends string> {
  private head: ListNode<T> | null = null; // 연결리스트 head
  private current: ListNode<T> | null = null; // 커서 위치

  constructor(data: Array<T>) {
    this.head = new ListNode<T>("" as T);
    this.current = this.head;
    for (let i = 0; i < data.length; i++) {
      const newNode: ListNode<T> = new ListNode<T>(data[i], this.current, null);

      if (this.current) {
        this.current.next = newNode;
      }

      newNode.prev = this.current;

      this.current = newNode;
    }
  }

  command(command: commandType, value: T | null = null): void {
    switch (command) {
      case "L": // 커서를 왼쪽으로
        if (this.current?.prev) this.current = this.current.prev;
        break;
      case "D": // 커서를 오른쪽으로
        if (this.current?.next) this.current = this.current.next;
        break;
      case "B": // 커서 왼쪽에 있는 문자를 삭제함
        // 커서가 더미 헤드를 가리키고 있으면 (맨 앞이면) 삭제할 게 없음
        if (this.current && this.current !== this.head) {
          const prevNode = this.current.prev!; // 더미 노드 덕분에 항상 존재
          const nextNode = this.current.next;

          // 1. 이전 노드와 다음 노드를 직접 연결
          prevNode.next = nextNode;

          // 2. 다음 노드가 있다면, 다음 노드의 prev도 이전 노드로 연결
          if (nextNode) {
            nextNode.prev = prevNode;
          }

          // 3. 커서를 한 칸 왼쪽으로 이동
          this.current = prevNode;
        }
        break;

      case "P": {
        if (value && this.current) {
          const nextNode = this.current.next;
          const newNode = new ListNode<T>(value, this.current, nextNode);

          if (nextNode) {
            nextNode.prev = newNode;
          }

          this.current.next = newNode;
          this.current = newNode;
        }

        break;
      }
      default:
        console.error("정의되지 않은 케이스");
    }
  }

  getLinkedListString(): string {
    let result = "";
    let target = this.head?.next;

    while (target) {
      if (target.data) result += target.data;
      target = target.next;
    }

    return result;
  }
}

/** 메인 함수 */

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const linkedList = new LinkedList<string>(input[0].split(""));
const count = Number(input[1]);
const commandList = input.slice(2);

for (let i = 0; i < count; i++) {
  const [commad, value] = commandList[i].split(" ");
  linkedList.command(commad as commandType, value);
}

console.log(linkedList.getLinkedListString());
