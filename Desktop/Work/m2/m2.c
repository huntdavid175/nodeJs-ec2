#include <stdio.h>

int getNum(void);

void showMenu(void);

int powerCalculation(int baseNumber, int exponentNumber);

int numberRangeChecker(int valueToCheck, int minNum, int maxNum);

int main(void)
{
    int base = 1;
    int exponent = 1;
    int option;

    do
    {
        showMenu();
        option = getNum();

        switch (option)
        {
        case 1:
            printf(" Enter new base between 1 and 30: ");
            int currentBase = getNum();
            int isWithinBaseRange = numberRangeChecker(currentBase, 1, 30);

            if (isWithinBaseRange)
            {
                base = currentBase;
            }
            else
            {
                printf("Entered base is out of range");
            }

            break;
        case 2:
            printf("Enter new exponent between 1 and 6: ");
            int currentExponent = getNum();
            int isWithinExponentRange = numberRangeChecker(currentExponent, 1, 6);

            if (isWithinExponentRange)
            {
                exponent = currentExponent;
            }
            else
            {
                printf("Entered exponent is out of range");
            }
            break;
        case 3:
            printf("\n%d raised to the power %d is %d\n", base, exponent, powerCalculation(base, exponent));
            break;
        case 4:
            // printf("Exiting program...\n");
            break;
        default:
            printf("\nInvalid entry\n");
        }
    } while (option != 4);

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
    printf(" Option? \n");
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

int numberRangeChecker(int valueToCheck, int minNum, int maxNum)
{
    int isInRange;
    if (valueToCheck < minNum || valueToCheck > maxNum)
    {
        isInRange = 0;
    }
    else
    {
        isInRange = 1;
    }
    return isInRange;
}

// Function to get user input
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

int range(int yes, int flow, int cash)
{
    return 1;
}