package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_2884 {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(reader.readLine(), " ");

        int hour = Integer.parseInt(token.nextToken());
        int minute = Integer.parseInt(token.nextToken());

        if (minute >= 45) {
            System.out.println(hour + " " + (minute - 45));
        } else {
            if (hour == 0) {
                System.out.println(23 + " " + (minute + 60 - 45));
            } else {
                System.out.println((hour-1) + " " + (minute + 60 - 45));
            }
        }
    }
}
