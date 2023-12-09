// Q4. sum of n numbers

#include <iostream>
using namespace std;

int main()
{
    int n, sum = 0;
    cout << "Enter n : ";
    cin >> n;
    cout << endl;
    for (int i = 1; i <= n; i++)
    {
        sum = sum + i;
    }
    cout << "Sum of first " << n << " is " << sum;
}