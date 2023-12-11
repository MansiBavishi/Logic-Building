// Factorial of 1 3 5 7 9

#include <iostream>
using namespace std;

int main()
{
    int n;
    cout << "Enter N : ";
    cin >> n;
    cout << endl;
    for (int i = 1; i <= n; i = i + 2)
    {
        cout << i;
        int cnt = 1;
        for (int j = 1; j <= i; j++)
        {
            cnt = cnt * j;
        }
        cout << cnt << endl;
    }
}