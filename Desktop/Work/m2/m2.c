#include <stdio.h>
#include <math.h>

int getNum(void);
void showMenu(void);

int powerCalculation(int, int);

int main(void)
{
    int base = 1;
    int exponent = 1;
    int option = 0;

    while (option != 4)
    {
        showMenu();
        option = getNum();

        switch (option)
        {
        case 1:
            printf(" Enter new base between 1 and 30: ");
            base = getNum();
            break;
        case 2:
            printf("Enter new exponent between 1 and 6: ");
            exponent = getNum();
            break;
        case 3:
            printf("\nBase raised to exponent is: %d\n", powerCalculation(base, exponent));
            break;
        case 4:
            printf("Exiting program...\n");
            break;
        default:
            printf("\nInvalid option. Please try again.\n");
        }
    }
    return 0;
}

// Function to print menu
void showMenu()
{
    printf("\n");
    printf("\n Menu:\n");
    printf("  1. Change base \n");
    printf("  2. Change exponent \n");
    printf("  3. Display base raised to exponent \n");
    printf("  4. Exit program \n");
    printf("Option? \n");
}

int powerCalculation(int baseNumber, int exponentNumber)
{
    int result = 1;
    for (int i = 0; i < exponentNumber; i++)
    {
        result *= baseNumber;
    }
    return result;
}

// FUnction to get user input
#pragma warning(disable : 4996);
int getNum(void)
{
    /* we will see in a later lecture how we can improve this code */
    char record[121] = {0}; /* record stores the string */
    int number = 0;
    /* NOTE to student: indent and brace this function consistent with
    your others */
    /* use fgets() to get a string from the keyboard */
    fgets(record, 121, stdin);
    /* extract the number from the string; sscanf() returns a number
     * corresponding with the number of items it found in the string */
    if (sscanf(record, "%d", &number) != 1)
    {
        /* if the user did not enter a number recognizable by
         * the system, set number to -1 */
        number = -1;
    }
    return number;
}