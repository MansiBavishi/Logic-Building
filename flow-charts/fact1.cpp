// Factorial of 1 3 5 7 9

#include <iostream>
using namespace std;

int main()
{
    int n, fact = 1, i = 2;
    cout << "Enter n : ";
    cin >> n;
    if (n >= 1)
    {
        cout << fact << endl;
        for (; n > 1; --n)
        {
            fact = fact * i * (i + 1);
            i = i + 2;
            cout << fact << endl;
        }
    }
}
