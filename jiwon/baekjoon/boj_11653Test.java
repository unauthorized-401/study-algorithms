package baekjoon;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import java.io.*;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class boj_11653Test {
    @ParameterizedTest
    @DisplayName("예제 테스트")
    @MethodSource("testCases")
    void testPrimeFactorization(int input, String expected) throws IOException {
        String actual = runMethod(input);
        assertEquals(
                expected.trim().replace("\r", ""),
                actual.trim().replace("\r", "")
        );
    }

    static Stream<org.junit.jupiter.params.provider.Arguments> testCases() {
        return Stream.of(
                org.junit.jupiter.params.provider.Arguments.of(72, "2\n2\n2\n3\n3"),
                org.junit.jupiter.params.provider.Arguments.of(3, "3"),
                org.junit.jupiter.params.provider.Arguments.of(6, "2\n3"),
                org.junit.jupiter.params.provider.Arguments.of(2, "2"),
                org.junit.jupiter.params.provider.Arguments.of(9991, "97\n103")
        );
    }

    private String runMethod(int num) throws IOException {
        String inputData = num + "\n";
        InputStream oldIn = System.in;
        PrintStream oldOut = System.out;

        ByteArrayInputStream in = new ByteArrayInputStream(inputData.getBytes());
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        System.setIn(in);
        System.setOut(new PrintStream(out));

        try {
            boj_11653.main(new String[0]);
        } finally {
            System.setIn(oldIn);
            System.setOut(oldOut);
        }

        return out.toString().trim();
    }
}
