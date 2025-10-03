package baekjoon.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_1193 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int x = Integer.parseInt(br.readLine());

        // 1/1
        // 1/2 2/1
        // 3/1 2/2 1/3
        // 1/4 2/3 3/2 4/1
        // 5/1 4/2 3/3 2/4 1/5

        int line = 1;

        // x가 몇 번째 라인인지 찾기
        while (x > line) {
            x -= line;
            line += 1;
        }

        // 분자/분모 찾기
        if (line % 2 == 0) {
            System.out.println(x + "/" + (line-x+1));
        } else {
            System.out.println((line-x+1) + "/" + x);
        }
    }
}
