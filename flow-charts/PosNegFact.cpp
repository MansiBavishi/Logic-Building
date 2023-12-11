// series 1! -2! 3! -4! 5! -6!

#include <iostream>
using namespace std;

int main()
{
    int n, fact = 1;
    cout << "Enter N : ";
    cin >> n;
    cout << endl;
    for (int i = 3; i <= (n * n) / 2; i = i + 2)
    {
        cout << fact << endl;
        fact = fact * i * (i - 1) * (-1);
    }
}