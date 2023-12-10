// print 1 12 123...

#include <iostream>
using namespace std;

int main()
{
    int n, c;
    cout << "Enter n : ";
    cin >> n;
    cout << endl;
    for (int i = 1; i <= n; i++)
    {
        for (c = 1; c <= i; c++)
        {
            cout << c;
        }
        cout << endl;
    }
}