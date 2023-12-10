// find max of two number

#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cout << "Enter a : ";
    cin >> a;
    cout << endl;
    cout << "Enter b : ";
    cin >> b;
    cout << endl;
    if (a >= b)
    {
        cout << "max is " << a;
    }
    else
    {
        cout << "max is " << b;
    }
}