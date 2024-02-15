#include <stdio.h>

void showMenu(void);

int main(void)
{
    showMenu();
    return 0;
}

void showMenu()
{
    printf("Menu:\n");
    printf("  1. Change base \n");
    printf("  2. Change exponent \n");
    printf("  3. Display base raised to exponent \n");
    printf("  4. Exit program \n");
    printf("Option? \n");
}