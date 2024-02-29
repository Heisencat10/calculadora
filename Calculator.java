import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double num1, num2;
        System.out.println("Enter first number: ");
        num1 = input.nextDouble();
        System.out.println("Enter second number: ");
        num2 = input.nextDouble();
        System.out.println("Enter an operator (+, -, *, /): ");
        char operator = input.next().charAt(0);
        input.close();
        double result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
                        case '-':
                             result = num1 - num2;
                              break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                System.out.println("Invalid operator");
                return;
        }
        System.out.println(num1 + " " + operator + " " + num2 + " = " + result);
        
}
}