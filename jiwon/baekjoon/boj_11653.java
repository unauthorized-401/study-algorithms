package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_11653 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());

        if (num > 1) {
            getPrimeFactorization(num);
        }
    }

    private static void getPrimeFactorization(int num) {
        for (int i = 2; i * i <= num; i++) {
            while (num % i == 0) {
                System.out.println(i);
                num /= i;
            }
        }

        // 마지막으로 남은 수 고려
        if  (num > 1) {
            System.out.println(num);
        }
    }
}
