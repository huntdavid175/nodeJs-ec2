/*
 * FILE : m2.cpp
 * PROJECT : SENG1000 - Major #2
 * PROGRAMMER :
 * FIRST VERSION : 2024-02-15
 * DESCRIPTION :
 * This program calculates powers …
 */

#include <stdio.h>

int getNum(void);

void showMenu(void);

int powerCalculation(int baseNumber, int exponentNumber);

int numberRangeChecker(int valueToCheck, int minNum, int maxNum);

int main(void)
{
    int base = 1;
    int exponent = 1;
    int option = 0;

    /* Loop to start application */
    do
    {
        showMenu();        // Display the menu for the user
        option = getNum(); // Get the user input

        /* Check what the user inputs and run appropriate functions */
        switch (option)
        {
            /*If user inputs 1 request to set the base*/
        case 1:
            printf(" Enter new base between 1 and 30: ");
            int currentBase = getNum();
            int isWithinBaseRange = numberRangeChecker(currentBase, 1, 30); // Check is the user input is in range

            if (isWithinBaseRange)
            {
                base = currentBase; // if in range set base
            }
            else
            {
                printf("Entered base is out of range"); // If not print this error
            }

            break;

            /*If user inputs 2 request to set the exponent*/
        case 2:
            printf("Enter new exponent between 1 and 6: ");
            int currentExponent = getNum();
            int isWithinExponentRange = numberRangeChecker(currentExponent, 1, 6); // Check is the user input is in range

            if (isWithinExponentRange)
            {
                exponent = currentExponent;
            }
            else
            {
                printf("Entered exponent is out of range"); // If not print this error
            }
            break;

            /*If user inputs 3 request to calculate and display power*/
        case 3:
            printf("\n%d raised to the power %d is %d\n", base, exponent, powerCalculation(base, exponent));
            break;

            /*If user inputs 4 exit the application*/
        case 4:
            break;

            /*If user inputs any other number out of th 1-4 range
            print error*/
        default:
            printf("\nInvalid entry\n");
        }
    } while (option != 4);

    return 0;
}

//
// FUNCTION : showMenu
// DESCRIPTION :
// This function displays the menu to the user
// PARAMETERS :
// void
// RETURNS :
// void
//
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

// Function to check if a user's input is out of specified range
//
// FUNCTION : numberRangeChecker
// DESCRIPTION :
// This function is to check if a user's
// input is out of specified range
// PARAMETERS :
// int valueToCheck :  the number being checked
// int minNum : the minimum limit
// int maxNum : the maximum limit
// RETURNS :
// int : 0 if out of range
// 1 if in range
//
int numberRangeChecker(int valueToCheck, int minNum, int maxNum)
{
    int isInRange;
    /* Check if is value is in range */
    if (valueToCheck < minNum || valueToCheck > maxNum)
    {
        /*set is isInRange to 0 if i'ts out of range*/
        isInRange = 0;
    }
    else
    {
        /* if value is not in range this sets is isInRange to 1  */
        isInRange = 1;
    }
    return isInRange;
}

//
// FUNCTION : powerCalculation
// DESCRIPTION :
// This Function is to calculate power
// PARAMETERS :
// int baseNumber : base for calculating power
// int exponentNumber : exponent for calculating power
// RETURNS :
// int : calculated power
//
int powerCalculation(int baseNumber, int exponentNumber)
{
    int result = 1;

    /*Loop to calculate power
    will run till is less than exponent*/
    for (int i = 0; i < exponentNumber; i++)
    {
        /*On each iteration result is multiplied by the base
        and saved result variable*/
        result *= baseNumber;
    }
    return result;
}

//
// FUNCTION : getNum
// DESCRIPTION :
// This function is to get user input
// PARAMETERS :
// void
// RETURNS :
// int : input number
//
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
