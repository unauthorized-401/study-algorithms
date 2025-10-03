package baekjoon;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class boj_2869 {
    public static void main (String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer token = new StringTokenizer(reader.readLine(), " ");

        int morning = Integer.parseInt(token.nextToken());
        int afternoon = Integer.parseInt(token.nextToken());
        int tree = Integer.parseInt(token.nextToken());

        // 마지막 날에는 밤에 미끄러지지 않는다는 조건이 제일 중요
        // 전체 변수 기준을 마지막 날을 제외하도록 한다.

        // 달팽이가 도달해야 하는 높이 tree - morning
        int goal = tree - morning;

        // 하루에 올라가는 높이
        int day = morning - afternoon;

        // 총 높이 / 하루치 + 마지막 날
        System.out.println((int)Math.ceil((double) goal / day) + 1);
    }
}
