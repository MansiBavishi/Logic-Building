// Q5. Multiplication of n numbers

#include <iostream>
using namespace std;

int main()
{
    int n, mul = 1;
    cout << "Enter n : ";
    cin >> n;
    cout << endl;
    for (int i = 1; i <= n; i++)
    {
        mul = mul * i;
    }
    cout << "multiplication of first " << n << " Number is " << mul;
}