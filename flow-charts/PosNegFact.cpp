// series 1! -2! 3! -4! 5! -6!

#include <iostream>
using namespace std;

int main()
{
    int n, sign = 1;
    cout << "Enter N : ";
    cin >> n;
    cout << endl;
    for (int i = 1; i <= n; i++)
    {
        cout << i;
        sign = sign * -1;
    }
}