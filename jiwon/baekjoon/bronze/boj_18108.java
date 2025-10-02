package baekjoon.bronze;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class boj_18108 {
    private static final int MINUS_YEAR = 543;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String s = br.readLine();

        int year = Integer.parseInt(s);

        System.out.println(year - MINUS_YEAR);
    }
}
